
import {Injectable} from "@angular/core";

/**
 * Created by yefs on 2017/7/11.
 *  log 系统
 */
export interface ILogger{


  log(message?: any, ...optionalParams: any[]): void;

  error(message?: any, ...optionalParams: any[]): void;
}
@Injectable()

export class LoggerService   implements ILogger {

  constructor(
    private enable: boolean,
     private  logger :ILogger
  ){

  }

  log(message?: any, ...optionalParams: any[]): void {
      if(!this.enable){
         return;
      }
    this.logger.log(message,optionalParams);
  }

  error(message?: any, ...optionalParams: any[]): void {
    this.logger.error(message,optionalParams);
  }


}
