import {NgModule} from '@angular/core';


import {FileUploadModule} from "./service/transfer/file-upload/file-upload.module";
import {StorageService} from "../service/Storage.service";
import {StorageWindows} from "./service/storage/StorageWindows";
import {TransFilePc} from "./service/transfer/TransFileWindows";
import {LoggerPcService} from "../wechat/service/logger/LoggerWindows.service";
import {LoggerService} from "../service/Logger.service";
import {TransFileService} from "../service/TransFile.service";
export let windowsPlatformProvides=[

  {provide: StorageService, useClass: StorageWindows},
  {provide: TransFileService, useClass: TransFilePc},
  {provide: LoggerService, useClass: LoggerPcService}
]
@NgModule({
  imports: [
    FileUploadModule
  ],
  exports: [FileUploadModule],
  providers: [

    windowsPlatformProvides
  ]

})
export class WindowsPlatformModule {



}
