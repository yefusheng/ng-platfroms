import {NgModule} from '@angular/core';
// import "core-js/client/shim";  // Add this import for wechat
import {TransFileService} from "./service/transfer/TransFile.service";
import { ExePlatformService} from "./ExePlatform.service";
import {ComponentsService} from "./component/ComponentsFactory.service";
import {exeUploadFileComponent} from "./component/fileUpload/exeUploadFile.component";
import {AppVersion} from "@ionic-native/app-version";
import {Camera} from "@ionic-native/camera";
import {FileOpener} from "@ionic-native/file-opener";
import {Transfer} from "@ionic-native/transfer";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {ImagePicker} from "@ionic-native/image-picker";
import {Network} from "@ionic-native/network";
import {CallNumber} from "@ionic-native/call-number";
import {NativeService} from "./service/transfer/native/NativeService";
import {FileUploadModule} from "./service/transfer/pc/file-upload/file-upload.module";
import {StorageService} from "./service/storage/Storage.service";
import {TransFileStragety} from "./service/transfer/TransFileStragety";
import {StorageStragety} from "./service/storage/StorageStragety";
import {exeUploadFileNativeComponent} from "./component/fileUpload/native/UploadFileNative.component";
import {exeUploadFilePcComponent} from "./component/fileUpload/pc/UploadFilePc.component";
import {TransFileNative} from "./service/transfer/native/TransFileNative.service";
import {LoggerStragety} from "./service/logger/LoggerStragety";
import {LoggerService} from "./service/logger/Logger.service";
import {exeUploadFileWechatComponent} from "./component/fileUpload/wechat/UploadFileWechat.component";
import {BaseAuthService} from "./BaseAuth.service";
import {AuthService} from "../service/Auth.service";

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
    ExePlatformService
    ,
    {
      provide: TransFileStragety, useClass: TransFileStragety,deps:[ExePlatformService]
    },
    {
      provide: StorageStragety, useClass: StorageStragety,deps:[ExePlatformService]
    },
    {
      provide: LoggerStragety, useClass: LoggerStragety,deps:[ExePlatformService]
    },
    {
      provide: ComponentsService, useFactory: (ExePlatformService) => {
      return new ComponentsService(ExePlatformService);
    },deps:[ExePlatformService]
    },
    {
      provide: StorageService, useFactory: (StorageStragety) => {
      return new StorageService(StorageStragety.getStragety());
    },deps:[StorageStragety]
    },
    {
      provide: TransFileService, useFactory: (TransFileStragety) => {

      return new TransFileService(TransFileStragety.getStragety());
    },deps:[TransFileStragety]
    },
    {
      provide: LoggerService, useFactory: (LoggerStragety) => {

      return new LoggerService(true,LoggerStragety.getStragety());
    },deps:[LoggerStragety]
    },
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
  ],

})
export class ExePlatformModule {


}
