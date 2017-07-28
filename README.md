# ng-platfroms
***an demo，use angular/ionic， for cross platform。基于angular4，实现各平台统一接口和视图***



#### **//-------------------------------------------------------how to run**-------------------------------------------------

//**you need install node.js**

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





**//for wechat in android** 
cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID（你的微信开放平台id）



**//for wechat**   
add  this in index.html
`<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>`



#### **//-------------------------------------------------------how to use**--------------------------------------------

在app.module.ts模块引入ExePlatformModule模块。并且实现AuthService集成BaseAuthService

```
export declare class BaseAuthService {
  getToken(): string ;
}
```







 
