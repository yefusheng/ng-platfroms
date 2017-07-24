
import {Injectable} from "@angular/core";

import {ILogger} from "./ILogger";
/**
 * Created by yefs on 2017/7/11.
 *  log 系统
 */

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
