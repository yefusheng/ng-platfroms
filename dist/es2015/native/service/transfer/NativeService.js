/**
 * Created by yefs.
 * 原生插件,工具类
 */
import { Injectable } from '@angular/core';
import { LoadingController, Platform, AlertController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { Camera } from '@ionic-native/camera';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer } from '@ionic-native/transfer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ImagePicker } from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { CallNumber } from '@ionic-native/call-number';
var NativeService = (function () {
    function NativeService(platform, 
        // private toastCtrl: ToastController,
        alertCtrl, appVersion, camera, 
        // private toast: Toast,
        transfer, 
        // private file: File,
        fileOpener, inAppBrowser, imagePicker, network, callNumber, loadingCtrl) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.appVersion = appVersion;
        this.camera = camera;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.inAppBrowser = inAppBrowser;
        this.imagePicker = imagePicker;
        this.network = network;
        this.callNumber = callNumber;
        this.loadingCtrl = loadingCtrl;
        this.loadingIsOpen = false;
    }
    NativeService.prototype.warn = function (info) {
        console.log('%cNativeService/' + info, 'color:#e8c406');
    };
    /**
     * 通过浏览器下载app
     */
    NativeService.prototype.openUrlByBrowser = function (url) {
        this.inAppBrowser.create(url, '_system');
    };
    NativeService.prototype.downloadApk = function () {
        // let alert = this.alertCtrl.create({
        //   title: '下载进度：0%',
        //   enableBackdropDismiss: false,
        //   buttons: ['后台下载']
        // });
        // alert.present();
        //
        // const fileTransfer: TransferObject = this.transfer.create();
        // const apk = this.file.externalRootDirectory + 'android.apk';//保存的目录
        // fileTransfer.download('app下载地址', apk).then(entry => {
        //   //.apk MIME类型：application/vnd.android.package-archive
        //   //.ipa MIME类型：application/octet-stream.ipa
        //   this.fileOpener.open(apk, 'application/vnd.android.package-archive').then(res => {
        //     console.log('apk打开成功准备安装 ' + res);
        //   }, () => {
        //     this.alertCtrl.create({
        //       title: '失败!',
        //       subTitle: '安装包下载完成,打开失败!',
        //       buttons: ['确定']
        //     }).present();
        //   });
        // }, () => {
        //   this.alertCtrl.create({
        //     title: '失败!',
        //     subTitle: '下载安装包失败,请稍后再试!',
        //     buttons: ['确定']
        //   }).present();
        // });
        //
        // fileTransfer.onProgress((event: ProgressEvent) => {
        //   let num = Math.floor(event.loaded / event.total * 100);
        //   if (num === 100) {
        //     alert.dismiss();
        //   } else {
        //     let title = document.getElementsByClassName('alert-title')[0];
        //     title && (title.innerHTML = '下载进度：' + num + '%');
        //   }
        // });
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    // showToast(message: string = '操作完成', duration: number = 2000): void {
    //   if (this.isMobile()) {
    //     this.toast.show(message, String(duration), 'center').subscribe();
    //   } else {
    //     this.toastCtrl.create({
    //       message: message,
    //       duration: duration,
    //       position: 'middle',
    //       showCloseButton: false
    //     }).present();
    //   }
    // };
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(function () {
                _this.loadingIsOpen && _this.loading.dismiss();
                _this.loadingIsOpen = false;
            }, 10000);
        }
    };
    ;
    /**
     * 关闭loading
     */
    NativeService.prototype.hideLoading = function () {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };
    ;
    /**
     * 使用cordova-plugin-camera获取照片
     * @param options
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 800,
            targetHeight: 800,
            saveToPhotoAlbum: true,
            correctOrientation: true //设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return new Promise(function (resolve) {
            _this.camera.getPicture(ops).then(function (imgData) {
                resolve(imgData);
            }, function (err) {
                // err == 20 && this.showToast('没有权限,请在设置中开启权限');
                _this.warn('getPicture:' + err);
            });
        });
    };
    ;
    /**
     * 通过拍照获取照片
     * @param options
     * @return {Promise<string>}
     */
    NativeService.prototype.getPictureByCamera = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve) {
            _this.getPicture(Object.assign({
                sourceType: _this.camera.PictureSourceType.CAMERA
            }, options)).then(function (imgData) {
                resolve(imgData);
            }).catch(function (err) {
                // String(err).indexOf('cancel') != -1 ? this.showToast('取消拍照', 1500) : this.showToast('获取照片失败');
            });
        });
    };
    ;
    /**
     * 通过图库获取照片
     * @param options
     * @return {Promise<string>}
     */
    NativeService.prototype.getPictureByPhotoLibrary = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve) {
            _this.getPicture(Object.assign({
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY
            }, options)).then(function (imgData) {
                resolve(imgData);
            }).catch(function (err) {
                // String(err).indexOf('cancel') != -1 ? this.showToast('取消选择图片', 1500) : this.showToast('获取照片失败');
            });
        });
    };
    ;
    /**
     * 通过图库选择多图
     * @param options
     * @return {Promise<T>}
     */
    NativeService.prototype.getMultiplePicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var that = this;
        var destinationType = options['destinationType'] || 0; //0:base64字符串,1:图片url
        return new Promise(function (resolve) {
            _this.imagePicker.getPictures(Object.assign({
                maximumImagesCount: 6,
                width: 800,
                height: 800,
                quality: 100 //图像质量，范围为0 - 100
            }, options)).then(function (files) {
                if (destinationType === 1) {
                    resolve(files);
                }
                else {
                    var imgBase64s_1 = []; //base64字符串数组
                    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                        var fileUrl = files_1[_i];
                        that.convertImgToBase64(fileUrl, function (base64) {
                            imgBase64s_1.push(base64);
                            if (imgBase64s_1.length === files.length) {
                                resolve(imgBase64s_1);
                            }
                        }, null);
                    }
                }
            }).catch(function (err) {
                _this.warn('getMultiplePicture:' + err);
                // this.showToast('获取照片失败');
            });
        });
    };
    ;
    /**
     * 根据图片绝对路径转化为base64字符串
     * @param url 绝对路径
     * @param callback 回调函数
     * @param outputFormat 转换格式,默认为image/png
     */
    NativeService.prototype.convertImgToBase64 = function (url, callback, outputFormat) {
        if (outputFormat === void 0) { outputFormat = 'image/png'; }
        var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), img = new Image;
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            var imgBase64 = canvas.toDataURL(outputFormat); //返回如'data:image/jpeg;base64,abcdsddsdfsdfasdsdfsdf'
            var base64 = imgBase64.substring(imgBase64.indexOf(';base64,') + 8); //返回如'abcdsddsdfsdfasdsdfsdf'
            callback.call(this, base64);
            canvas = null;
        };
        img.src = url;
    };
    /**
     * 获得用户当前坐标
     * @return {Promise<Position>}
     */
    NativeService.prototype.getUserLocation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.isMobile()) {
                LocationPlugin.getLocation(function (data) {
                    resolve({ 'lng': data.longitude, 'lat': data.latitude });
                }, function (msg) {
                    alert(msg.indexOf('缺少定位权限') == -1 ? ('错误消息：' + msg) : '缺少定位权限，请在手机设置中开启');
                    _this.warn('getUserLocation:' + msg);
                });
            }
            else {
                _this.warn('getUserLocation:非手机环境,即测试环境返回固定坐标');
                resolve({ 'lng': 113.350912, 'lat': 23.119495 });
            }
        });
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getVersionNumber:' + err);
            });
        });
    };
    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getAppName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getAppName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getAppName:' + err);
            });
        });
    };
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPackageName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getPackageName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getPackageName:' + err);
            });
        });
    };
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    NativeService.prototype.call = function (numberToCall) {
        this.callNumber
            .callNumber(numberToCall, true)
            .then(function () { })
            .catch(function () { });
    };
    NativeService.prototype.sendSms = function (numberToCall) {
        this.callNumber
            .callNumber(numberToCall, true)
            .then(function () { })
            .catch(function () { });
    };
    return NativeService;
}());
export { NativeService };
NativeService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NativeService.ctorParameters = function () { return [
    { type: Platform, },
    { type: AlertController, },
    { type: AppVersion, },
    { type: Camera, },
    { type: Transfer, },
    { type: FileOpener, },
    { type: InAppBrowser, },
    { type: ImagePicker, },
    { type: Network, },
    { type: CallNumber, },
    { type: LoadingController, },
]; };
