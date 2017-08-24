"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ExePlatformModule_1 = require("./ExePlatformModule");
exports.ExePlatformModule = ExePlatformModule_1.ExePlatformModule;
var Auth_service_1 = require("./Auth.service");
exports.AuthService = Auth_service_1.AuthService;
var Storage_service_1 = require("./service/Storage.service");
exports.StorageService = Storage_service_1.StorageService;
var Logger_service_1 = require("./service/Logger.service");
exports.LoggerService = Logger_service_1.LoggerService;
var ExePlatform_service_1 = require("./ExePlatform.service");
exports.ExePlatformService = ExePlatform_service_1.ExePlatformService;
//export {ExePlatformConponentModule} from './dynamic-component/ExePlatformConponentModule';/
var WindowsPlatformModule_1 = require("./windows/WindowsPlatformModule");
exports.WindowsPlatformModule = WindowsPlatformModule_1.WindowsPlatformModule;
var WechatPlatformModule_1 = require("./Wechat/WechatPlatformModule");
exports.WechatPlatformModule = WechatPlatformModule_1.WechatPlatformModule;
var NativePlatformModule_1 = require("./Native/NativePlatformModule");
exports.NativePlatformModule = NativePlatformModule_1.NativePlatformModule;
