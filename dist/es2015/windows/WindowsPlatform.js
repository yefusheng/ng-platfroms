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
import { Platforms, windows } from "../ExePlatform.service";
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
        return windows;
    };
    WindowsPlatform.prototype.getPlatformCode = function () {
        return Platforms.windows;
    };
    return WindowsPlatform;
}(BasePlatform));
export { WindowsPlatform };
