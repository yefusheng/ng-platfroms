/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './WindowsPlatformModule';
import * as import2 from '@angular/common';
import * as import3 from './service/transfer/file-upload/file-upload.module';
import * as import4 from './service/storage/StorageWindows';
import * as import5 from './service/transfer/TransFileWindows';
import * as import6 from '../wechat/service/logger/LoggerWindows.service';
import * as import7 from '../Auth.service';
import * as import8 from '../service/Storage.service';
import * as import9 from '../service/TransFile.service';
import * as import10 from '../service/Logger.service';
class WindowsPlatformModuleInjector extends import0.ɵNgModuleInjector<import1.WindowsPlatformModule> {
  _CommonModule_0:import2.CommonModule;
  _FileUploadModule_1:import3.FileUploadModule;
  _WindowsPlatformModule_2:import1.WindowsPlatformModule;
  __NgLocalization_3:import2.NgLocaleLocalization;
  __StorageService_4:import4.StorageWindows;
  __TransFileService_5:import5.TransFilePc;
  __LoggerService_6:import6.LoggerPcService;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_3():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_3 == null)) { (this.__NgLocalization_3 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_3;
  }
  get _StorageService_4():import4.StorageWindows {
    if ((this.__StorageService_4 == null)) { (this.__StorageService_4 = new import4.StorageWindows()); }
    return this.__StorageService_4;
  }
  get _TransFileService_5():import5.TransFilePc {
    if ((this.__TransFileService_5 == null)) { (this.__TransFileService_5 = new import5.TransFilePc(this.parent.get(import7.AuthService))); }
    return this.__TransFileService_5;
  }
  get _LoggerService_6():import6.LoggerPcService {
    if ((this.__LoggerService_6 == null)) { (this.__LoggerService_6 = new import6.LoggerPcService()); }
    return this.__LoggerService_6;
  }
  createInternal():import1.WindowsPlatformModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._FileUploadModule_1 = new import3.FileUploadModule();
    this._WindowsPlatformModule_2 = new import1.WindowsPlatformModule();
    return this._WindowsPlatformModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.FileUploadModule)) { return this._FileUploadModule_1; }
    if ((token === import1.WindowsPlatformModule)) { return this._WindowsPlatformModule_2; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import8.StorageService)) { return this._StorageService_4; }
    if ((token === import9.TransFileService)) { return this._TransFileService_5; }
    if ((token === import10.LoggerService)) { return this._LoggerService_6; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const WindowsPlatformModuleNgFactory:import0.NgModuleFactory<import1.WindowsPlatformModule> = new import0.NgModuleFactory<any>(WindowsPlatformModuleInjector,import1.WindowsPlatformModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjoveWVmcy9uZ2RlbW8vbnBtL25nLXBsYXRmcm9tcy9kaXN0L2VzNS93aW5kb3dzL1dpbmRvd3NQbGF0Zm9ybU1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9GOi95ZWZzL25nZGVtby9ucG0vbmctcGxhdGZyb21zL2Rpc3QvZXM1L3dpbmRvd3MvV2luZG93c1BsYXRmb3JtTW9kdWxlLmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9