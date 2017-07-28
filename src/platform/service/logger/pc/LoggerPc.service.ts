
import {Injectable} from "@angular/core";
import {ILogger} from "../ILogger";


@Injectable()
export class LoggerPcService implements ILogger{



  log(message?: any, ...optionalParams: any[]): void {
    console.log(message,optionalParams);
  }



  error(message?: any, ...optionalParams: any[]): void {
    console.error(message,optionalParams);
  }


}
