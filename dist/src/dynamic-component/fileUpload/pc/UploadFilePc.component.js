import { Component, ElementRef, forwardRef, HostListener, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { TransFileService } from "../../../service/TransFile.service";
import { log } from "../../../util/util";
export var IMAGE_UPLOAD_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return exeUploadFilePcComponent; }),
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
        log("files", files);
        this.transFileService.upload(files, this.serverUrl).then(function (exeFileUploadResult) {
            var responseObject = JSON.parse(exeFileUploadResult.response);
            if (!responseObject) {
                return;
            }
            var data = responseObject['data'];
            log("_onSuccessItem", exeFileUploadResult.response);
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
export { exeUploadFilePcComponent };
exeUploadFilePcComponent.decorators = [
    { type: Component, args: [{
                selector: 'exe-upload-file-pc',
                templateUrl: 'UploadFilePc.html',
                providers: [IMAGE_UPLOAD_VALUE_ACCESSOR],
            },] },
];
/** @nocollapse */
exeUploadFilePcComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: TransFileService, },
]; };
exeUploadFilePcComponent.propDecorators = {
    'avatarSrc': [{ type: Input },],
    'hasRound': [{ type: Input },],
    'serverUrl': [{ type: Input },],
    'inputFile': [{ type: ViewChild, args: ['inputFile',] },],
    'onChange': [{ type: HostListener, args: ['change',] },],
};
//# sourceMappingURL=UploadFilePc.component.js.map