import { ILogger } from "../../../service/Logger.service";
export declare class LoggerPcService implements ILogger {
    log(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}
