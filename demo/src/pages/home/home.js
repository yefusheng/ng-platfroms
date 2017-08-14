"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * demo
 * 1.图片上传跨平台
 * 2.本地存储跨平台
 */
var HomePage = (function () {
    function HomePage(storageService, exePlatformService, loggerService, authService) {
        this.storageService = storageService;
        this.exePlatformService = exePlatformService;
        this.loggerService = loggerService;
        this.authService = authService;
        this.userUrl = "https://tests.exexm.com:800";
        this.uploadUrl = this.userUrl + "/api/User/Picture/V2";
        this.uploadinfo = {
            imageUrl: "test",
            serverUrl: this.uploadUrl
        };
        this.platfromName = "";
        this.uploadinfo.serverUrl = this.uploadUrl;
        this.loggerService.log("serverUrl" + this.uploadinfo.serverUrl);
    }
    HomePage.prototype.ngOnInit = function () {
        this.authService.setToken("abc");
        this.storageService.saveObject("userInfo", this.uploadinfo);
        this.storageService.getObject("userInfo", this.uploadinfo);
        // this.loggerService.log("getObject",this.uploadinfo.imageUrl);
        this.platfromName = this.exePlatformService.getPlatformName() + "";
    };
    return HomePage;
}());
HomePage = __decorate([
    core_1.Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    })
], HomePage);
exports.HomePage = HomePage;
