import {NgModule} from '@angular/core';

import { ExePlatformService} from "./ExePlatform.service";
import {ComponentsFactoryService} from "./component/ComponentsFactory.service";
import {exeUploadFileComponent} from "./component/fileUpload/exeUploadFile.component";

import {exeUploadFileNativeComponent} from "./component/fileUpload/native/UploadFileNative.component";
import {exeUploadFilePcComponent} from "./component/fileUpload/pc/UploadFilePc.component";

import {exeUploadFileWechatComponent} from "./component/fileUpload/wechat/UploadFileWechat.component";
import {BaseAuthService} from "./BaseAuth.service";
import {AuthService} from "../service/Auth.service";
import {PlatformStragety} from "./PlatformStragety";

let platformModule=new PlatformStragety().getStragety();
@NgModule({
  imports: [
    platformModule,
  ],
  exports: [exeUploadFileComponent],
  declarations: [exeUploadFileComponent,exeUploadFileWechatComponent],
  entryComponents: [exeUploadFileComponent,exeUploadFileWechatComponent],
  providers: [

    {
      provide: BaseAuthService, useClass: AuthService
    },
    ExePlatformService,
    {
      provide: ComponentsFactoryService, useFactory: (ExePlatformService) => {
      return new ComponentsFactoryService(ExePlatformService);
    },deps:[ExePlatformService]
    }
  ]

})
export class ExePlatformModule {



}
