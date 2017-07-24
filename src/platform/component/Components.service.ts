
import { Injectable }           from '@angular/core';
import {exeUploadFileNativeComponent} from "./fileUpload/native/UploadFileNative.component";
import {exeUploadFilePcComponent} from "./fileUpload/pc/UploadFilePc.component";
import {compoentItem} from "./compoentItem";
import {ExePlatformService} from "../ExePlatform.service";
/**
 * 根据平台提供组件
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
    ]
    console.log("platform--"+this.platformService.platform);
    console.log("component--"+uploadCompoents[this.platformService.platform].data.name);
    return uploadCompoents[this.platformService.platform].component;
  }
}
