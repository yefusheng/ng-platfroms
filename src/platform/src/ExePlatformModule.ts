import {NgModule} from '@angular/core';

import { ExePlatformService} from "./ExePlatform.service";
import {ComponentsFactoryService} from "./dynamic-component/ComponentsFactory.service";
import {exeUploadFileComponent} from "./dynamic-component/fileUpload/exeUploadFile.component";
import {AuthService} from "./Auth.service";
import {PlatformStragety} from "./PlatformStragety";
import {ExePlatformConponentModule} from "./dynamic-component/ExePlatformConponentModule";
//导入对应的平台模块
let platformModule=new PlatformStragety().getStragety();
@NgModule({
  imports: [
    platformModule,
    ExePlatformConponentModule
  ],
  exports: [ExePlatformConponentModule],
  providers: [
    AuthService,
    ExePlatformService,
  ]
})
export class ExePlatformModule {



}
