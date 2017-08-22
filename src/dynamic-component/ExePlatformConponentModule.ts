import {NgModule} from '@angular/core';
import {exeUploadFileComponent} from "./fileUpload/exeUploadFile.component";
import {ComponentsFactoryService} from "./ComponentsFactory.service";
import {ExePlatformService} from "../ExePlatform.service";
import {exeUploadFilePcComponent} from "./fileUpload/pc/UploadFilePc.component";
import {exeUploadFileWechatComponent} from "./fileUpload/wechat/UploadFileWechat.component";
import {exeUploadFileNativeComponent} from "./fileUpload/native/UploadFileNative.component";

export function componentsFactory(exePlatformService: ExePlatformService) {
  return new  ComponentsFactoryService(exePlatformService);
}
@NgModule({

  exports: [exeUploadFileComponent],
  declarations: [exeUploadFileComponent,exeUploadFilePcComponent,exeUploadFileWechatComponent,exeUploadFileNativeComponent],
  entryComponents: [exeUploadFileComponent,exeUploadFilePcComponent,exeUploadFileWechatComponent,exeUploadFileNativeComponent],
  providers: [

    {
      provide: ComponentsFactoryService, useFactory: componentsFactory
      ,deps:[ExePlatformService]
    }
  ]

})

export class ExePlatformConponentModule {



}
