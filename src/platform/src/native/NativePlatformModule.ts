import {NgModule} from '@angular/core';

import {StorageService} from "../service/Storage.service";
import {StorageNative} from "./service/storage/StorageNative.service";
import {LoggerNativeService} from "./service/logger/LoggerNative.service";
import {TransFileNative} from "./service/transfer/TransFileNative.service";
import {TransFileService} from "../service/TransFile.service";
import {LoggerService} from "../service/Logger.service";
import {FileOpener} from "@ionic-native/file-opener";
import {Transfer} from "@ionic-native/transfer";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {ImagePicker} from "@ionic-native/image-picker";
import {Network} from "@ionic-native/network";
import {CallNumber} from "@ionic-native/call-number";
import {NativeService} from "./service/transfer/NativeService";
import {AppVersion} from "@ionic-native/app-version";
import {Camera} from "@ionic-native/camera";
;




@NgModule({

  providers: [

    {provide: StorageService, useClass: StorageNative},
    {provide: TransFileService, useClass: TransFileNative},
    {provide: LoggerService, useClass: LoggerNativeService},
    TransFileNative,
    AppVersion,

    FileOpener,
    Transfer,
    InAppBrowser,
    ImagePicker,
    Network,
    CallNumber,
    NativeService,
    Camera,

  ]

})
export class NativePlatformModule {



}
