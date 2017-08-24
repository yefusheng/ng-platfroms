/**
 * Created by yefs on 2017/7/11.
 *  log 系统
 */
export interface ILogger {
    log(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}
export declare class LoggerService implements ILogger {
    private enable;
    private logger;
    constructor(enable: boolean, logger: ILogger);
    log(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}
