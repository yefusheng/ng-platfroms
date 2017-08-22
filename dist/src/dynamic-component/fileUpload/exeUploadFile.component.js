import { Component, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ComponentsFactoryService } from "../ComponentsFactory.service";
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
export { exeUploadFileComponent };
exeUploadFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'exe-upload-file',
                template: "\n              <div  class=\"upload-pic\">\n                <ng-template #uploadfile> </ng-template>\n              </div>\n            "
            },] },
];
/** @nocollapse */
exeUploadFileComponent.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: ComponentsFactoryService, },
]; };
exeUploadFileComponent.propDecorators = {
    'avatarSrc': [{ type: Input },],
    'hasRound': [{ type: Input },],
    'serverUrl': [{ type: Input },],
    'imageUrl': [{ type: Input },],
    'uploadFile': [{ type: ViewChild, args: ["uploadfile", { read: ViewContainerRef },] },],
};
//# sourceMappingURL=exeUploadFile.component.js.map