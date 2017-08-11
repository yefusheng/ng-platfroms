import {NgModule} from '@angular/core';

import { ExePlatformService} from "./ExePlatform.service";
import {ComponentsFactoryService} from "./dynamic-component/ComponentsFactory.service";
import {exeUploadFileComponent} from "./dynamic-component/fileUpload/exeUploadFile.component";
import {AuthService} from "./Auth.service";
import {PlatformStragety} from "./PlatformStragety";
//导入对应的平台模块
let platformModule=new PlatformStragety().getStragety();
@NgModule({
  imports: [
    platformModule,
  ],
  exports: [exeUploadFileComponent],
  declarations: [exeUploadFileComponent],
  entryComponents: [exeUploadFileComponent],
  providers: [

    AuthService,
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
