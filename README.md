# ng-platfroms
demo，user angular4 ， for cross platform。基于angular4，实现各平台统一接口，视图

//------------------how to run 
#you need install node.js 

npm install

ng serve 

//for android 
ionic platfrom add android 


cordova plugin add cordova-plugin-camera

cordova plugin add  cordova-plugin-console 

cordova plugin add cordova-plugin-file-transfer

cordova plugin add cordova-plugin-file

//..... add other cordova plugin

ionic run android 

//for wechat in android 
cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID（你的微信开放平台id）

//for pc


//for wechat 
add  this in index.html
<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>


//-------------------------------------------------------------------
              Angular4跨平台方案初探
 --yefs
在使用前端做跨平台项目时，会遇到各平台差异问题,如果没有抽取差异部分，在合并各个平台代码分支时，冲突会比较多，而且对合并人员对代码的熟悉成都要求很高。
本文旨在利用angular特性及代码设计，尝试提出方案。
平台的差异包含多种差异,包括
1 ui（如pc的选择文件需要 input  type=“file” 控件，而移动端只需要一个点击事件）
2 数据处理（如数据存储，pc端有sessionstorage，移动端有多种本地存储）
3操作步骤（如果选择图片上传时，Pc只要选择图片，移动端需要选择图片或者拍照，然后获得图片后上传）
4路由差异（pc端一般是侧滑栏的结构，移动端多为tab底部栏）
5接口差异问题

等






1针对单一的界面差异
可以通过动态创建组件解决考

https://www.angular.cn/docs/ts/latest/cookbook/dynamic-component-loader.html
关键代码:
let componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
let componentRef = viewContainerRef.createComponent(componentFactory);

需要注意的是
动态生成的组件需要在模块配置中声明，
组件的容器需要在entryComponents里声明。


2针对数据处理
参考angular的LocationStrategy
可以通过策略模式，定义操作的接口或者抽象类，
并实现各个平台的具体操作。
在NgModule中的providers通过使用useFactory并提供平台作为参数产生服务提供商
1定义接口（也可以是抽象类）
export interface IStorage{


  saveObject(key: string,value :any):void;

  getObject(key: string,defaule:any): any;

}
2实现各平台接口
@Injectable()
export class StoragePc implements IStorage{
  
  constructor(
  ){
  }
  saveObject(key: string, value: any): void {
    window.sessionStorage.setItem(key,this.stringify(value));
  }

  getObject(key: string, defaule: any): any {
    let value = window.sessionStorage.getItem(key);
    if(value){
      value= JSON.parse(value);
    }else {
      value=defaule;
    }

    return value;
  }

}
//原生平台
@Injectable()
export class StorageNative implements IStorage{
//略
}

3提供策略

这里的关键之platform  , 由ExePlatformService服务注入
@Injectable()
export class StorageStragety{
  _Storage:IStorage;
  constructor(
    public platformService:ExePlatformService
  ){
  }
  public getStragety(): IStorage {
    switch (this.platformService.platform){
      case platform_native:
        this._Storage=new StorageNative();
        break;
      case platform_wechat:
        this._Storage=new StoragePc();
        break;
      case platform_pc:
        this._Storage=new StoragePc();
        break;

    }
    return  this._Storage;
  }
}
//其实这里更像一个工厂类，他只是提供某个接口的具体实现对象。
4注入服务
利用useFactory从策略类里得到一个对象，注入到StorageService里
providers: [

//……
{
  provide: StorageService, useFactory: (StorageStragety) => {
  return new StorageService(StorageStragety.getStragety());
},deps:[StorageStragety]
},
//……
]
5暴露服务
暴露一个服务供模块外使用，外界模块使用时，无需关心平台
@Injectable()

export class StorageService   implements IStorage {

  constructor(
  private  storage :IStorage
  ){

  }
  saveObject(key: string, value: any): void {
    this.storage.saveObject(key,value);
  }

  getObject(key: string, defaule: any): any {
    return   this.storage.getObject(key,defaule);
  }
}





3操作步骤差异
一开始本来想尽量把代码都抽成接口，如把图片上传分为获取图片和上传图片两部分，图片上传部分是容易抽成接口，但是图片的选择步骤差异较大。发现很麻烦。
对于操作步骤差异较大，而数据处理也有差异，而界面展示相同的，推荐使用动态创建组件方式去做。
4路由差异
路由差异主要是侧护栏的差异和底部栏的差异。
会产生路由跳转差异。
1对于二级三级界面可以通过做两套路由映射来解决。
2主要的问题是首页
从目前项目来看，主要是移动端的首页列表在pc端是侧滑栏。
出现问题的场景很多。暂时未能考虑周全。

5接口差异问题
可能出现这样的情况
5.1不同的平台早先的接口都不同，有的返回一个回调函数，有的返回一个Promise，有平台需要传入success和error的回调，

解决方案：Rxjs，利用Rx.Observable.fromPromise()把Promise转成observable 

参考代码：
https://xgrommx.github.io/rx-book/content/how_do_i/existing_api.html
https://xgrommx.github.io/rx-book/content/how_do_i/angular_with_rxjs.html



 

5.2接口平台返回的Promise<T>，泛型里的类型不一样时。
比如我们定义统一接口返回Promise < FileUploadResult>，而其中一个平台返回的是Promise < FileUploadResultPc>方法去适配。


解决方案：1使用Promise < any>
2数据的差异用rxjs提供的map来适配
upload(path: string,url: string) :Promise<ExeFileUploadResult> {
  let options: FileUploadOptions = {
    fileKey: 'file',
    fileName: path.substr(path.lastIndexOf('/') + 1)
  }
  let observable= Observable.fromPromise(this.fileTransfer.upload(path,url, options)).map((result)=> {
      let exeFileUploadResult :ExeFileUploadResult;
      exeFileUploadResult.response=result.response;
      
     return exeFileUploadResult;
  });

  return observable.toPromise();

this.fileTransfer.upload原本返回Promise，我们利用Observable.fromPromise把他转成Observable，并且利用map函数，修改其返回数据的内容。最终转成Promise返回

总结：
1服务和数据差异可以通过使用工厂提供商，传入平台作为参数，然后切换不同策略提供商
2视图的差异可以使用动态创建组件方式解决
3 接口差异用rxjs解决
4在做和原生交互，和服务端交互，本地存储，库文件引入，分享，媒体，表情解析。
等功能时，如果该功能有平台差异，不直接实现，而考虑在新建一个平台文件夹，在里面做差异处理。



由于本人能力弱鸡，文章有误或者含糊不清的，请见谅。

Demo下载地址 ：https://github.com/yefusheng/ng-platfroms

 
