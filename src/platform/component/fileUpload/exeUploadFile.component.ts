import {
  Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy,
  ViewContainerRef, ReflectiveInjector
} from '@angular/core';
import {ComponentsFactoryService} from "../ComponentsFactory.service";

/**
 * @author yefs
 * 上传组件容器，动态生成子组件
 */

@Component({
  selector: 'exe-upload-file',
  template: `
              <div  class="upload-pic">
                <ng-template #uploadfile> </ng-template>
              </div>
            `

})
export class exeUploadFileComponent implements AfterViewInit, OnDestroy {
  @Input()
  avatarSrc: string;
  @Input()
  hasRound: boolean;
  @Input()
  serverUrl: string;

  @Input()
  imageUrl: string ;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private componentsService:ComponentsFactoryService
  ) { }
  @ViewChild("uploadfile",{read : ViewContainerRef}) uploadFile: ViewContainerRef;
  ngAfterViewInit() {
    this.loadComponent();
  }

  ngOnDestroy() {

  }

  loadComponent() {

    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.componentsService.getUploadComponent());
    let componentRef = this.uploadFile.createComponent(componentFactory);
     componentRef.instance.serverUrl=this.serverUrl;

    // let providers = ReflectiveInjector.resolve([TransFileService]); //为组件添加 providers
    // let injector = ReflectiveInjector.fromResolvedProviders(providers, this.exeUploadId.parentInjector); //创建注入器给 component (记得要继承哦)
    // let factory = this._componentFactoryResolver.resolveComponentFactory(this.componentsService.getUploadComponent()); //创建 component 工厂
    // let component = factory.create(injector); //创建 component, 这是就把注入器放进了, 后面的 array 是给 ng-content 用的
    // // component.instance.name = "keatkeat"; // 对 input, output 做点东西
    //  this.exeUploadId.insert(component.hostView, 0); // 插入到模板中  0 是 position, 如果是 0 其实可以不用放.
  }


}
