
/**
 * Created by yefs on 2017/7/11.
 *  日志接口
 *
 */


export interface ILogger{


  log(message?: any, ...optionalParams: any[]): void;

  error(message?: any, ...optionalParams: any[]): void;
}
