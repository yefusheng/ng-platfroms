
import {Injectable} from "@angular/core";
import {ILogger} from "../../../service/Logger.service";



@Injectable()
export class LoggerNativeService implements ILogger{


  log(message?: any, ...optionalParams: any[]): void {
    console.log(message,optionalParams);
  }



  error(message?: any, ...optionalParams: any[]): void {
  }


}
