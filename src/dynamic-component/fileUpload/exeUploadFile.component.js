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
 * @author yefs
 * 上传组件容器，动态生成子组件
 */
var exeUploadFileComponent = (function () {
    function exeUploadFileComponent(_componentFactoryResolver, componentsService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this.componentsService = componentsService;
    }
    exeUploadFileComponent.prototype.ngAfterViewInit = function () {
        this.loadComponent();
    };
    exeUploadFileComponent.prototype.ngOnDestroy = function () {
    };
    exeUploadFileComponent.prototype.loadComponent = function () {
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.componentsService.getUploadComponent());
        var componentRef = this.uploadFile.createComponent(componentFactory);
        componentRef.instance.serverUrl = this.serverUrl;
        // let providers = ReflectiveInjector.resolve([TransFileService]); //为组件添加 providers
        // let injector = ReflectiveInjector.fromResolvedProviders(providers, this.exeUploadId.parentInjector); //创建注入器给 dynamic-component (记得要继承哦)
        // let factory = this._componentFactoryResolver.resolveComponentFactory(this.componentsService.getUploadComponent()); //创建 dynamic-component 工厂
        // let dynamic-component = factory.create(injector); //创建 dynamic-component, 这是就把注入器放进了, 后面的 array 是给 ng-content 用的
        // // dynamic-component.instance.name = "keatkeat"; // 对 input, output 做点东西
        //  this.exeUploadId.insert(dynamic-component.hostView, 0); // 插入到模板中  0 是 position, 如果是 0 其实可以不用放.
    };
    return exeUploadFileComponent;
}());
__decorate([
    core_1.Input()
], exeUploadFileComponent.prototype, "avatarSrc", void 0);
__decorate([
    core_1.Input()
], exeUploadFileComponent.prototype, "hasRound", void 0);
__decorate([
    core_1.Input()
], exeUploadFileComponent.prototype, "serverUrl", void 0);
__decorate([
    core_1.Input()
], exeUploadFileComponent.prototype, "imageUrl", void 0);
__decorate([
    core_1.ViewChild("uploadfile", { read: core_1.ViewContainerRef })
], exeUploadFileComponent.prototype, "uploadFile", void 0);
exeUploadFileComponent = __decorate([
    core_1.Component({
        selector: 'exe-upload-file',
        template: "\n              <div  class=\"upload-pic\">\n                <ng-template #uploadfile> </ng-template>\n              </div>\n            "
    })
], exeUploadFileComponent);
exports.exeUploadFileComponent = exeUploadFileComponent;
