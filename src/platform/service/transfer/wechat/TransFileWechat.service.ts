import {FileUploadOptions, ExeFileUploadResult, ITransFile} from "../ITransFile";
import {Injectable} from "@angular/core";
import {BasePlatform} from "../../../BasePlatform";
import {BaseService} from "../../../BaseService";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
@Injectable()
export class TransFileWechat extends BaseService implements ITransFile{



  upload(fileUrl: string, url: string, options?: FileUploadOptions): Promise<any> {

    return  new Promise(function(resolve, reject) {
      this.exePlatform.getPlatformContext().uploadImage({
        localId: fileUrl, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProcess: 1,           // 默认为1，显示进度提示
        success: function (res) {
          resolve(res);
        },
        fail: function (res) {
          reject(res);
        }
      });
    });
  }


  chooseFile(options?: FileUploadOptions): Promise<any> {
    return  new Promise(function(resolve, reject) {
      this.exePlatform.getPlatformContext().chooseImage({
        count: 1,   //允许最大选择数
        // sizeType: sizeType,      // 可以指定是原图还是压缩图，默认二者都有
        // sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          resolve(res);
        },
        fail: function (res) {
          reject(res);
        }
      });
    });


  }

  download(source: string, target: string, options?: {
    [s: string]: any;
  }): Promise<any> {
    throw new Error("Method not implemented.");
  }





}
