"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var util_1 = require("../../../util/util");
exports.IMAGE_UPLOAD_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return exeUploadFilePcComponent; }),
    multi: true
};
var exeUploadFilePcComponent = (function () {
    function exeUploadFilePcComponent(element, transFileService) {
        this.transFileService = transFileService;
        this._registerOnChange = function (value) {
        };
        this.element = element;
    }
    exeUploadFilePcComponent.prototype.ngOnChanges = function (changes) {
    };
    exeUploadFilePcComponent.prototype.ngOnInit = function () {
    };
    exeUploadFilePcComponent.prototype.writeValue = function (obj) {
        this._imageUrl = obj;
    };
    exeUploadFilePcComponent.prototype.registerOnTouched = function (fn) {
    };
    exeUploadFilePcComponent.prototype.setDisabledState = function (isDisabled) {
    };
    exeUploadFilePcComponent.prototype.registerOnChange = function (fn) {
        this._registerOnChange = fn;
    };
    exeUploadFilePcComponent.prototype.getFilters = function () {
        return void 0;
    };
    exeUploadFilePcComponent.prototype.isEmptyAfterSelection = function () {
        return !!this.inputFile.nativeElement.attributes.multiple;
    };
    exeUploadFilePcComponent.prototype.onChange = function () {
        var _this = this;
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.inputFile.nativeElement.files;
        util_1.log("files", files);
        this.transFileService.upload(files, this.serverUrl).then(function (exeFileUploadResult) {
            var responseObject = JSON.parse(exeFileUploadResult.response);
            if (!responseObject) {
                return;
            }
            var data = responseObject['data'];
            util_1.log("_onSuccessItem", exeFileUploadResult.response);
            _this.isFail = false;
            _this._registerOnChange(data["picture"]);
            _this._imageUrl = data["picture"];
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
    };
    return exeUploadFilePcComponent;
}());
__decorate([
    core_1.Input()
], exeUploadFilePcComponent.prototype, "avatarSrc", void 0);
__decorate([
    core_1.Input()
], exeUploadFilePcComponent.prototype, "hasRound", void 0);
__decorate([
    core_1.Input()
], exeUploadFilePcComponent.prototype, "serverUrl", void 0);
__decorate([
    core_1.ViewChild('inputFile')
], exeUploadFilePcComponent.prototype, "inputFile", void 0);
__decorate([
    core_1.HostListener('change')
], exeUploadFilePcComponent.prototype, "onChange", null);
exeUploadFilePcComponent = __decorate([
    core_1.Component({
        selector: 'exe-upload-file-pc',
        templateUrl: 'UploadFilePc.html',
        providers: [exports.IMAGE_UPLOAD_VALUE_ACCESSOR],
    })
], exeUploadFilePcComponent);
exports.exeUploadFilePcComponent = exeUploadFilePcComponent;
