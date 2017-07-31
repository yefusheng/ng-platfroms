
import { Injectable }           from '@angular/core';
import {exeUploadFileNativeComponent} from "./fileUpload/native/UploadFileNative.component";
import {exeUploadFilePcComponent} from "./fileUpload/pc/UploadFilePc.component";
import {compoentItem} from "./compoentItem";
import {ExePlatformService} from "../ExePlatform.service";
import {exeUploadFileWechatComponent} from "./fileUpload/wechat/UploadFileWechat.component";
import {log} from "../service/util/util";
/**
 * 动态组件提供商
 * @author yefs
 */
@Injectable()
export class ComponentsService{
  constructor(
   public platformService:ExePlatformService
  ){
  }

  getUploadComponent() {

   let uploadCompoents= [
     new compoentItem(exeUploadFileNativeComponent, {name: 'exeUploadFileNativeComponent'}),
     new compoentItem(exeUploadFilePcComponent, {name: 'exeUploadFilePcComponent'}),
     new compoentItem(exeUploadFileWechatComponent, {name: 'exeUploadFileWechatComponent'}),
    ]
    log("platform--"+this.platformService.platform.getPlatformName());

    return uploadCompoents[this.platformService.platform.getPlatformCode()].component;
  }
}
