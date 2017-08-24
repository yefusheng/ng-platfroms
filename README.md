# ng-platfroms
***an demo，use angular/ionic， for cross platform。基于angular4，实现各平台统一接口和视图***

在使用前端做跨平台项目时，会遇到各平台差异问题,如果没有抽取公共部分，在合并各个平台代码分支时，冲突会比较多，而且对合并人员对代码的熟悉成都要求很高。

本文旨在利用angular特性及代码设计，尝试提出方案。



## how to run



//先安装 node.js

用git克隆本项目，从命令行进入进入项目根目录，依次执行以下命令：

```
npm i -g cnpm --registry=https://registry.npm.taobao.org
cnpm i -g @angular/cli
cnpm install
ng serve

```







//for android 

```
ionic platfrom add android 

cordova plugin add cordova-plugin-camera

cordova plugin add  cordova-plugin-console 

cordova plugin add cordova-plugin-file-transfer

cordova plugin add cordova-plugin-file

//..... add other cordova plugin

ionic run android 
```



**//for wechat in android** 

```
cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID（你的微信开放平台id）
```



## Install:



 cnpm install ng-platforms



## Usage:



在app.module.ts模块引入ExePlatformModule模块

```
import {ExePlatformModule} from "ng-platforms";
```



## FAQ

1. android build fail 


`Starting a new Gradle Daemon for this build (subsequent builds will be faster).`

`Incremental java compilation is an incubating feature.`

`Failed to download any source lists!`

`java.net.ConnectException: Connection timed out: connect`



`BUILD FAILED`

原因：由于gradle被墙，无法下载数据

解决方案：

在android的build.gradle中添加国内镜像

buildscript {
​    repositories {
​        maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/'}
​    }
}

allprojects {
​    repositories {
​        maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/'}
​    }
}

https://www.zhihu.com/question/37810416/answer/73703268



2微信平台无法使用

需要用微信调试工具

https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140