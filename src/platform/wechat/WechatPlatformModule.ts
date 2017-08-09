import {NgModule} from '@angular/core';


import {StorageService} from "../service/Storage.service";
import {StorageWeChat} from "./service/storage/StorageWeChat";
import {TransFileWechat} from "./service/transfer/TransFileWechat.service";
import {LoggerPcService} from "./service/logger/LoggerWindows.service";
import {LoggerService} from "../service/Logger.service";
import {TransFileService} from "../service/TransFile.service";
import {WechatPlatform} from "./WechatPlatform";
import {exeUploadFileWechatComponent} from "../component/fileUpload/wechat/UploadFileWechat.component";




@NgModule({

  exports: [exeUploadFileWechatComponent],
  declarations: [ exeUploadFileWechatComponent],
  entryComponents: [exeUploadFileWechatComponent],
  providers: [
    WechatPlatform,
    {provide: StorageService, useClass: StorageWeChat},
    {provide: TransFileService, useClass: TransFileWechat},
    {provide: LoggerService, useClass: LoggerPcService},
  ]

})
export class WechatPlatformModule {



}
