import {FileUploadOptions, ExeFileUploadResult, ITransFile} from "../ITransFile";
import {Injectable} from "@angular/core";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
@Injectable()
export class TransFileWechat implements ITransFile{

  upload(fileUrl: string, url: string, options?: FileUploadOptions, trustAllHosts?: boolean): Promise<any> {
    return undefined;
  }

  download(source: string, target: string, trustAllHosts?: boolean, options?: { [p: string]: any }): Promise<any> {
    return undefined;
  }

  onProgress(listener: (event: ProgressEvent) => any): void {
  }




}
