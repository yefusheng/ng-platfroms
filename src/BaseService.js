"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by yefs on 2017/7/11.
 *
 * 服务基类
 */
var BaseService = (function () {
    function BaseService(exePlatformService) {
        this.exePlatform = exePlatformService;
    }
    return BaseService;
}());
exports.BaseService = BaseService;
