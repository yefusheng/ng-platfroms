"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// todo: filters
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        console.log(files[0]);
        console.log(options);
        // if(!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
            // todo
            this.element.nativeElement.value = '';
            /*this.element.nativeElement
             .replaceWith(this.element = this.element.nativeElement.clone(true)); // IE fix*/
        }
    };
    return FileSelectDirective;
}());
FileSelectDirective.decorators = [
    { type: core_1.Directive, args: [{ selector: '[ng2FileSelect]' },] },
];
/** @nocollapse */
FileSelectDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
FileSelectDirective.propDecorators = {
    'uploader': [{ type: core_1.Input },],
    'onChange': [{ type: core_1.HostListener, args: ['change',] },],
};
exports.FileSelectDirective = FileSelectDirective;
