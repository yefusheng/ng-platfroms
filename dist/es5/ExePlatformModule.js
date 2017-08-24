"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExePlatform_service_1 = require("./ExePlatform.service");
var Auth_service_1 = require("./Auth.service");
//import {ExePlatformConponentModule} from "./dynamic-component/ExePlatformConponentModule";
var WindowsPlatformModule_1 = require("./windows/WindowsPlatformModule");
//导入对应的平台模块
// let platformModule=new PlatformStragety().getStragety();
var ExePlatformModule = (function () {
    function ExePlatformModule() {
    }
    return ExePlatformModule;
}());
ExePlatformModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    WindowsPlatformModule_1.WindowsPlatformModule,
                ],
                // exports: [ExePlatformConponentModule],
                providers: [
                    Auth_service_1.AuthService,
                    ExePlatform_service_1.ExePlatformService,
                ]
            },] },
];
/** @nocollapse */
ExePlatformModule.ctorParameters = function () { return []; };
exports.ExePlatformModule = ExePlatformModule;
