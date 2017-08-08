import {BasePlatform} from "./BasePlatform";
import {Observable} from "rxjs/Observable";
import {Platforms, wechat} from "./ExePlatform.service";
import {Platform} from "ionic-angular";
import {StorageService} from "./service/storage/Storage.service";
import {Provider} from "@angular/core";
import {TransFileWechat} from "./service/transfer/wechat/TransFileWechat.service";
import {TransFileService} from "./service/transfer/TransFile.service";
import {LoggerService} from "./service/logger/Logger.service";
import {StorageWeChat} from "./service/storage/wechat/StorageWeChat";
import {LoggerPcService} from "./service/logger/pc/LoggerPc.service";
/**
 * Created by yefs on 2017/7/11.
 *
 * 微信平台
 */
export const WECHAT_PLATFORM_PROVIDERS: Provider[] = [
  {provide: StorageService, useClass: StorageWeChat},
  {provide: TransFileService, useClass: TransFileWechat},
  {provide: LoggerService, useClass: LoggerPcService},
];
export class WechatPlatform extends BasePlatform {

  // wechat: any;
  wx: any;

  protected initPlatform(): void {
    // this.wechat = (<any>window).Wechat;
    this.wx = (<any>window).wx;
    let tenantId="exe";
    let option =this._getWxOption(tenantId);
    this._wxInit(option);
  }

  public getPlatformContext(): any {
    return this.wx;
  }

  public getPlatformName(): any {
    return wechat;
  }

  public getPlatformCode(): any {
    return Platforms.wechat;
  }

  _getWxOption(tenantId: string) {
    let option = {
      jsApiList: ['checkJsApi', 'scanQRCode', 'getLocation', 'getLocation', 'chooseImage', 'uploadImage', 'downloadImage'],
      configUrl: this._getWxConfigUrl(tenantId)
    };
    return option;
  }

  _getWxConfigUrl(tenantId: string) {
    return "http://weixin.exexm.com/auth/" + tenantId + "/config";
  }

  _wxInit(option) {
    if (!(option || option.jsApiList.length > 0)) {
      //Toast("初始化配置错误");
    }
    var configUrl = option.configUrl;
    var jsApiList = option.jsApiList;
    if (typeof this.wx !== "undefined") {
      var wxReq = Observable.ajax({
        url: configUrl,
        body: {
          url: location.href.split('#')[0]
        },
        method: 'post',
        crossDomain: true,
       // headers: {'responseType': 'json'}

      })
    }
    wxReq.subscribe(AjaxResponse => {
        let res = AjaxResponse.response;
        console.log(AjaxResponse);
        if (!res) return;
        if (res.success) {
          this.wx.config({
            debug: (option && option.debug) || true,
            appId: res.result && res.result.appId, // 必填，公众号的唯一标识
            timestamp: res.result && res.result.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.result && res.result.nonceStr, // 必填，生成签名的随机串
            signature: res.result && res.result.signature,// 必填，签名，见附录1
            jsApiList: jsApiList
          });
        }
      this.wx.chooseImage({count:1});
      }
    );

  }
}
