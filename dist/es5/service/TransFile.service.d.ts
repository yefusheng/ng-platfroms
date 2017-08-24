/**
 * Created by yefs on 2017/7/11.
 *  文件传输
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
export declare type FileOrUrl = string | File[];
export interface ITransFile {
    chooseFile(options?: FileUploadOptions): Promise<any>;
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} options  Optional parameters.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    upload(file: any, url: string, options?: FileUploadOptions): Promise<any>;
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
     */
    download(source: string, target: string, options?: {
        [s: string]: any;
    }): Promise<any>;
}
export declare class TransFileService implements ITransFile {
    private transFile;
    constructor(transFile: ITransFile);
    upload(fileUrl: string, url: string, options?: FileUploadOptions): Promise<ExeFileUploadResult>;
    chooseFile(options?: FileUploadOptions): Promise<any>;
    download(source: string, target: string, options?: {
        [p: string]: any;
    }): Promise<any>;
}
