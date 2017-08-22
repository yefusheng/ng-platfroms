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
import { BasePlatform } from "../BasePlatform";
import { mobile, Platforms } from "../ExePlatform.service";
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
        return mobile;
    };
    NativePlatform.prototype.getPlatformCode = function () {
        return Platforms.mobile;
    };
    return NativePlatform;
}(BasePlatform));
export { NativePlatform };
//# sourceMappingURL=NativePlatform.js.map