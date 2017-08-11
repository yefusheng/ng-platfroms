import {
  Component, ElementRef, forwardRef, HostListener, Input, OnChanges, OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';
import {

  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {TransFileService} from "../../../service/TransFile.service";
import {log} from "../../../util/util";
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
  @ViewChild('inputFile')
  inputFile: ElementRef;

  //图片地址
  private _imageUrl: string;

  //是否上传失败
  isFail: boolean;

  //上传进度
  progress: number;

  //是否正在上传
  isUploading: boolean;

  protected element:ElementRef;

  constructor(
    element:ElementRef,
   private transFileService:TransFileService
  ) {
    this.element = element;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit() {

  }

  private _registerOnChange = function (value: any) {

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

  public getFilters():any {
    return void 0;
  }

  public isEmptyAfterSelection():boolean {
    return !!this.inputFile.nativeElement.attributes.multiple;
  }

  @HostListener('change')
  public onChange():any {
    // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
    let files = this.inputFile.nativeElement.files;
    log("files", files);
    this.transFileService.upload(files,this.serverUrl).then(exeFileUploadResult => {
      let responseObject = JSON.parse(exeFileUploadResult.response);
      if(!responseObject){
        return;
      }
      let data = responseObject['data'];
      log("_onSuccessItem", exeFileUploadResult.response);

      this.isFail = false;
      this._registerOnChange(data["picture"]);
      this._imageUrl = data["picture"];
    });

    // this.uploader.addToQueue(files, options, filters);
    console.log(files[0]);
    // if(!this.uploader.isHTML5) this.destroy();

    if (this.isEmptyAfterSelection()) {
      // todo
      this.inputFile.nativeElement.value = '';
      /*this.element.nativeElement
       .replaceWith(this.element = this.element.nativeElement.clone(true)); // IE fix*/
    }
  }
}
