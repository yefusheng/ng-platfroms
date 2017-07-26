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



  upload(fileUrl: string, url: string, options?: FileUploadOptions, trustAllHosts?: boolean): Promise<any> {
    // this.exePlatform.getPlatformContext().uploadImage({
    //   localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
    //   isShowProcess: 1,           // 默认为1，显示进度提示
    //   success: function (res) {
    //     var serverId = res.serverId;
    //     arr.push({
    //       total:total,
    //       serverId:serverId
    //     });
    //     if (localIds.length > 0) {
    //       upload();
    //     } else {
    //       if(success)success(arr)
    //     }
    //   },
    //   fail: function (res) {
    //     if(fail)fail(res)
    //   }
    // });
    return null;
  }

  download(source: string, target: string, trustAllHosts?: boolean, options?: { [p: string]: any }): Promise<any> {
    return undefined;
  }

  onProgress(listener: (event: ProgressEvent) => any): void {
  }




}
