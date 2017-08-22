/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from './file-upload.module';
import * as import2 from '@angular/common';
var FileUploadModuleInjector = (function (_super) {
    __extends(FileUploadModuleInjector, _super);
    function FileUploadModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(FileUploadModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    FileUploadModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._FileUploadModule_1 = new import1.FileUploadModule();
        return this._FileUploadModule_1;
    };
    FileUploadModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.FileUploadModule)) {
            return this._FileUploadModule_1;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    FileUploadModuleInjector.prototype.destroyInternal = function () {
    };
    return FileUploadModuleInjector;
}(import0.ɵNgModuleInjector));
export var FileUploadModuleNgFactory = new import0.NgModuleFactory(FileUploadModuleInjector, import1.FileUploadModule);
//# sourceMappingURL=file-upload.module.ngfactory.js.map