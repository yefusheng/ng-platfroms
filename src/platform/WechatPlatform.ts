import {BasePlatform} from "./BasePlatform";
import {Observable} from "rxjs/Observable";
import {platform_wechat, platformsName} from "./ExePlatform.service";
/**
 * Created by yefs on 2017/7/11.
 *
 * 平台基类
 */

export   class WechatPlatform extends  BasePlatform{

  wechat:any;
  wx:any;
  protected initPlatform(): void {
    this.wechat = (<any>window).Wechat;
    this.wx = (<any>window).wx;
  }
  public getPlatformContext() :any {
    return this.wx;
  }
  public getPlatformName() :any {
    return platformsName[platform_wechat];
  }
  public getPlatformCode() :any {
    return platform_wechat;
  }

  public wxInit= function _wxInit(option) {
   if (!(option || option.jsApiList.length > 0)) {
    //Toast("初始化配置错误");
  }
   var configUrl = option.configUrl;
   var jsApiList = option.jsApiList;
   if (typeof this.wx!== "undefined") {
     var wxReq =Observable.ajax({
       url: configUrl,
       body: {
         url: location.href.split('#')[0]
       },
       method: 'post',
       crossDomain: true,
       headers: { 'Content-Type': 'application/json' }

     })
   }
    wxReq.subscribe( AjaxResponse=>{
     let res= AjaxResponse.response;
      if (!res) return;
      if (res.success) {
        this.wx.config({
          debug: (option && option.debug) || false,
          appId: res.result && res.result.appId, // 必填，公众号的唯一标识
          timestamp: res.result && res.result.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.result && res.result.nonceStr, // 必填，生成签名的随机串
          signature: res.result && res.result.signature,// 必填，签名，见附录1
          jsApiList: jsApiList
        });
      }
      }
    );

}
}
