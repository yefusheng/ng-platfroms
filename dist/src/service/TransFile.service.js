import { Injectable } from "@angular/core";
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
export { TransFileService };
TransFileService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TransFileService.ctorParameters = function () { return [
    null,
]; };
//# sourceMappingURL=TransFile.service.js.map