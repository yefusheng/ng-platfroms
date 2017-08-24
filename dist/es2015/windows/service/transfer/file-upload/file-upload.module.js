import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileDropDirective } from './file-drop.directive';
import { FileSelectDirective } from './file-select.directive';
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
export { FileUploadModule };
FileUploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            },] },
];
/** @nocollapse */
FileUploadModule.ctorParameters = function () { return []; };
