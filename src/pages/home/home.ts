import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {StorageService} from "../../platform/service/storage/Storage.service";
import {ExePlatformService} from "../../platform/ExePlatform.service";
import {LoggerService} from "../../platform/service/logger/Logger.service";
/**
 * demo
 * 1.图片上传跨平台
 * 2.本地存储跨平台
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage    implements OnInit{

  uploadinfo:any={
    imageUrl:"test",
    serverUrl:this.exePlatformService.uploadUrl

  };
  platfromName:string="";
  constructor(private storageService:StorageService,
              private  exePlatformService:ExePlatformService,
              private  loggerService:LoggerService
  ) {
    this.uploadinfo.serverUrl=exePlatformService.uploadUrl;

    this.loggerService.log("serverUrl"+this.uploadinfo.serverUrl);
  }
  ngOnInit(): void {
    this.storageService.saveObject("userInfo",this.uploadinfo);

    this.storageService.getObject("userInfo",this.uploadinfo);

    this.loggerService.log("getObject",this.uploadinfo.imageUrl);
    this.platfromName=this.exePlatformService.getPlatformName();
  }

}
