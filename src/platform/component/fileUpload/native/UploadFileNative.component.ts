import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActionSheetController, Platform} from "ionic-angular";
import {NativeService} from "../../../service/transfer/native/NativeService";
import {TransFileNative} from "../../../service/transfer/native/TransFileNative.service";
import {TransFileService} from "../../../service/transfer/TransFile.service";

@Component({
  selector: 'exe-upload-file-native',
  templateUrl: 'UploadFileNative.html',

})

export class exeUploadFileNativeComponent implements OnInit, OnChanges {


  @Input()
  avatarSrc: string;
  @Input()
  hasRound: boolean;
  @Input()
  serverUrl: string;

  @Input()
  imageUrl: string = "";

  // @Input() avatarSize?: number = 6.4;



  avatarPath: string;
  imageBase64: string;


  //是否启用头像上传功能
  enableUpload: boolean=true;
  constructor(
    private _platform: Platform,
    private nativeService: NativeService,
    public actionsheetCtrl: ActionSheetController,
    public fileService : TransFileService
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit() {

  }

  onSelect($event) {
    this.openMenu();
  }


  openMenu(){

    if(!this.enableUpload) return;

    this.actionsheetCtrl.create(
      {
        title: '选择照片',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: '拍照',
            icon: !this._platform.is('ios') ? 'camera' : null,
            handler: () => {

              this.getPicture(1);
            }
          },
          {
            text: '相册',
            icon: !this._platform.is('ios') ? 'albums' : null,
            handler: () => {

              this.getPicture(0);
            }
          }
        ]
      }).present();
  }

  getPicture(type) {//1拍照,0从图库选择
    let options = {

      targetWidth: 400,
      targetHeight: 400
    };
    if (type == 1) {

      this.nativeService
        .getPictureByCamera(options)
        .then(
          imageBase64 => {

            this.getPictureSuccess(imageBase64);
          }
        );
    }else{

      this.nativeService
        .getPictureByPhotoLibrary(options)
        .then(
          imageBase64 => {

            this.getPictureSuccess(imageBase64);
          }
        );
    }
  }

  private getPictureSuccess(imageBase64) {

    this.imageBase64 = <string>imageBase64;
    this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
    this.saveAvatar();
  }

  saveAvatar(){

    this.fileService
      .upload(this.avatarPath,"")
      .then(

        exeFileUploadResult =>{
          let response: any;
          let data: any;
          response = JSON.parse(exeFileUploadResult.response);
          if (response.code!=200){

            alert("error1"+exeFileUploadResult.response);
            return;
          }
          if( !('data' in response)){

            alert("error3"+response);
            return;
          }
          data=response.data;
        },
        (err) => {
          // error
          alert("error"+err.code+"--"+err.body);

        }
      );
  }


}
