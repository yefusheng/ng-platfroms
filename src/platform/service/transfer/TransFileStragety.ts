import {ITransFile} from "./ITransFile";
import {TransFilePc} from "./pc/TransFilePc";
import {TransFileWechat} from "./wechat/TransFileWechat.service";
import {ExePlatformService, platform_native, platform_pc, platform_wechat} from "../../ExePlatform.service";
import {Injectable} from "@angular/core";
import {TransFileNative} from "./native/TransFileNative.service";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
@Injectable()
export class TransFileStragety   {



  constructor(
    public platformService:ExePlatformService
  ){
  }
  _transFile: ITransFile;
  public getStragety(): ITransFile {
    switch (this.platformService.platform.getPlatformCode()) {
      case platform_native:
        // this._transFile=new TransFileNative();
        break;
      case platform_wechat:
        this._transFile = new TransFileWechat(this.platformService);
        break;
      case platform_pc:
        this._transFile = new TransFilePc();
        break;
    }
    return this._transFile;
  }

}
