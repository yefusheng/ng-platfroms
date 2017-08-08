import {BasePlatform} from "./BasePlatform";
import {Observable} from "rxjs/Observable";
import {mobile, Platforms} from "./ExePlatform.service";
import {Platform} from "ionic-angular";
import {Provider} from "@angular/core";
import {StorageService} from "./service/storage/Storage.service";
import {TransFileService} from "./service/transfer/TransFile.service";
import {LoggerService} from "./service/logger/Logger.service";
import {StorageNative} from "./service/storage/native/StorageNative.service";
import {TransFileNative} from "./service/transfer/native/TransFileNative.service";
import {LoggerNativeService} from "./service/logger/native/LoggerNative.service";
import {AppVersion} from "@ionic-native/app-version";
import {Camera} from "@ionic-native/camera";
import {FileOpener} from "@ionic-native/file-opener";
import {Transfer} from "@ionic-native/transfer";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {ImagePicker} from "@ionic-native/image-picker";
import {Network} from "@ionic-native/network";
import {CallNumber} from "@ionic-native/call-number";
import {NativeService} from "./service/transfer/native/NativeService";;
/**
 * Created by yefs on 2017/7/11.
 *
 * 原生平台
 */


export const NATIVE_PLATFORM_PROVIDERS: Provider[] = [
  {provide: StorageService, useClass: StorageNative},
  {provide: TransFileService, useClass: TransFileNative},
  {provide: LoggerService, useClass: LoggerNativeService},
  TransFileNative,
  AppVersion,
  Camera,
  FileOpener,
  Transfer,
  InAppBrowser,
  ImagePicker,
  Network,
  CallNumber,
  NativeService,
];

export   class NativePlatform extends  BasePlatform{


  constructor(

    private platform:Platform) {
    super();

  }

  protected initPlatform(): void {

  }
  public getPlatformContext() :any {
    return this.platform;
  }
  public getPlatformName() :any {
    return mobile;
  }
  public getPlatformCode() :any {
    return Platforms.mobile;
  }

}
