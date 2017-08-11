

import { Headers} from "./file-upload/file-uploader.class";
import {FileUploader} from "./file-upload/file-uploader.class";
import {FileUploaderOptions} from "./file-upload/file.interface";
import {Injectable} from "@angular/core";
import {ITransFile, FileUploadOptions, FileOrUrl} from "../../../service/TransFile.service";
import {AuthService} from "../../../Auth.service";
import {log} from "../../../util/util";

/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
@Injectable()
export class TransFilePc implements ITransFile {


  fileUploaderOptions: FileUploaderOptions;
  uploader: FileUploader;
  headersList?: Array<Headers> = new Array<Headers>();
  constructor(public authService: AuthService) {

  }

  upload(fileUrl: string|File[], serveUrl: string, options?: FileUploadOptions): Promise<any> {
    this.fileUploaderOptions = {
      url: serveUrl,
      // authTokenHeader: this.authService.getToken(),
      autoUpload: true
    };
    let header: Headers = {
      name: "token",
      value: this.authService.getToken()
    };
    this.headersList.push(header);
    this.fileUploaderOptions.headers = this.headersList;
    if(!this.uploader){
      this.uploader = new FileUploader(
        this.fileUploaderOptions);
    }

    log("initFileUploader token", this.authService.getToken());
     let  file:FileOrUrl=fileUrl;

    return new Promise((resolve, reject) => {

      this.uploader.onSuccessItem = (item: any,response:string,status:number, headers:any)=>{
        if(!response){
          return;
        }
        resolve(
          {response: response?response:""});
         }
      this.uploader.onErrorItem = (item: any,response:string,status:number, headers:any)=>{
        if(!response){
          return;
        }
        reject({response: response?response:""});
      }
      this.uploader.addToQueue(<File[]>file,this.fileUploaderOptions);
      this.uploader.uploadAll();
    });
  }

  chooseFile(options?: FileUploadOptions): Promise<any> {
    throw new Error("Method not implemented.");
  }

  download(source: string, target: string, options?: { [p: string]: any }): Promise<any> {
    throw new Error("Method not implemented.");
  }


}
