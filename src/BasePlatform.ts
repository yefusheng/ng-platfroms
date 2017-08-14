/**
 * Created by yefs on 2017/7/11.
 *
 * 平台基类
 */

export abstract  class BasePlatform {




  constructor() {

  }
  public abstract getPlatformContext() :any;

  public abstract getPlatformName() :string;

  public abstract getPlatformCode() :number;

}
