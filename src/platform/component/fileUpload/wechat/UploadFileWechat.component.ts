import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Platform} from "ionic-angular";
import {TransFileService} from "../../../service/transfer/TransFile.service";

@Component({
  selector: 'exe-upload-file-native',
  templateUrl: 'UploadFileWechat.html',

})

export class exeUploadFileWechatComponent implements OnInit, OnChanges {


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
    private transFileService:TransFileService
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
   this.transFileService.chooseFile().then(
     (result)=>{

     }

   ).catch(
     (err) => {
       // error
       alert("error"+err.code+"--"+err.body);

     }
   );

  }

  getPicture(type) {//1拍照,0从图库选择

  }

  private getPictureSuccess(imageBase64) {

    this.imageBase64 = <string>imageBase64;
    this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
    this.saveAvatar();
  }

  saveAvatar(){


  }


}
