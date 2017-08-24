import { ExePlatformService } from "./ExePlatform.service";
/**
 * Created by yefs on 2017/7/11.
 *
 * 服务基类
 */
export declare abstract class BaseService {
    exePlatform: ExePlatformService;
    constructor(exePlatformService: ExePlatformService);
}
