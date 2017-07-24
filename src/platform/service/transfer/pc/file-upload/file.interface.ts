/**
 * @interface
 * create by david wang on 2017-6-2
 * @desc 修改自 https://github.com/valor-software/ng2-file-upload/blob/development/src/file-upload/file-type.class.ts
 */

 import { FileLikeObject } from "./file-like-object.class";

/**
 * 定义头数据类型
 */
export interface Headers{

    name:string;
    value:string;
}


/**
 * 定义头数据类型
 */
export type ParsedResponseHeaders = {[headerFieldName:string]:string};


/**
 * 定义过滤函数
 */
export type FilterFunction = {name:string, fn:(item?:FileLikeObject, options?:FileUploaderOptions)=>boolean};


/**
 * 定义配置项
 */
export interface FileUploaderOptions {

    //允许的mime类型
    allowedMimeType?: Array<string>;

    //允许的文件类型
    allowedFileType?: Array<string>;

    //是否自动上传
    autoUpload?: boolean;

    //是否html5 boolean
    //如果是html5的话 启用xhr 否则用iframe上传
    isHTML5?: boolean;

    //过滤函数组  Array<any>
    //[{name: "",fn: ()=>{}}]
    filters?: Array<FilterFunction>;

    //header Array<{[key:string]: string}>
    headers?: Array<Headers>;

    //请求方法 post get ...
    method?: string;

    //授权码
    authToken?: string;

    //授权码名称
    authTokenHeader?: string;

    //最大文件大小 number
    maxFileSize?: number;

    //最大上传数量
    queueLimit?: number;

    //图片上传后从队列中删除
    removeAfterUpload?: boolean;

    //路径
    url?: string;

    //是否禁用多图上传
    disableMultipart?: boolean;

    itemAlias?: string;

    additionalParameter?: {[key: string]: any};
}
