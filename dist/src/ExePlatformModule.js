import { NgModule } from '@angular/core';
import { ExePlatformService } from "./ExePlatform.service";
import { AuthService } from "./Auth.service";
import { ExePlatformConponentModule } from "./dynamic-component/ExePlatformConponentModule";
import { WindowsPlatformModule } from "./windows/WindowsPlatformModule";
//导入对应的平台模块
// let platformModule=new PlatformStragety().getStragety();
var ExePlatformModule = (function () {
    function ExePlatformModule() {
    }
    return ExePlatformModule;
}());
export { ExePlatformModule };
ExePlatformModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    WindowsPlatformModule,
                    ExePlatformConponentModule
                ],
                exports: [ExePlatformConponentModule],
                providers: [
                    AuthService,
                    ExePlatformService,
                ]
            },] },
];
/** @nocollapse */
ExePlatformModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ExePlatformModule.js.map