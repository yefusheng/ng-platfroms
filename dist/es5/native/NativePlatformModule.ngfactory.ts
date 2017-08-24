/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './NativePlatformModule';
import * as import2 from './service/storage/StorageNative.service';
import * as import3 from './service/transfer/TransFileNative.service';
import * as import4 from './service/logger/LoggerNative.service';
import * as import5 from '@ionic-native/app-version/index';
import * as import6 from '@ionic-native/file-opener/index';
import * as import7 from '@ionic-native/transfer/index';
import * as import8 from '@ionic-native/in-app-browser/index';
import * as import9 from '@ionic-native/image-picker/index';
import * as import10 from '@ionic-native/network/index';
import * as import11 from '@ionic-native/call-number/index';
import * as import12 from '@ionic-native/camera/index';
import * as import13 from './service/transfer/NativeService';
import * as import14 from 'ionic-angular/platform/platform';
import * as import15 from 'ionic-angular/components/alert/alert-controller';
import * as import16 from 'ionic-angular/components/loading/loading-controller';
import * as import17 from '../service/Storage.service';
import * as import18 from '../service/TransFile.service';
import * as import19 from '../service/Logger.service';
class NativePlatformModuleInjector extends import0.ɵNgModuleInjector<import1.NativePlatformModule> {
  _NativePlatformModule_0:import1.NativePlatformModule;
  __StorageService_1:import2.StorageNative;
  __TransFileService_2:import3.TransFileNative;
  __LoggerService_3:import4.LoggerNativeService;
  __TransFileNative_4:import3.TransFileNative;
  __AppVersion_5:import5.AppVersion;
  __FileOpener_6:import6.FileOpener;
  __Transfer_7:import7.Transfer;
  __InAppBrowser_8:import8.InAppBrowser;
  __ImagePicker_9:import9.ImagePicker;
  __Network_10:import10.Network;
  __CallNumber_11:import11.CallNumber;
  __Camera_12:import12.Camera;
  __NativeService_13:import13.NativeService;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _StorageService_1():import2.StorageNative {
    if ((this.__StorageService_1 == null)) { (this.__StorageService_1 = new import2.StorageNative()); }
    return this.__StorageService_1;
  }
  get _TransFileService_2():import3.TransFileNative {
    if ((this.__TransFileService_2 == null)) { (this.__TransFileService_2 = new import3.TransFileNative()); }
    return this.__TransFileService_2;
  }
  get _LoggerService_3():import4.LoggerNativeService {
    if ((this.__LoggerService_3 == null)) { (this.__LoggerService_3 = new import4.LoggerNativeService()); }
    return this.__LoggerService_3;
  }
  get _TransFileNative_4():import3.TransFileNative {
    if ((this.__TransFileNative_4 == null)) { (this.__TransFileNative_4 = new import3.TransFileNative()); }
    return this.__TransFileNative_4;
  }
  get _AppVersion_5():import5.AppVersion {
    if ((this.__AppVersion_5 == null)) { (this.__AppVersion_5 = new import5.AppVersion()); }
    return this.__AppVersion_5;
  }
  get _FileOpener_6():import6.FileOpener {
    if ((this.__FileOpener_6 == null)) { (this.__FileOpener_6 = new import6.FileOpener()); }
    return this.__FileOpener_6;
  }
  get _Transfer_7():import7.Transfer {
    if ((this.__Transfer_7 == null)) { (this.__Transfer_7 = new import7.Transfer()); }
    return this.__Transfer_7;
  }
  get _InAppBrowser_8():import8.InAppBrowser {
    if ((this.__InAppBrowser_8 == null)) { (this.__InAppBrowser_8 = new import8.InAppBrowser()); }
    return this.__InAppBrowser_8;
  }
  get _ImagePicker_9():import9.ImagePicker {
    if ((this.__ImagePicker_9 == null)) { (this.__ImagePicker_9 = new import9.ImagePicker()); }
    return this.__ImagePicker_9;
  }
  get _Network_10():import10.Network {
    if ((this.__Network_10 == null)) { (this.__Network_10 = new import10.Network()); }
    return this.__Network_10;
  }
  get _CallNumber_11():import11.CallNumber {
    if ((this.__CallNumber_11 == null)) { (this.__CallNumber_11 = new import11.CallNumber()); }
    return this.__CallNumber_11;
  }
  get _Camera_12():import12.Camera {
    if ((this.__Camera_12 == null)) { (this.__Camera_12 = new import12.Camera()); }
    return this.__Camera_12;
  }
  get _NativeService_13():import13.NativeService {
    if ((this.__NativeService_13 == null)) { (this.__NativeService_13 = new import13.NativeService(this.parent.get(import14.Platform),this.parent.get(import15.AlertController),this._AppVersion_5,this._Camera_12,this._Transfer_7,this._FileOpener_6,this._InAppBrowser_8,this._ImagePicker_9,this._Network_10,this._CallNumber_11,this.parent.get(import16.LoadingController))); }
    return this.__NativeService_13;
  }
  createInternal():import1.NativePlatformModule {
    this._NativePlatformModule_0 = new import1.NativePlatformModule();
    return this._NativePlatformModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.NativePlatformModule)) { return this._NativePlatformModule_0; }
    if ((token === import17.StorageService)) { return this._StorageService_1; }
    if ((token === import18.TransFileService)) { return this._TransFileService_2; }
    if ((token === import19.LoggerService)) { return this._LoggerService_3; }
    if ((token === import3.TransFileNative)) { return this._TransFileNative_4; }
    if ((token === import5.AppVersion)) { return this._AppVersion_5; }
    if ((token === import6.FileOpener)) { return this._FileOpener_6; }
    if ((token === import7.Transfer)) { return this._Transfer_7; }
    if ((token === import8.InAppBrowser)) { return this._InAppBrowser_8; }
    if ((token === import9.ImagePicker)) { return this._ImagePicker_9; }
    if ((token === import10.Network)) { return this._Network_10; }
    if ((token === import11.CallNumber)) { return this._CallNumber_11; }
    if ((token === import12.Camera)) { return this._Camera_12; }
    if ((token === import13.NativeService)) { return this._NativeService_13; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const NativePlatformModuleNgFactory:import0.NgModuleFactory<import1.NativePlatformModule> = new import0.NgModuleFactory<any>(NativePlatformModuleInjector,import1.NativePlatformModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjoveWVmcy9uZ2RlbW8vbnBtL25nLXBsYXRmcm9tcy9kaXN0L2VzNS9OYXRpdmUvTmF0aXZlUGxhdGZvcm1Nb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRjoveWVmcy9uZ2RlbW8vbnBtL25nLXBsYXRmcm9tcy9kaXN0L2VzNS9OYXRpdmUvTmF0aXZlUGxhdGZvcm1Nb2R1bGUuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=