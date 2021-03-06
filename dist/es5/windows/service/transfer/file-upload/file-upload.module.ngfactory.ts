/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './file-upload.module';
import * as import2 from '@angular/common';
class FileUploadModuleInjector extends import0.ɵNgModuleInjector<import1.FileUploadModule> {
  _CommonModule_0:import2.CommonModule;
  _FileUploadModule_1:import1.FileUploadModule;
  __NgLocalization_2:import2.NgLocaleLocalization;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  createInternal():import1.FileUploadModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._FileUploadModule_1 = new import1.FileUploadModule();
    return this._FileUploadModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.FileUploadModule)) { return this._FileUploadModule_1; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const FileUploadModuleNgFactory:import0.NgModuleFactory<import1.FileUploadModule> = new import0.NgModuleFactory<any>(FileUploadModuleInjector,import1.FileUploadModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjoveWVmcy9uZ2RlbW8vbnBtL25nLXBsYXRmb3Jtcy9kaXN0L2VzNS93aW5kb3dzL3NlcnZpY2UvdHJhbnNmZXIvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Y6L3llZnMvbmdkZW1vL25wbS9uZy1wbGF0Zm9ybXMvZGlzdC9lczUvd2luZG93cy9zZXJ2aWNlL3RyYW5zZmVyL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLm1vZHVsZS5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
