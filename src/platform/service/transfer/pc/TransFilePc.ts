import {FileUploadOptions, ExeFileUploadResult, ITransFile} from "../ITransFile";


import {FileUploader} from "./file-upload/file-uploader.class";
import {FileUploadAdaper} from "./file-upload/FileUploadAdaper";
import {FileUploaderOptions} from "./file-upload/file.interface";
import {Injectable} from "@angular/core";

/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
@Injectable()
export class TransFilePc implements ITransFile {
  public _uploader: FileUploader;
  public _fileUploadAdaper: FileUploadAdaper;

  constructor() {


  }

  upload(fileUrl: string, serveUrl: string, options?: FileUploadOptions, trustAllHosts?: boolean): Promise<any> {

    this._uploader = new FileUploader({url: serveUrl});
    this._fileUploadAdaper = new FileUploadAdaper(this._uploader);

    let fileUploaderOptions: FileUploaderOptions;
    fileUploaderOptions.headers[0].name = "token";
    fileUploaderOptions.headers[0].value = options.headers + "";
    fileUploaderOptions.url = serveUrl;
    return new Promise((resolve, reject) => {
      this._fileUploadAdaper.upload(fileUploaderOptions, function (responseData) {
          resolve(responseData);
        },
        function onFail(error) {
          reject(error);
        });
    });
  }

  download(source: string, target: string, trustAllHosts?: boolean, options?: { [p: string]: any }): Promise<any> {
    return undefined;
  }

  onProgress(listener: (event: ProgressEvent) => any): void {
  }


}
