import {Injectable} from "@angular/core";
/**
 * Created by yefs on 2017/7/11.
 *  跨平台上传图片
 *
 */
export interface FileUploadOptions {
  /**
   * The name of the form element.
   * Defaults to 'file'.
   */
  fileKey?: string;
  /**
   * The file name to use when saving the file on the server.
   * Defaults to 'image.jpg'.
   */
  fileName?: string;
  /**
   * The HTTP method to use - either PUT or POST.
   * Defaults to POST.
   */
  httpMethod?: string;
  /**
   * The mime type of the data to upload.
   * Defaults to image/jpeg.
   */
  mimeType?: string;
  /**
   * A set of optional key/value pairs to pass in the HTTP request.
   */
  params?: {
    [s: string]: any;
  };
  /**
   * Whether to upload the data in chunked streaming mode.
   * Defaults to true.
   */
  chunkedMode?: boolean;
  /**
   * A map of header name/header values. Use an array to specify more
   * than one value. On iOS, FireOS, and Android, if a header named
   * Content-Type is present, multipart form data will NOT be used.
   */
  headers?: {
    [s: string]: any;
  };
}
export interface ExeFileUploadResult {

  response: string;

}

export interface ITransFile{
  /**
   * Sends a file to a server.
   *
   * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
   * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
   * @param {FileUploadOptions} options  Optional parameters.
   * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
   * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
   */
  upload(fileUrl: string, url: string, options?: FileUploadOptions, trustAllHosts?: boolean): Promise<any>;
  /**
   * Downloads a file from server.
   *
   * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
   * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
   * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
   * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
   * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
   */
  download(source: string, target: string, trustAllHosts?: boolean, options?: {
    [s: string]: any;
  }): Promise<any>;
  /**
   * Registers a listener that gets called whenever a new chunk of data is transferred.
   * @param listener {function} Listener that takes a progress event.
   */
  onProgress(listener: (event: ProgressEvent) => any): void;
}

