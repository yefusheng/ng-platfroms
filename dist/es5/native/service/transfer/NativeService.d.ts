import { LoadingController, Platform, AlertController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { Camera } from '@ionic-native/camera';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer } from '@ionic-native/transfer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ImagePicker } from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { CallNumber } from '@ionic-native/call-number';
export declare class NativeService {
    private platform;
    private alertCtrl;
    private appVersion;
    private camera;
    private transfer;
    private fileOpener;
    private inAppBrowser;
    private imagePicker;
    private network;
    private callNumber;
    private loadingCtrl;
    private loading;
    private loadingIsOpen;
    constructor(platform: Platform, alertCtrl: AlertController, appVersion: AppVersion, camera: Camera, transfer: Transfer, fileOpener: FileOpener, inAppBrowser: InAppBrowser, imagePicker: ImagePicker, network: Network, callNumber: CallNumber, loadingCtrl: LoadingController);
    warn(info: any): void;
    /**
     * 通过浏览器下载app
     */
    openUrlByBrowser(url: string): void;
    downloadApk(): void;
    /**
     * 是否真机环境
     * @return {boolean}
     */
    isMobile(): boolean;
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    isAndroid(): boolean;
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    isIos(): boolean;
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content?: string): void;
    /**
     * 关闭loading
     */
    hideLoading(): void;
    /**
     * 使用cordova-plugin-camera获取照片
     * @param options
     * @returns {Promise<string>}
     */
    getPicture(options?: {}): Promise<string>;
    /**
     * 通过拍照获取照片
     * @param options
     * @return {Promise<string>}
     */
    getPictureByCamera(options?: {}): Promise<string>;
    /**
     * 通过图库获取照片
     * @param options
     * @return {Promise<string>}
     */
    getPictureByPhotoLibrary(options?: {}): Promise<string>;
    /**
     * 通过图库选择多图
     * @param options
     * @return {Promise<T>}
     */
    getMultiplePicture(options?: {}): Promise<any>;
    /**
     * 根据图片绝对路径转化为base64字符串
     * @param url 绝对路径
     * @param callback 回调函数
     * @param outputFormat 转换格式,默认为image/png
     */
    convertImgToBase64(url: any, callback: any, outputFormat?: string): void;
    /**
     * 获得用户当前坐标
     * @return {Promise<Position>}
     */
    getUserLocation(): Promise<Position>;
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    getVersionNumber(): Promise<string>;
    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    getAppName(): Promise<string>;
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    getPackageName(): Promise<string>;
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    getNetworkType(): string;
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    isConnecting(): boolean;
    call(numberToCall: string): void;
    sendSms(numberToCall: string): void;
}
