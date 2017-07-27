


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

  upload(fileUrl: string, url: string, options?: FileUploadOptions): Promise<ExeFileUploadResult> {
    return this.transFile.upload(fileUrl,url,options);
  }

  chooseFile(options?: FileUploadOptions): Promise<any> {
    return this.transFile.chooseFile(options);
  }

  download(source: string, target: string, options?: { [p: string]: any }): Promise<any> {
    return undefined;
  }





}
