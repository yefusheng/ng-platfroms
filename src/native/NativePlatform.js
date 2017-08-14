"use strict";
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
var BasePlatform_1 = require("../BasePlatform");
var ExePlatform_service_1 = require("../ExePlatform.service");
/**
 * Created by yefs on 2017/7/11.
 *
 * 原生平台
 */
var NativePlatform = (function (_super) {
    __extends(NativePlatform, _super);
    function NativePlatform(platform) {
        var _this = _super.call(this) || this;
        _this.platform = platform;
        return _this;
    }
    NativePlatform.prototype.initPlatform = function () {
    };
    NativePlatform.prototype.getPlatformContext = function () {
        return this.platform;
    };
    NativePlatform.prototype.getPlatformName = function () {
        return ExePlatform_service_1.mobile;
    };
    NativePlatform.prototype.getPlatformCode = function () {
        return ExePlatform_service_1.Platforms.mobile;
    };
    return NativePlatform;
}(BasePlatform_1.BasePlatform));
exports.NativePlatform = NativePlatform;
