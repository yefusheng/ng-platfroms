/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './WechatPlatformModule';
import * as import2 from './WechatPlatform';
import * as import3 from './service/storage/StorageWeChat';
import * as import4 from './service/transfer/TransFileWechat.service';
import * as import5 from './service/logger/LoggerWindows.service';
import * as import6 from '../service/Storage.service';
import * as import7 from '../service/TransFile.service';
import * as import8 from '../service/Logger.service';
class WechatPlatformModuleInjector extends import0.ɵNgModuleInjector<import1.WechatPlatformModule> {
  _WechatPlatformModule_0:import1.WechatPlatformModule;
  __WechatPlatform_1:import2.WechatPlatform;
  __StorageService_2:import3.StorageWeChat;
  __TransFileService_3:import4.TransFileWechat;
  __LoggerService_4:import5.LoggerPcService;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _WechatPlatform_1():import2.WechatPlatform {
    if ((this.__WechatPlatform_1 == null)) { (this.__WechatPlatform_1 = new import2.WechatPlatform()); }
    return this.__WechatPlatform_1;
  }
  get _StorageService_2():import3.StorageWeChat {
    if ((this.__StorageService_2 == null)) { (this.__StorageService_2 = new import3.StorageWeChat(this._WechatPlatform_1)); }
    return this.__StorageService_2;
  }
  get _TransFileService_3():import4.TransFileWechat {
    if ((this.__TransFileService_3 == null)) { (this.__TransFileService_3 = new import4.TransFileWechat(this._WechatPlatform_1)); }
    return this.__TransFileService_3;
  }
  get _LoggerService_4():import5.LoggerPcService {
    if ((this.__LoggerService_4 == null)) { (this.__LoggerService_4 = new import5.LoggerPcService()); }
    return this.__LoggerService_4;
  }
  createInternal():import1.WechatPlatformModule {
    this._WechatPlatformModule_0 = new import1.WechatPlatformModule();
    return this._WechatPlatformModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.WechatPlatformModule)) { return this._WechatPlatformModule_0; }
    if ((token === import2.WechatPlatform)) { return this._WechatPlatform_1; }
    if ((token === import6.StorageService)) { return this._StorageService_2; }
    if ((token === import7.TransFileService)) { return this._TransFileService_3; }
    if ((token === import8.LoggerService)) { return this._LoggerService_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const WechatPlatformModuleNgFactory:import0.NgModuleFactory<import1.WechatPlatformModule> = new import0.NgModuleFactory<any>(WechatPlatformModuleInjector,import1.WechatPlatformModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjoveWVmcy9uZ2RlbW8vbnBtL25nLXBsYXRmb3Jtcy9kaXN0L2VzNS9XZWNoYXQvV2VjaGF0UGxhdGZvcm1Nb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRjoveWVmcy9uZ2RlbW8vbnBtL25nLXBsYXRmb3Jtcy9kaXN0L2VzNS9XZWNoYXQvV2VjaGF0UGxhdGZvcm1Nb2R1bGUuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
