import { TransferObject } from "@ionic-native/transfer";
import { ExeFileUploadResult, ITransFile, FileUploadOptions } from "../../../service/TransFile.service";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
export declare class TransFileNative implements ITransFile {
    constructor();
    fileTransfer: TransferObject;
    /**
     * app上传图片
     */
    uploadPicture(path: string, url: string): Promise<ExeFileUploadResult>;
    upload(path: string, url: string): Promise<ExeFileUploadResult>;
    chooseFile(options?: FileUploadOptions): Promise<any>;
    download(source: string, target: string, options?: {
        [s: string]: any;
    }): Promise<any>;
}
