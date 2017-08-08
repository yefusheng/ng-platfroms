import {NgModule} from '@angular/core';
// import "core-js/client/shim";  // Add this import for wechat

import { ExePlatformService} from "./ExePlatform.service";
import {ComponentsFactoryService} from "./component/ComponentsFactory.service";
import {exeUploadFileComponent} from "./component/fileUpload/exeUploadFile.component";
import {FileUploadModule} from "./service/transfer/pc/file-upload/file-upload.module";
import {exeUploadFileNativeComponent} from "./component/fileUpload/native/UploadFileNative.component";
import {exeUploadFilePcComponent} from "./component/fileUpload/pc/UploadFilePc.component";

import {exeUploadFileWechatComponent} from "./component/fileUpload/wechat/UploadFileWechat.component";
import {BaseAuthService} from "./BaseAuth.service";
import {AuthService} from "../service/Auth.service";
import {PC_PLATFORM_PROVIDERS} from "./PcPlatform";
import {NATIVE_PLATFORM_PROVIDERS} from "./NativePlatform";
import {WECHAT_PLATFORM_PROVIDERS} from "./WechatPlatform";


@NgModule({
  imports: [
    FileUploadModule
  ],
  exports: [exeUploadFileComponent],
  declarations: [exeUploadFileComponent, exeUploadFileNativeComponent, exeUploadFilePcComponent,exeUploadFileWechatComponent],
  entryComponents: [exeUploadFileComponent, exeUploadFileNativeComponent, exeUploadFilePcComponent,exeUploadFileWechatComponent],
  providers: [

    {
      provide: BaseAuthService, useClass: AuthService
    },
    ExePlatformService,
    {
      provide: ComponentsFactoryService, useFactory: (ExePlatformService) => {
      return new ComponentsFactoryService(ExePlatformService);
    },deps:[ExePlatformService]
    },
    PC_PLATFORM_PROVIDERS,
    // WECHAT_PLATFORM_PROVIDERS,
    // NATIVE_PLATFORM_PROVIDERS,
  ]

})
export class ExePlatformModule {



}
