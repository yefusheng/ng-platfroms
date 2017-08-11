import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {StorageService} from "../platform/src/service/Storage.service";
import {TransFileService} from "../platform/src/service/TransFile.service";
import {StorageWindows} from "../platform/src/windows/service/storage/StorageWindows";
import {TransFilePc} from "../platform/src/windows/service/transfer/TransFileWindows";
import {LoggerPcService} from "../platform/src/wechat/service/logger/LoggerWindows.service";
import {LoggerService} from "../platform/src/service/Logger.service";

let windows=[

  {provide: StorageService, useClass: StorageWindows},
  {provide: TransFileService, useClass: TransFilePc},
  {provide: LoggerService, useClass: LoggerPcService}
]
platformBrowserDynamic().bootstrapModule(AppModule);
