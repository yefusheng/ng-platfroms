import {Component, forwardRef, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FileUploader, FileUploaderOptions, Headers} from "../../../service/transfer/pc/file-upload/file-uploader.class";
import {ExePlatformService} from "../../../ExePlatform.service";
import {

  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {AuthService} from "../../../../service/Auth.service";
import {log} from "../../../service/util/util";
import {BaseAuthService} from "../../../BaseAuth.service";
export const IMAGE_UPLOAD_VALUE_ACCESSOR: any = {

  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => exeUploadFilePcComponent),
  multi: true
};
@Component({
  selector: 'exe-upload-file-pc',
  templateUrl: 'UploadFilePc.html',
  providers: [IMAGE_UPLOAD_VALUE_ACCESSOR],

})

export class exeUploadFilePcComponent implements OnInit, OnChanges, ControlValueAccessor {


  @Input()
  avatarSrc: string;
  @Input()
  hasRound: boolean;
  @Input()
  serverUrl: string;


  //图片地址
  private _imageUrl: string;

  //是否必须
  private _required: boolean;

  //是否上传失败
  isFail: boolean;

  //上传进度
  progress: number;

  //是否正在上传
  isUploading: boolean;


  fileUploaderOptions: FileUploaderOptions;
  uploader: FileUploader;
  headersList?: Array<Headers> = new Array<Headers>();

  constructor(public authService: BaseAuthService) {

  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {
    this.initFileUploader();
  }

  initFileUploader() {
    this.fileUploaderOptions = {
      url: this.serverUrl,
      authTokenHeader: this.authService.getToken(),
      autoUpload: true
    };

    let header: Headers = {
      name: "token",
      value: this.authService.getToken()
    };

    this.headersList.push(header);

    this.fileUploaderOptions.headers = this.headersList;
    this.uploader = new FileUploader(
      this.fileUploaderOptions);


    this.uploader.onSuccessItem = this._onSuccessItem;
    log("initFileUploader token", this.authService.getToken());
  }

  private _registerOnChange = function (value: any) {

  }
  _onSuccessItem = function (item: any, response: string, status: number, headers: any) {
    let responseObject = JSON.parse(response);
    let data = responseObject['data'];
    log("_onSuccessItem", response);

    this.isFail = false;
    this._registerOnChange(data["picture"]);
    this._imageUrl = data["picture"];

    log("_imageUrl" + this._imageUrl);
  }

  writeValue(obj: any): void {
    this._imageUrl = obj;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState(isDisabled: boolean): void {

  }

  registerOnChange(fn: any): void {

    this._registerOnChange = fn;
  }

  @HostListener('change')
  public onChange(): any {

  }
}
