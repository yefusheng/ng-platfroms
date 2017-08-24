"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TransFileService = (function () {
    function TransFileService(transFile) {
        this.transFile = transFile;
    }
    TransFileService.prototype.upload = function (fileUrl, url, options) {
        return this.transFile.upload(fileUrl, url, options);
    };
    TransFileService.prototype.chooseFile = function (options) {
        return this.transFile.chooseFile(options);
    };
    TransFileService.prototype.download = function (source, target, options) {
        throw new Error("Method not implemented.");
    };
    return TransFileService;
}());
TransFileService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
TransFileService.ctorParameters = function () { return [
    null,
]; };
exports.TransFileService = TransFileService;
