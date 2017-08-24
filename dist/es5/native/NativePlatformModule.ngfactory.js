"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core");
var import1 = require("./NativePlatformModule");
var import2 = require("./service/storage/StorageNative.service");
var import3 = require("./service/transfer/TransFileNative.service");
var import4 = require("./service/logger/LoggerNative.service");
var import5 = require("@ionic-native/app-version/index");
var import6 = require("@ionic-native/file-opener/index");
var import7 = require("@ionic-native/transfer/index");
var import8 = require("@ionic-native/in-app-browser/index");
var import9 = require("@ionic-native/image-picker/index");
var import10 = require("@ionic-native/network/index");
var import11 = require("@ionic-native/call-number/index");
var import12 = require("@ionic-native/camera/index");
var import13 = require("./service/transfer/NativeService");
var import14 = require("ionic-angular/platform/platform");
var import15 = require("ionic-angular/components/alert/alert-controller");
var import16 = require("ionic-angular/components/loading/loading-controller");
var import17 = require("../service/Storage.service");
var import18 = require("../service/TransFile.service");
var import19 = require("../service/Logger.service");
var NativePlatformModuleInjector = (function (_super) {
    __extends(NativePlatformModuleInjector, _super);
    function NativePlatformModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_StorageService_1", {
        get: function () {
            if ((this.__StorageService_1 == null)) {
                (this.__StorageService_1 = new import2.StorageNative());
            }
            return this.__StorageService_1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_TransFileService_2", {
        get: function () {
            if ((this.__TransFileService_2 == null)) {
                (this.__TransFileService_2 = new import3.TransFileNative());
            }
            return this.__TransFileService_2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_LoggerService_3", {
        get: function () {
            if ((this.__LoggerService_3 == null)) {
                (this.__LoggerService_3 = new import4.LoggerNativeService());
            }
            return this.__LoggerService_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_TransFileNative_4", {
        get: function () {
            if ((this.__TransFileNative_4 == null)) {
                (this.__TransFileNative_4 = new import3.TransFileNative());
            }
            return this.__TransFileNative_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_AppVersion_5", {
        get: function () {
            if ((this.__AppVersion_5 == null)) {
                (this.__AppVersion_5 = new import5.AppVersion());
            }
            return this.__AppVersion_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_FileOpener_6", {
        get: function () {
            if ((this.__FileOpener_6 == null)) {
                (this.__FileOpener_6 = new import6.FileOpener());
            }
            return this.__FileOpener_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_Transfer_7", {
        get: function () {
            if ((this.__Transfer_7 == null)) {
                (this.__Transfer_7 = new import7.Transfer());
            }
            return this.__Transfer_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_InAppBrowser_8", {
        get: function () {
            if ((this.__InAppBrowser_8 == null)) {
                (this.__InAppBrowser_8 = new import8.InAppBrowser());
            }
            return this.__InAppBrowser_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_ImagePicker_9", {
        get: function () {
            if ((this.__ImagePicker_9 == null)) {
                (this.__ImagePicker_9 = new import9.ImagePicker());
            }
            return this.__ImagePicker_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_Network_10", {
        get: function () {
            if ((this.__Network_10 == null)) {
                (this.__Network_10 = new import10.Network());
            }
            return this.__Network_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_CallNumber_11", {
        get: function () {
            if ((this.__CallNumber_11 == null)) {
                (this.__CallNumber_11 = new import11.CallNumber());
            }
            return this.__CallNumber_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_Camera_12", {
        get: function () {
            if ((this.__Camera_12 == null)) {
                (this.__Camera_12 = new import12.Camera());
            }
            return this.__Camera_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativePlatformModuleInjector.prototype, "_NativeService_13", {
        get: function () {
            if ((this.__NativeService_13 == null)) {
                (this.__NativeService_13 = new import13.NativeService(this.parent.get(import14.Platform), this.parent.get(import15.AlertController), this._AppVersion_5, this._Camera_12, this._Transfer_7, this._FileOpener_6, this._InAppBrowser_8, this._ImagePicker_9, this._Network_10, this._CallNumber_11, this.parent.get(import16.LoadingController)));
            }
            return this.__NativeService_13;
        },
        enumerable: true,
        configurable: true
    });
    NativePlatformModuleInjector.prototype.createInternal = function () {
        this._NativePlatformModule_0 = new import1.NativePlatformModule();
        return this._NativePlatformModule_0;
    };
    NativePlatformModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import1.NativePlatformModule)) {
            return this._NativePlatformModule_0;
        }
        if ((token === import17.StorageService)) {
            return this._StorageService_1;
        }
        if ((token === import18.TransFileService)) {
            return this._TransFileService_2;
        }
        if ((token === import19.LoggerService)) {
            return this._LoggerService_3;
        }
        if ((token === import3.TransFileNative)) {
            return this._TransFileNative_4;
        }
        if ((token === import5.AppVersion)) {
            return this._AppVersion_5;
        }
        if ((token === import6.FileOpener)) {
            return this._FileOpener_6;
        }
        if ((token === import7.Transfer)) {
            return this._Transfer_7;
        }
        if ((token === import8.InAppBrowser)) {
            return this._InAppBrowser_8;
        }
        if ((token === import9.ImagePicker)) {
            return this._ImagePicker_9;
        }
        if ((token === import10.Network)) {
            return this._Network_10;
        }
        if ((token === import11.CallNumber)) {
            return this._CallNumber_11;
        }
        if ((token === import12.Camera)) {
            return this._Camera_12;
        }
        if ((token === import13.NativeService)) {
            return this._NativeService_13;
        }
        return notFoundResult;
    };
    NativePlatformModuleInjector.prototype.destroyInternal = function () {
    };
    return NativePlatformModuleInjector;
}(import0.ɵNgModuleInjector));
exports.NativePlatformModuleNgFactory = new import0.NgModuleFactory(NativePlatformModuleInjector, import1.NativePlatformModule);
