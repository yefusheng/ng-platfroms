import { Headers } from "./file-upload/file-uploader.class";
import { FileUploader } from "./file-upload/file-uploader.class";
import { FileUploaderOptions } from "./file-upload/file.interface";
import { ITransFile, FileUploadOptions } from "../../../service/TransFile.service";
import { AuthService } from "../../../Auth.service";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
export declare class TransFilePc implements ITransFile {
    authService: AuthService;
    fileUploaderOptions: FileUploaderOptions;
    uploader: FileUploader;
    headersList?: Array<Headers>;
    constructor(authService: AuthService);
    upload(fileUrl: string | File[], serveUrl: string, options?: FileUploadOptions): Promise<any>;
    chooseFile(options?: FileUploadOptions): Promise<any>;
    download(source: string, target: string, options?: {
        [p: string]: any;
    }): Promise<any>;
}
