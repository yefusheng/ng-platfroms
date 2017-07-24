import {FileUploadOptions, ExeFileUploadResult, ITransFile} from "../ITransFile";
import {Transfer, TransferObject} from "@ionic-native/transfer";
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs'
import {FileUploadResult} from "ionic-native";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
@Injectable()
export class TransFileNative implements ITransFile{
  constructor(
    private transfer: Transfer,
  ) {
  }

  fileTransfer: TransferObject = this.transfer.create();
  /**
   * app上传图片
   */
  uploadPicture(path: string,url: string) :Promise<ExeFileUploadResult> {

    return this.upload(path,url);
  }
  upload(path: string,url: string) :Promise<ExeFileUploadResult> {
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: path.substr(path.lastIndexOf('/') + 1)
    }
    let observable= Observable.fromPromise(this.fileTransfer.upload(path,url, options)).map((result)=> {
        let exeFileUploadResult :ExeFileUploadResult;
        exeFileUploadResult.response=result.response;
        console.log("exeFileUploadResult"+result);
       return exeFileUploadResult;
    });

    return observable.toPromise();

  }
  download(source: string, target: string, trustAllHosts?: boolean, options?: { [s: string]: any; }): Promise<any> {
    throw new Error('Method not implemented.');
  }

  onProgress(listener: (event: ProgressEvent) => any): void {
    throw new Error('Method not implemented.');
  }


}
