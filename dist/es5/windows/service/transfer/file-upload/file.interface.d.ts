/**
 * @interface
 * create by david wang on 2017-6-2
 * @desc 修改自 https://github.com/valor-software/ng2-file-upload/blob/development/src/file-upload/file-type.class.ts
 */
import { FileLikeObject } from "./file-like-object.class";
/**
 * 定义头数据类型
 */
export interface Headers {
    name: string;
    value: string;
}
/**
 * 定义头数据类型
 */
export declare type ParsedResponseHeaders = {
    [headerFieldName: string]: string;
};
/**
 * 定义过滤函数
 */
export declare type FilterFunction = {
    name: string;
    fn: (item?: FileLikeObject, options?: FileUploaderOptions) => boolean;
};
/**
 * 定义配置项
 */
export interface FileUploaderOptions {
    allowedMimeType?: Array<string>;
    allowedFileType?: Array<string>;
    autoUpload?: boolean;
    isHTML5?: boolean;
    filters?: Array<FilterFunction>;
    headers?: Array<Headers>;
    method?: string;
    authToken?: string;
    authTokenHeader?: string;
    maxFileSize?: number;
    queueLimit?: number;
    removeAfterUpload?: boolean;
    url?: string;
    disableMultipart?: boolean;
    itemAlias?: string;
    additionalParameter?: {
        [key: string]: any;
    };
}
