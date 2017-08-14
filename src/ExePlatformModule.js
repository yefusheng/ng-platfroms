"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExePlatform_service_1 = require("./ExePlatform.service");
var Auth_service_1 = require("./Auth.service");
var PlatformStragety_1 = require("./PlatformStragety");
var ExePlatformConponentModule_1 = require("./dynamic-component/ExePlatformConponentModule");
//导入对应的平台模块
var platformModule = new PlatformStragety_1.PlatformStragety().getStragety();
var ExePlatformModule = (function () {
    function ExePlatformModule() {
    }
    return ExePlatformModule;
}());
ExePlatformModule = __decorate([
    core_1.NgModule({
        imports: [
            platformModule,
            ExePlatformConponentModule_1.ExePlatformConponentModule
        ],
        exports: [ExePlatformConponentModule_1.ExePlatformConponentModule],
        providers: [
            Auth_service_1.AuthService,
            ExePlatform_service_1.ExePlatformService,
        ]
    })
], ExePlatformModule);
exports.ExePlatformModule = ExePlatformModule;
