import {NgModule} from '@angular/core';

import { ExePlatformService} from "./ExePlatform.service";
import {AuthService} from "./Auth.service";
import {PlatformStragety} from "./PlatformStragety";
//import {ExePlatformConponentModule} from "./dynamic-component/ExePlatformConponentModule";
import {WindowsPlatformModule} from "./windows/WindowsPlatformModule";
//导入对应的平台模块
// let platformModule=new PlatformStragety().getStragety();

@NgModule({
  imports: [
    WindowsPlatformModule,
    // ExePlatformConponentModule
  ],
  // exports: [ExePlatformConponentModule],
  providers: [
    AuthService,
    ExePlatformService,
  ]
})
export class ExePlatformModule {



}
