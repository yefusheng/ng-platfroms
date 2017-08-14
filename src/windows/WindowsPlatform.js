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
 * pc平台上下文
 */
var WindowsPlatform = (function (_super) {
    __extends(WindowsPlatform, _super);
    function WindowsPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsPlatform.prototype.initPlatform = function () {
        this.window = window;
    };
    WindowsPlatform.prototype.getPlatformContext = function () {
        return this.window;
    };
    WindowsPlatform.prototype.getPlatformName = function () {
        return ExePlatform_service_1.windows;
    };
    WindowsPlatform.prototype.getPlatformCode = function () {
        return ExePlatform_service_1.Platforms.windows;
    };
    return WindowsPlatform;
}(BasePlatform_1.BasePlatform));
exports.WindowsPlatform = WindowsPlatform;
