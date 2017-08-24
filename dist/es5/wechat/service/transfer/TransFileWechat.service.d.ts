import { ITransFile, FileUploadOptions } from "../../../service/TransFile.service";
import { WechatPlatform } from "../../WechatPlatform";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
export declare class TransFileWechat implements ITransFile {
    private wechatPlatform;
    constructor(wechatPlatform: WechatPlatform);
    upload(fileUrl: string, url: string, options?: FileUploadOptions): Promise<any>;
    chooseFile(options?: FileUploadOptions): Promise<any>;
    download(source: string, target: string, options?: {
        [s: string]: any;
    }): Promise<any>;
}
