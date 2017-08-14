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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BasePlatform_1 = require("../BasePlatform");
var Observable_1 = require("rxjs/Observable");
var ExePlatform_service_1 = require("../ExePlatform.service");
var core_1 = require("@angular/core");
/**
 * Created by yefs on 2017/7/11.
 *
 * 微信平台
 */
var WechatPlatform = (function (_super) {
    __extends(WechatPlatform, _super);
    function WechatPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WechatPlatform.prototype.initPlatform = function () {
        // this.wechat = (<any>window).Wechat;
        this.wx = window.wx;
        var tenantId = "exe";
        var option = this._getWxOption(tenantId);
        this._wxInit(option);
    };
    WechatPlatform.prototype.getPlatformContext = function () {
        return this.wx;
    };
    WechatPlatform.prototype.getPlatformName = function () {
        return ExePlatform_service_1.wechat;
    };
    WechatPlatform.prototype.getPlatformCode = function () {
        return ExePlatform_service_1.Platforms.wechat;
    };
    WechatPlatform.prototype._getWxOption = function (tenantId) {
        var option = {
            jsApiList: ['checkJsApi', 'scanQRCode', 'getLocation', 'getLocation', 'chooseImage', 'uploadImage', 'downloadImage'],
            configUrl: this._getWxConfigUrl(tenantId)
        };
        return option;
    };
    WechatPlatform.prototype._getWxConfigUrl = function (tenantId) {
        return "http://weixin.exexm.com/auth/" + tenantId + "/config";
    };
    WechatPlatform.prototype._wxInit = function (option) {
        var _this = this;
        if (!(option || option.jsApiList.length > 0)) {
            //Toast("初始化配置错误");
        }
        var configUrl = option.configUrl;
        var jsApiList = option.jsApiList;
        if (typeof this.wx !== "undefined") {
            var wxReq = Observable_1.Observable.ajax({
                url: configUrl,
                body: {
                    url: location.href.split('#')[0]
                },
                method: 'post',
                crossDomain: true,
            });
        }
        wxReq.subscribe(function (AjaxResponse) {
            var res = AjaxResponse.response;
            console.log(AjaxResponse);
            if (!res)
                return;
            if (res.success) {
                _this.wx.config({
                    debug: (option && option.debug) || true,
                    appId: res.result && res.result.appId,
                    timestamp: res.result && res.result.timestamp,
                    nonceStr: res.result && res.result.nonceStr,
                    signature: res.result && res.result.signature,
                    jsApiList: jsApiList
                });
            }
            _this.wx.chooseImage({ count: 1 });
        });
    };
    return WechatPlatform;
}(BasePlatform_1.BasePlatform));
WechatPlatform = __decorate([
    core_1.Injectable()
], WechatPlatform);
exports.WechatPlatform = WechatPlatform;
