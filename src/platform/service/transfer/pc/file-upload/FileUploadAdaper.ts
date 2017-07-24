/**
 * 上传组件
 * create by yefs
 * 适配器，把多接口的上传组件适配成简单的组件
 */



import {FileUploaderOptions} from "./file.interface";
import { FileUploader} from "./file-uploader.class";

//默认图片上传配置
const DEFAULT_IMAGEUPLOAD_OPTIONS:FileUploaderOptions = {

    //允许的文件类型 Array<string>
    allowedFileType: ['image'],

    //是否自动上传 boolean
    autoUpload: true,

    //是否html5 boolean
    //如果是html5的话 启用xhr 否则用iframe上传
    isHTML5: true,


    //最大文件大小 number
    //maxFileSize: SiteConfig.uploadImageMaxSize,

    queueLimit: 1,

    removeAfterUpload: true
};



export class FileUploadAdaper {

    //图片上传配置项
     _options: FileUploaderOptions;
    //图片地址
     _imageUrl: string;

       _uploader: FileUploader;

     _successCall :Function;

      _failCall:Function;


    constructor(
      uploader: FileUploader
    ){
        this._uploader = uploader;
    }

    /**
     * 图片添加失败
     * @param { FileLikeObject } item 文件对象
     * @param { any } filter 过滤对象
     * @param { any } options 配置
     * @return { Function }
     */
    private _onWhenAddingFileFailed():Function{

        return (item:any, filter:any, options:any)=>{

            // this._registerOnChange("");
            this._imageUrl = "";
          this._failCall(item);
        }
    }

    /**
     * 上传前处理
     * @param { any } item 等待上传的文件
     * @return { Function }
     */
    private _onBeforeUploadItem():Function{

        return (item: any)=>{}
    }

    /**
     * 上传中处理
     * @return { Function }
     */
    private _onProgressItem():Function{

        return (item: any, progress: number)=>{

        }

    }

     /**
     * 上传成功处理
     * @return { Function }
     */
    private _onSuccessItem():Function{

        return (item: any,response:string,status:number, headers:any)=>{

            let data = response['data'];
            this._imageUrl = data["imageUrl"];
            this._successCall(this._imageUrl);
        }
    }


    private _onErrorItem():Function{


        return (item: any,response:string,status:number, headers:any)=>{

            this._imageUrl = "";
           this._failCall(response);
        }
    }

     /**
     * 上传取消处理
     * @return { Function }
     */
    private _onCancelItem():Function{

        return (item: any,response:string,status:number, headers:any)=>{
            this._imageUrl = "";
          this._failCall(item);
        }
    }



    upload(opts?: FileUploaderOptions,successCall ?:Function,failCall ?:Function):void{
         this._successCall=successCall;
         this._failCall=failCall;

      // let options = this._options = Util.extend(true,{},DEFAULT_IMAGEUPLOAD_OPTIONS,opts || {});

      this._uploader.setOptions(opts);

      //注册回调函数
      // this._uploader.onWhenAddingFileFailed= this._onWhenAddingFileFailed();
      // this._uploader.onBeforeUploadItem = this._onBeforeUploadItem();
      // this._uploader.onProgressItem = this._onProgressItem();
      // this._uploader.onSuccessItem = this._onSuccessItem();
      // this._uploader.onErrorItem = this._onErrorItem();
      // this._uploader.onCancelItem = this._onCancelItem();

    }

}
