import {NgModule} from '@angular/core';
import {exeUploadFileComponent} from "./fileUpload/exeUploadFile.component";
import {ComponentsFactoryService} from "./ComponentsFactory.service";
import {ExePlatformService} from "../ExePlatform.service";
import {exeUploadFilePcComponent} from "./fileUpload/pc/UploadFilePc.component";
import {exeUploadFileWechatComponent} from "./fileUpload/wechat/UploadFileWechat.component";
import {exeUploadFileNativeComponent} from "./fileUpload/native/UploadFileNative.component";

@NgModule({

  exports: [exeUploadFileComponent],
  declarations: [exeUploadFileComponent,exeUploadFilePcComponent,exeUploadFileWechatComponent,exeUploadFileNativeComponent],
  entryComponents: [exeUploadFileComponent,exeUploadFilePcComponent,exeUploadFileWechatComponent,exeUploadFileNativeComponent],
  providers: [

    {
      provide: ComponentsFactoryService, useFactory: (ExePlatformService) => {
      return new ComponentsFactoryService(ExePlatformService);
    },deps:[ExePlatformService]
    }
  ]

})
export class ExePlatformConponentModule {



}
