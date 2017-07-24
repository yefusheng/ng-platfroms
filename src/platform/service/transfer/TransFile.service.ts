


import {Injectable} from "@angular/core";
import {FileUploadOptions, ExeFileUploadResult, ITransFile} from "./ITransFile";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */

@Injectable()

export class  TransFileService  implements ITransFile {

  constructor(
   private  transFile :ITransFile
  ){

  }

  upload(fileUrl: string, url: string, options?: FileUploadOptions, trustAllHosts?: boolean): Promise<ExeFileUploadResult> {
    return this.transFile.upload(fileUrl,url,options,trustAllHosts);
  }

  download(source: string, target: string, trustAllHosts?: boolean, options?: { [p: string]: any }): Promise<any> {
    return undefined;
  }

  onProgress(listener: (event: ProgressEvent) => any): void {
  }



}
