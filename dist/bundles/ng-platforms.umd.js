(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ionic-native/transfer'), require('rxjs'), require('@ionic-native/file-opener'), require('@ionic-native/in-app-browser'), require('@ionic-native/image-picker'), require('@ionic-native/network'), require('@ionic-native/call-number'), require('ionic-angular'), require('@ionic-native/app-version'), require('@ionic-native/camera'), require('rxjs/Observable'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@ionic-native/transfer', 'rxjs', '@ionic-native/file-opener', '@ionic-native/in-app-browser', '@ionic-native/image-picker', '@ionic-native/network', '@ionic-native/call-number', 'ionic-angular', '@ionic-native/app-version', '@ionic-native/camera', 'rxjs/Observable', '@angular/forms'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.platfroms = {}),global.ng.core,global._angular_common,global._ionicNative_transfer,global.rxjs,global._ionicNative_fileOpener,global._ionicNative_inAppBrowser,global._ionicNative_imagePicker,global._ionicNative_network,global._ionicNative_callNumber,global.ionicAngular,global._ionicNative_appVersion,global._ionicNative_camera,global.Rx,global._angular_forms));
}(this, (function (exports,_angular_core,_angular_common,_ionicNative_transfer,rxjs,_ionicNative_fileOpener,_ionicNative_inAppBrowser,_ionicNative_imagePicker,_ionicNative_network,_ionicNative_callNumber,ionicAngular,_ionicNative_appVersion,_ionicNative_camera,rxjs_Observable,_angular_forms) { 'use strict';

/**
 * Created by yefs on 2017/7/11.
 *
 * 平台基类
 */
var BasePlatform = (function () {
    function BasePlatform() {
    }
    return BasePlatform;
}());

var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new _angular_core.EventEmitter();
        this.onFileDrop = new _angular_core.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
/*
 _addOverClass(item:any):any {
 item.addOverClass();
 }

 _removeOverClass(item:any):any {
 item.removeOverClass();
 }*/
FileDropDirective.decorators = [
    { type: _angular_core.Directive, args: [{ selector: '[ng2FileDrop]' },] },
];
/** @nocollapse */
FileDropDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };
FileDropDirective.propDecorators = {
    'uploader': [{ type: _angular_core.Input },],
    'fileOver': [{ type: _angular_core.Output },],
    'onFileDrop': [{ type: _angular_core.Output },],
    'onDrop': [{ type: _angular_core.HostListener, args: ['drop', ['$event'],] },],
    'onDragOver': [{ type: _angular_core.HostListener, args: ['dragover', ['$event'],] },],
    'onDragLeave': [{ type: _angular_core.HostListener, args: ['dragleave', ['$event'],] },],
};

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
    { type: _angular_core.Directive, args: [{ selector: '[ng2FileSelect]' },] },
];
/** @nocollapse */
FileSelectDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };
FileSelectDirective.propDecorators = {
    'uploader': [{ type: _angular_core.Input },],
    'onChange': [{ type: _angular_core.HostListener, args: ['change',] },],
};

var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            },] },
];
/** @nocollapse */
FileUploadModule.ctorParameters = function () { return []; };

var StorageService = (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.saveObject = function (key, value) {
        this.storage.saveObject(key, value);
    };
    StorageService.prototype.getObject = function (key, defaule) {
        return this.storage.getObject(key, defaule);
    };
    return StorageService;
}());
StorageService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
StorageService.ctorParameters = function () { return [
    null,
]; };

function stringify(arg) {
    if (typeof arg === "string")
        return arg;
    return JSON.stringify(arg);
}
function log(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    console.log(message, optionalParams);
}

/**
 * @private
 * Given a min and max, restrict the given number
 * to the range.
 * @param min the minimum
 * @param n the value
 * @param max the maximum
 */

/** @private */

/** @private */

/**
 * @private
 * Apply default arguments if they don't exist in
 * the first object.
 * @param the destination to apply defaults to.
 */

/** @private */

/** @private */

/** @private */

/** @private */

/** @private */

/** @private */

/** @private */

/** @private */

/** @private */

/** @private */


/** @private */


/** @private */


/** @private */


/** @private */

/** @private */

/** @private */

/**
 * Created by yefs on 2017/7/11.
 *  pc存储
 *
 */
var StorageWindows = (function () {
    function StorageWindows() {
    }
    StorageWindows.prototype.saveObject = function (key, value) {
        window.sessionStorage.setItem(key, stringify(value));
    };
    StorageWindows.prototype.getObject = function (key, defaule) {
        var value = window.sessionStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
        }
        else {
            value = defaule;
        }
        return value;
    };
    return StorageWindows;
}());
StorageWindows.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
StorageWindows.ctorParameters = function () { return []; };

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        // this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());

var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];

function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
        this.setOptions(options);
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = options.authToken;
        this.authTokenHeader = options.authTokenHeader || 'Authorization';
        this.autoUpload = options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
        /*forEach(this._directives, (key) => {
         forEach(this._directives[key], (object) => {
         object.destroy();
         });
         });*/
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        // todo
        /*item.formData.map(obj => {
         obj.map((value, key) => {
         form.append(key, value);
         });
         });*/
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            sendable.append(item.alias, item._file, item.file.name);
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    sendable.append(key, _this.options.additionalParameter[key]);
                });
            }
        }
        else {
            sendable = item._file;
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.send(sendable);
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
        // todo: ?
    };
    // protected _folderFilter(item:FileItem):boolean {
    //   return !!(item.size || item.type);
    // }
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /* tslint:disable */
    FileUploader.prototype._transformResponse = function (response, headers) {
        // todo: ?
        /*var headersGetter = this._headersGetter(headers);
         forEach($http.defaults.transformResponse, (transformFn) => {
         response = transformFn(response, headersGetter);
         });*/
        return response;
    };
    /* tslint:enable */
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    /*protected _iframeTransport(item:FileItem) {
     // todo: implement it later
     }*/
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /* tslint:disable */
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /* tslint:enable */
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());

var AuthService = (function () {
    function AuthService() {
        this.token = "";
    }
    AuthService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    return AuthService;
}());

/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var TransFilePc = (function () {
    function TransFilePc(authService) {
        this.authService = authService;
        this.headersList = new Array();
    }
    TransFilePc.prototype.upload = function (fileUrl, serveUrl, options) {
        var _this = this;
        this.fileUploaderOptions = {
            url: serveUrl,
            authTokenHeader: this.authService.getToken(),
            autoUpload: true
        };
        // let header: Headers = {
        //   name: "token",
        //   value: this.authService.getToken()
        // };
        // this.headersList.push(header);
        // this.fileUploaderOptions.headers = this.headersList;
        if (!this.uploader) {
            this.uploader = new FileUploader(this.fileUploaderOptions);
        }
        this.uploader.setOptions(this.fileUploaderOptions);
        log("initFileUploader token", this.authService.getToken());
        var file = fileUrl;
        return new Promise(function (resolve, reject) {
            _this.uploader.onSuccessItem = function (item, response, status, headers) {
                if (!response) {
                    return;
                }
                resolve({ response: response ? response : "" });
            };
            _this.uploader.onErrorItem = function (item, response, status, headers) {
                if (!response) {
                    return;
                }
                reject({ response: response ? response : "" });
            };
            _this.uploader.addToQueue(file, _this.fileUploaderOptions);
            _this.uploader.uploadAll();
        });
    };
    TransFilePc.prototype.chooseFile = function (options) {
        throw new Error("Method not implemented.");
    };
    TransFilePc.prototype.download = function (source, target, options) {
        throw new Error("Method not implemented.");
    };
    return TransFilePc;
}());
TransFilePc.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
TransFilePc.ctorParameters = function () { return [
    { type: AuthService, },
]; };

var LoggerPcService = (function () {
    function LoggerPcService() {
    }
    LoggerPcService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(message, optionalParams);
    };
    LoggerPcService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.error(message, optionalParams);
    };
    return LoggerPcService;
}());
LoggerPcService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
LoggerPcService.ctorParameters = function () { return []; };

var LoggerService = (function () {
    function LoggerService(enable, logger) {
        this.enable = enable;
        this.logger = logger;
    }
    LoggerService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (!this.enable) {
            return;
        }
        this.logger.log(message, optionalParams);
    };
    LoggerService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.logger.error(message, optionalParams);
    };
    return LoggerService;
}());
LoggerService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
LoggerService.ctorParameters = function () { return [
    null,
    null,
]; };

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
    { type: _angular_core.Injectable },
];
/** @nocollapse */
TransFileService.ctorParameters = function () { return [
    null,
]; };

var windowsPlatformProvides = [
    { provide: StorageService, useClass: StorageWindows },
    { provide: TransFileService, useClass: TransFilePc },
    { provide: LoggerService, useClass: LoggerPcService }
];
var WindowsPlatformModule = (function () {
    function WindowsPlatformModule() {
    }
    return WindowsPlatformModule;
}());
WindowsPlatformModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    FileUploadModule
                ],
                exports: [FileUploadModule],
                providers: [
                    windowsPlatformProvides
                ]
            },] },
];
/** @nocollapse */
WindowsPlatformModule.ctorParameters = function () { return []; };

/**
 * Created by yefs on 2017/7/11.
 *  原生存储
 *
 */
var StorageNative = (function () {
    function StorageNative() {
    }
    StorageNative.prototype.saveObject = function (key, value) {
        localStorage.setItem(key, stringify(value));
    };
    StorageNative.prototype.getObject = function (key, defaule) {
        var value = localStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
        }
        else {
            value = defaule;
        }
        return value;
    };
    return StorageNative;
}());
StorageNative.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
StorageNative.ctorParameters = function () { return []; };

var LoggerNativeService = (function () {
    function LoggerNativeService() {
    }
    LoggerNativeService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(message, optionalParams);
    };
    LoggerNativeService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    return LoggerNativeService;
}());
LoggerNativeService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
LoggerNativeService.ctorParameters = function () { return []; };

/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var TransFileNative = (function () {
    function TransFileNative() {
        this.fileTransfer = new _ionicNative_transfer.Transfer().create();
    }
    /**
     * app上传图片
     */
    TransFileNative.prototype.uploadPicture = function (path, url) {
        return this.upload(path, url);
    };
    TransFileNative.prototype.upload = function (path, url) {
        var options = {
            fileKey: 'file',
            fileName: path.substr(path.lastIndexOf('/') + 1)
        };
        var observable = rxjs.Observable.fromPromise(this.fileTransfer.upload(path, url, options)).map(function (result) {
            var exeFileUploadResult = null;
            exeFileUploadResult.response = result.response;
            log("exeFileUploadResult" + result);
            return exeFileUploadResult;
        });
        return observable.toPromise();
    };
    TransFileNative.prototype.chooseFile = function (options) {
        throw new Error("Method not implemented.");
    };
    TransFileNative.prototype.download = function (source, target, options) {
        throw new Error("Method not implemented.");
    };
    return TransFileNative;
}());
TransFileNative.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
TransFileNative.ctorParameters = function () { return []; };

/**
 * Created by yefs.
 * 原生插件,工具类
 */
var NativeService = (function () {
    function NativeService(platform, 
        // private toastCtrl: ToastController,
        alertCtrl, appVersion, camera, 
        // private toast: Toast,
        transfer, 
        // private file: File,
        fileOpener, inAppBrowser, imagePicker, network, callNumber, loadingCtrl) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.appVersion = appVersion;
        this.camera = camera;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.inAppBrowser = inAppBrowser;
        this.imagePicker = imagePicker;
        this.network = network;
        this.callNumber = callNumber;
        this.loadingCtrl = loadingCtrl;
        this.loadingIsOpen = false;
    }
    NativeService.prototype.warn = function (info) {
        console.log('%cNativeService/' + info, 'color:#e8c406');
    };
    /**
     * 通过浏览器下载app
     */
    NativeService.prototype.openUrlByBrowser = function (url) {
        this.inAppBrowser.create(url, '_system');
    };
    NativeService.prototype.downloadApk = function () {
        // let alert = this.alertCtrl.create({
        //   title: '下载进度：0%',
        //   enableBackdropDismiss: false,
        //   buttons: ['后台下载']
        // });
        // alert.present();
        //
        // const fileTransfer: TransferObject = this.transfer.create();
        // const apk = this.file.externalRootDirectory + 'android.apk';//保存的目录
        // fileTransfer.download('app下载地址', apk).then(entry => {
        //   //.apk MIME类型：application/vnd.android.package-archive
        //   //.ipa MIME类型：application/octet-stream.ipa
        //   this.fileOpener.open(apk, 'application/vnd.android.package-archive').then(res => {
        //     console.log('apk打开成功准备安装 ' + res);
        //   }, () => {
        //     this.alertCtrl.create({
        //       title: '失败!',
        //       subTitle: '安装包下载完成,打开失败!',
        //       buttons: ['确定']
        //     }).present();
        //   });
        // }, () => {
        //   this.alertCtrl.create({
        //     title: '失败!',
        //     subTitle: '下载安装包失败,请稍后再试!',
        //     buttons: ['确定']
        //   }).present();
        // });
        //
        // fileTransfer.onProgress((event: ProgressEvent) => {
        //   let num = Math.floor(event.loaded / event.total * 100);
        //   if (num === 100) {
        //     alert.dismiss();
        //   } else {
        //     let title = document.getElementsByClassName('alert-title')[0];
        //     title && (title.innerHTML = '下载进度：' + num + '%');
        //   }
        // });
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    // showToast(message: string = '操作完成', duration: number = 2000): void {
    //   if (this.isMobile()) {
    //     this.toast.show(message, String(duration), 'center').subscribe();
    //   } else {
    //     this.toastCtrl.create({
    //       message: message,
    //       duration: duration,
    //       position: 'middle',
    //       showCloseButton: false
    //     }).present();
    //   }
    // };
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(function () {
                _this.loadingIsOpen && _this.loading.dismiss();
                _this.loadingIsOpen = false;
            }, 10000);
        }
    };
    
    /**
     * 关闭loading
     */
    NativeService.prototype.hideLoading = function () {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };
    
    /**
     * 使用cordova-plugin-camera获取照片
     * @param options
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 800,
            targetHeight: 800,
            saveToPhotoAlbum: true,
            correctOrientation: true //设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return new Promise(function (resolve) {
            _this.camera.getPicture(ops).then(function (imgData) {
                resolve(imgData);
            }, function (err) {
                // err == 20 && this.showToast('没有权限,请在设置中开启权限');
                _this.warn('getPicture:' + err);
            });
        });
    };
    
    /**
     * 通过拍照获取照片
     * @param options
     * @return {Promise<string>}
     */
    NativeService.prototype.getPictureByCamera = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve) {
            _this.getPicture(Object.assign({
                sourceType: _this.camera.PictureSourceType.CAMERA
            }, options)).then(function (imgData) {
                resolve(imgData);
            }).catch(function (err) {
                // String(err).indexOf('cancel') != -1 ? this.showToast('取消拍照', 1500) : this.showToast('获取照片失败');
            });
        });
    };
    
    /**
     * 通过图库获取照片
     * @param options
     * @return {Promise<string>}
     */
    NativeService.prototype.getPictureByPhotoLibrary = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve) {
            _this.getPicture(Object.assign({
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY
            }, options)).then(function (imgData) {
                resolve(imgData);
            }).catch(function (err) {
                // String(err).indexOf('cancel') != -1 ? this.showToast('取消选择图片', 1500) : this.showToast('获取照片失败');
            });
        });
    };
    
    /**
     * 通过图库选择多图
     * @param options
     * @return {Promise<T>}
     */
    NativeService.prototype.getMultiplePicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var that = this;
        var destinationType = options['destinationType'] || 0; //0:base64字符串,1:图片url
        return new Promise(function (resolve) {
            _this.imagePicker.getPictures(Object.assign({
                maximumImagesCount: 6,
                width: 800,
                height: 800,
                quality: 100 //图像质量，范围为0 - 100
            }, options)).then(function (files) {
                if (destinationType === 1) {
                    resolve(files);
                }
                else {
                    var imgBase64s_1 = []; //base64字符串数组
                    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                        var fileUrl = files_1[_i];
                        that.convertImgToBase64(fileUrl, function (base64) {
                            imgBase64s_1.push(base64);
                            if (imgBase64s_1.length === files.length) {
                                resolve(imgBase64s_1);
                            }
                        }, null);
                    }
                }
            }).catch(function (err) {
                _this.warn('getMultiplePicture:' + err);
                // this.showToast('获取照片失败');
            });
        });
    };
    
    /**
     * 根据图片绝对路径转化为base64字符串
     * @param url 绝对路径
     * @param callback 回调函数
     * @param outputFormat 转换格式,默认为image/png
     */
    NativeService.prototype.convertImgToBase64 = function (url, callback, outputFormat) {
        if (outputFormat === void 0) { outputFormat = 'image/png'; }
        var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), img = new Image;
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            var imgBase64 = canvas.toDataURL(outputFormat); //返回如'data:image/jpeg;base64,abcdsddsdfsdfasdsdfsdf'
            var base64 = imgBase64.substring(imgBase64.indexOf(';base64,') + 8); //返回如'abcdsddsdfsdfasdsdfsdf'
            callback.call(this, base64);
            canvas = null;
        };
        img.src = url;
    };
    /**
     * 获得用户当前坐标
     * @return {Promise<Position>}
     */
    NativeService.prototype.getUserLocation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.isMobile()) {
                LocationPlugin.getLocation(function (data) {
                    resolve({ 'lng': data.longitude, 'lat': data.latitude });
                }, function (msg) {
                    alert(msg.indexOf('缺少定位权限') == -1 ? ('错误消息：' + msg) : '缺少定位权限，请在手机设置中开启');
                    _this.warn('getUserLocation:' + msg);
                });
            }
            else {
                _this.warn('getUserLocation:非手机环境,即测试环境返回固定坐标');
                resolve({ 'lng': 113.350912, 'lat': 23.119495 });
            }
        });
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getVersionNumber:' + err);
            });
        });
    };
    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getAppName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getAppName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getAppName:' + err);
            });
        });
    };
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPackageName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getPackageName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getPackageName:' + err);
            });
        });
    };
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    NativeService.prototype.call = function (numberToCall) {
        this.callNumber
            .callNumber(numberToCall, true)
            .then(function () { })
            .catch(function () { });
    };
    NativeService.prototype.sendSms = function (numberToCall) {
        this.callNumber
            .callNumber(numberToCall, true)
            .then(function () { })
            .catch(function () { });
    };
    return NativeService;
}());
NativeService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
NativeService.ctorParameters = function () { return [
    { type: ionicAngular.Platform, },
    { type: ionicAngular.AlertController, },
    { type: _ionicNative_appVersion.AppVersion, },
    { type: _ionicNative_camera.Camera, },
    { type: _ionicNative_transfer.Transfer, },
    { type: _ionicNative_fileOpener.FileOpener, },
    { type: _ionicNative_inAppBrowser.InAppBrowser, },
    { type: _ionicNative_imagePicker.ImagePicker, },
    { type: _ionicNative_network.Network, },
    { type: _ionicNative_callNumber.CallNumber, },
    { type: ionicAngular.LoadingController, },
]; };

var NativePlatformProvides = [
    { provide: StorageService, useClass: StorageNative },
    { provide: TransFileService, useClass: TransFileNative },
    { provide: LoggerService, useClass: LoggerNativeService }
];
var NativePlatformModule = (function () {
    function NativePlatformModule() {
    }
    return NativePlatformModule;
}());
NativePlatformModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                providers: [
                    NativePlatformProvides,
                    TransFileNative,
                    _ionicNative_appVersion.AppVersion,
                    _ionicNative_fileOpener.FileOpener,
                    _ionicNative_transfer.Transfer,
                    _ionicNative_inAppBrowser.InAppBrowser,
                    _ionicNative_imagePicker.ImagePicker,
                    _ionicNative_network.Network,
                    _ionicNative_callNumber.CallNumber,
                    NativeService,
                    _ionicNative_camera.Camera,
                ]
            },] },
];
/** @nocollapse */
NativePlatformModule.ctorParameters = function () { return []; };

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by yefs on 2017/7/11.
 *
 * 微信平台
 */
var WechatPlatform = (function (_super) {
    __extends$1(WechatPlatform, _super);
    function WechatPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WechatPlatform.prototype.initPlatform = function () {
        // this.wechat = (<any>window).Wechat;
        this.wx = window.wx;
        var tenantId = "exe";
        var option = this._getWxOption(tenantId);
        this._wxInit(option);
    };
    WechatPlatform.prototype.getPlatformContext = function () {
        return this.wx;
    };
    WechatPlatform.prototype.getPlatformName = function () {
        return wechat;
    };
    WechatPlatform.prototype.getPlatformCode = function () {
        return Platforms.wechat;
    };
    WechatPlatform.prototype._getWxOption = function (tenantId) {
        var option = {
            jsApiList: ['checkJsApi', 'scanQRCode', 'getLocation', 'getLocation', 'chooseImage', 'uploadImage', 'downloadImage'],
            configUrl: this._getWxConfigUrl(tenantId)
        };
        return option;
    };
    WechatPlatform.prototype._getWxConfigUrl = function (tenantId) {
        return "http://weixin.exexm.com/auth/" + tenantId + "/config";
    };
    WechatPlatform.prototype._wxInit = function (option) {
        var _this = this;
        if (!(option || option.jsApiList.length > 0)) {
            //Toast("初始化配置错误");
        }
        var configUrl = option.configUrl;
        var jsApiList = option.jsApiList;
        if (typeof this.wx !== "undefined") {
            var wxReq = rxjs_Observable.Observable.ajax({
                url: configUrl,
                body: {
                    url: location.href.split('#')[0]
                },
                method: 'post',
                crossDomain: true,
            });
        }
        wxReq.subscribe(function (AjaxResponse) {
            var res = AjaxResponse.response;
            console.log(AjaxResponse);
            if (!res)
                return;
            if (res.success) {
                _this.wx.config({
                    debug: (option && option.debug) || true,
                    appId: res.result && res.result.appId,
                    timestamp: res.result && res.result.timestamp,
                    nonceStr: res.result && res.result.nonceStr,
                    signature: res.result && res.result.signature,
                    jsApiList: jsApiList
                });
            }
            _this.wx.chooseImage({ count: 1 });
        });
    };
    return WechatPlatform;
}(BasePlatform));
WechatPlatform.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
WechatPlatform.ctorParameters = function () { return []; };

/**
 * Created by yefs on 2017/7/11.
 *  wechat存储
 *
 */
var StorageWeChat = (function () {
    function StorageWeChat(wechatPlatform) {
        this.wechatPlatform = wechatPlatform;
    }
    StorageWeChat.prototype.saveObject = function (key, value) {
        try {
            this.wechatPlatform.getPlatformContext().setStorageSync(key, value);
        }
        catch (e) {
        }
    };
    StorageWeChat.prototype.getObject = function (key, defaule) {
        try {
            this.wechatPlatform.getPlatformContext().getStorageSync(key, defaule);
        }
        catch (e) {
        }
    };
    return StorageWeChat;
}());
StorageWeChat.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
StorageWeChat.ctorParameters = function () { return [
    { type: WechatPlatform, },
]; };

/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var TransFileWechat = (function () {
    function TransFileWechat(wechatPlatform) {
        this.wechatPlatform = wechatPlatform;
    }
    TransFileWechat.prototype.upload = function (fileUrl, url, options) {
        return new Promise(function (resolve, reject) {
            this.wechatPlatform.getPlatformContext().uploadImage({
                localId: fileUrl,
                isShowProcess: 1,
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
    };
    TransFileWechat.prototype.chooseFile = function (options) {
        return new Promise(function (resolve, reject) {
            this.wechatPlatform.getPlatformContext().chooseImage({
                count: 1,
                // sizeType: sizeType,      // 可以指定是原图还是压缩图，默认二者都有
                // sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
    };
    TransFileWechat.prototype.download = function (source, target, options) {
        throw new Error("Method not implemented.");
    };
    return TransFileWechat;
}());
TransFileWechat.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
TransFileWechat.ctorParameters = function () { return [
    { type: WechatPlatform, },
]; };

var WechatPlatformProvides = [
    { provide: StorageService, useClass: StorageWeChat },
    { provide: TransFileService, useClass: TransFileWechat },
    { provide: LoggerService, useClass: LoggerPcService }
];
var WechatPlatformModule = (function () {
    function WechatPlatformModule() {
    }
    return WechatPlatformModule;
}());
WechatPlatformModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                providers: [
                    WechatPlatform,
                    WechatPlatformProvides
                ]
            },] },
];
/** @nocollapse */
WechatPlatformModule.ctorParameters = function () { return []; };

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by yefs on 2017/7/11.
 *
 * pc平台上下文
 */
var WindowsPlatform = (function (_super) {
    __extends$2(WindowsPlatform, _super);
    function WindowsPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsPlatform.prototype.initPlatform = function () {
        this.window = window;
    };
    WindowsPlatform.prototype.getPlatformContext = function () {
        return this.window;
    };
    WindowsPlatform.prototype.getPlatformName = function () {
        return windows;
    };
    WindowsPlatform.prototype.getPlatformCode = function () {
        return Platforms.windows;
    };
    return WindowsPlatform;
}(BasePlatform));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by yefs on 2017/7/11.
 *
 * 原生平台
 */
var NativePlatform = (function (_super) {
    __extends$3(NativePlatform, _super);
    function NativePlatform(platform) {
        var _this = _super.call(this) || this;
        _this.platform = platform;
        return _this;
    }
    NativePlatform.prototype.initPlatform = function () {
    };
    NativePlatform.prototype.getPlatformContext = function () {
        return this.platform;
    };
    NativePlatform.prototype.getPlatformName = function () {
        return mobile;
    };
    NativePlatform.prototype.getPlatformCode = function () {
        return Platforms.mobile;
    };
    return NativePlatform;
}(BasePlatform));

/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var PlatformStragety = (function () {
    function PlatformStragety() {
        this.initPlatform();
    }
    PlatformStragety.prototype.initPlatform = function () {
        switch (this.getPlatformCode()) {
            case Platforms.windows:
                this.platform = new WindowsPlatform();
                break;
            case Platforms.wechat:
                this.platform = new WechatPlatform();
                break;
            case Platforms.mobile:
                this.platform = new NativePlatform(new ionicAngular.Platform());
                break;
            default:
                this.platform = new NativePlatform(new ionicAngular.Platform());
                break;
        }
    };
    PlatformStragety.prototype.getPlatformContext = function () {
        return this.platform.getPlatformContext();
    };
    PlatformStragety.prototype.getPlatformName = function () {
        return this.platform.getPlatformName();
    };
    PlatformStragety.prototype.getStragety = function () {
        this._userAgent = navigator.userAgent.toLowerCase();
        if (this.isWechat()) {
            return WechatPlatformModule;
        }
        else if (this.isNative()) {
            return NativePlatformModule;
        }
        else if (this.isWindow()) {
            return WindowsPlatformModule;
        }
        return WindowsPlatformModule;
    };
    PlatformStragety.prototype.getPlatformCode = function () {
        this._userAgent = navigator.userAgent.toLowerCase();
        if (this.isWechat()) {
            return Platforms.wechat;
        }
        else if (this.isNative()) {
            return Platforms.mobile;
        }
        else if (this.isWindow()) {
            return Platforms.windows;
        }
        return Platforms.windows;
        
    };
    PlatformStragety.prototype.isNative = function () {
        var Agents = ["android", "iphone",
            "ipad", "ipod"];
        for (var v = 0; v < Agents.length; v++) {
            if (this.isPlatform(Agents[v])) {
                return true;
            }
        }
        return false;
    };
    PlatformStragety.prototype.isWindow = function () {
        return this.isPlatform("windows");
    };
    PlatformStragety.prototype.isWechat = function () {
        return this.isPlatform("micromessenger");
    };
    PlatformStragety.prototype.isPlatform = function (platformName) {
        // return this.plt.is(platformName);
        return this._userAgent.indexOf(platformName) > -1 ? true : false;
    };
    return PlatformStragety;
}());
PlatformStragety.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
PlatformStragety.ctorParameters = function () { return []; };

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by yefs on 2017/7/12.
 * 常量
 *    * | Platform Name   | Description                        |
 * |-----------------|------------------------------------|
 * | android         | on a device running Android.       |
 * | cordova         | on a device running Cordova.       |
 * | core            | on a desktop device.               |
 * | ios             | on a device running iOS.           |
 * | ipad            | on an iPad device.                 |
 * | iphone          | on an iPhone device.               |
 * | mobile          | on a mobile device.                |
 * | mobileweb       | in a browser on a mobile device.   |
 * | phablet         | on a phablet device.               |
 * | tablet          | on a tablet device.                |
 * | windows         | on a device running Windows.       |
 *
 * 跨平台管理
 */
var windows = "windows";
var mobile = "mobile";
var wechat = "wechat";
var Platforms;
(function (Platforms) {
    Platforms[Platforms["mobile"] = 0] = "mobile";
    Platforms[Platforms["windows"] = 1] = "windows";
    Platforms[Platforms["wechat"] = 2] = "wechat";
})(Platforms || (Platforms = {}));

var ExePlatformService = (function (_super) {
    __extends(ExePlatformService, _super);
    function ExePlatformService() {
        var _this = _super.call(this) || this;
        _this.platform = new PlatformStragety();
        return _this;
    }
    ExePlatformService.prototype.initPlatform = function () {
    };
    ExePlatformService.prototype.getPlatformCode = function () {
        return this.platform.getPlatformCode();
    };
    ExePlatformService.prototype.getPlatformContext = function () {
        return this.platform.getPlatformContext();
    };
    ExePlatformService.prototype.getPlatformName = function () {
        return this.platform.getPlatformName();
    };
    return ExePlatformService;
}(BasePlatform));
ExePlatformService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
ExePlatformService.ctorParameters = function () { return []; };

var compoentItem = (function () {
    function compoentItem(component, data) {
        this.component = component;
        this.data = data;
    }
    return compoentItem;
}());

var exeUploadFileWechatComponent = (function () {
    function exeUploadFileWechatComponent(_platform, transFileService) {
        this._platform = _platform;
        this.transFileService = transFileService;
        this.imageUrl = "";
        //是否启用头像上传功能
        this.enableUpload = true;
    }
    exeUploadFileWechatComponent.prototype.ngOnChanges = function (changes) {
    };
    exeUploadFileWechatComponent.prototype.ngOnInit = function () {
    };
    exeUploadFileWechatComponent.prototype.onSelect = function ($event) {
        this.openMenu();
    };
    exeUploadFileWechatComponent.prototype.openMenu = function () {
        this.transFileService.chooseFile().then(function (result) {
        }).catch(function (err) {
            // error
            alert("error" + err.code + "--" + err.body);
        });
    };
    exeUploadFileWechatComponent.prototype.getPicture = function (type) {
    };
    exeUploadFileWechatComponent.prototype.getPictureSuccess = function (imageBase64) {
        this.imageBase64 = imageBase64;
        this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
        this.saveAvatar();
    };
    exeUploadFileWechatComponent.prototype.saveAvatar = function () {
    };
    return exeUploadFileWechatComponent;
}());
exeUploadFileWechatComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'exe-upload-file-native',
                templateUrl: 'UploadFileWechat.html',
            },] },
];
/** @nocollapse */
exeUploadFileWechatComponent.ctorParameters = function () { return [
    { type: ionicAngular.Platform, },
    { type: TransFileService, },
]; };
exeUploadFileWechatComponent.propDecorators = {
    'avatarSrc': [{ type: _angular_core.Input },],
    'hasRound': [{ type: _angular_core.Input },],
    'serverUrl': [{ type: _angular_core.Input },],
    'imageUrl': [{ type: _angular_core.Input },],
};

var exeUploadFileNativeComponent = (function () {
    function exeUploadFileNativeComponent(_platform, nativeService, actionsheetCtrl, fileService) {
        this._platform = _platform;
        this.nativeService = nativeService;
        this.actionsheetCtrl = actionsheetCtrl;
        this.fileService = fileService;
        this.imageUrl = "";
        //是否启用头像上传功能
        this.enableUpload = true;
    }
    exeUploadFileNativeComponent.prototype.ngOnChanges = function (changes) {
    };
    exeUploadFileNativeComponent.prototype.ngOnInit = function () {
    };
    exeUploadFileNativeComponent.prototype.onSelect = function ($event) {
        this.openMenu();
    };
    exeUploadFileNativeComponent.prototype.openMenu = function () {
        var _this = this;
        if (!this.enableUpload)
            return;
        this.actionsheetCtrl.create({
            title: '选择照片',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '拍照',
                    icon: !this._platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.getPicture(1);
                    }
                },
                {
                    text: '相册',
                    icon: !this._platform.is('ios') ? 'albums' : null,
                    handler: function () {
                        _this.getPicture(0);
                    }
                }
            ]
        }).present();
    };
    exeUploadFileNativeComponent.prototype.getPicture = function (type) {
        var _this = this;
        var options = {
            targetWidth: 400,
            targetHeight: 400
        };
        if (type == 1) {
            this.nativeService
                .getPictureByCamera(options)
                .then(function (imageBase64) {
                _this.getPictureSuccess(imageBase64);
            });
        }
        else {
            this.nativeService
                .getPictureByPhotoLibrary(options)
                .then(function (imageBase64) {
                _this.getPictureSuccess(imageBase64);
            });
        }
    };
    exeUploadFileNativeComponent.prototype.getPictureSuccess = function (imageBase64) {
        this.imageBase64 = imageBase64;
        this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
        this.saveAvatar();
    };
    exeUploadFileNativeComponent.prototype.saveAvatar = function () {
        this.fileService
            .upload(this.avatarPath, "")
            .then(function (exeFileUploadResult) {
            var response;
            var data;
            response = JSON.parse(exeFileUploadResult.response);
            if (response.code != 200) {
                alert("error1" + exeFileUploadResult.response);
                return;
            }
            if (!('data' in response)) {
                alert("error3" + response);
                return;
            }
            data = response.data;
        }, function (err) {
            // error
            alert("error" + err.code + "--" + err.body);
        });
    };
    return exeUploadFileNativeComponent;
}());
exeUploadFileNativeComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'exe-upload-file-native',
                templateUrl: 'UploadFileNative.html',
            },] },
];
/** @nocollapse */
exeUploadFileNativeComponent.ctorParameters = function () { return [
    { type: ionicAngular.Platform, },
    { type: NativeService, },
    { type: ionicAngular.ActionSheetController, },
    { type: TransFileService, },
]; };
exeUploadFileNativeComponent.propDecorators = {
    'avatarSrc': [{ type: _angular_core.Input },],
    'hasRound': [{ type: _angular_core.Input },],
    'serverUrl': [{ type: _angular_core.Input },],
    'imageUrl': [{ type: _angular_core.Input },],
};

var IMAGE_UPLOAD_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exeUploadFilePcComponent; }),
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
exeUploadFilePcComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'exe-upload-file-pc',
                templateUrl: 'UploadFilePc.html',
                providers: [IMAGE_UPLOAD_VALUE_ACCESSOR],
            },] },
];
/** @nocollapse */
exeUploadFilePcComponent.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: TransFileService, },
]; };
exeUploadFilePcComponent.propDecorators = {
    'avatarSrc': [{ type: _angular_core.Input },],
    'hasRound': [{ type: _angular_core.Input },],
    'serverUrl': [{ type: _angular_core.Input },],
    'inputFile': [{ type: _angular_core.ViewChild, args: ['inputFile',] },],
    'onChange': [{ type: _angular_core.HostListener, args: ['change',] },],
};

/**
 * 动态组件提供商
 * @author yefs
 */
var ComponentsFactoryService = (function () {
    function ComponentsFactoryService(platformService) {
        this.platformService = platformService;
    }
    ComponentsFactoryService.prototype.getUploadComponent = function () {
        var uploadCompoents = [
            new compoentItem(exeUploadFileNativeComponent, { name: 'exeUploadFileNativeComponent' }),
            new compoentItem(exeUploadFilePcComponent, { name: 'exeUploadFilePcComponent' }),
            new compoentItem(exeUploadFileWechatComponent, { name: 'exeUploadFileWechatComponent' }),
        ];
        log("platform--" + this.platformService.getPlatformCode());
        return uploadCompoents[this.platformService.getPlatformCode()].component;
    };
    return ComponentsFactoryService;
}());
ComponentsFactoryService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
ComponentsFactoryService.ctorParameters = function () { return [
    { type: ExePlatformService, },
]; };

/**
 * @author yefs
 * 上传组件容器，动态生成子组件
 */
var exeUploadFileComponent = (function () {
    function exeUploadFileComponent(_componentFactoryResolver, componentsService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this.componentsService = componentsService;
    }
    exeUploadFileComponent.prototype.ngAfterViewInit = function () {
        this.loadComponent();
    };
    exeUploadFileComponent.prototype.ngOnDestroy = function () {
    };
    exeUploadFileComponent.prototype.loadComponent = function () {
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.componentsService.getUploadComponent());
        var componentRef = this.uploadFile.createComponent(componentFactory);
        componentRef.instance.serverUrl = this.serverUrl;
        // let providers = ReflectiveInjector.resolve([TransFileService]); //为组件添加 providers
        // let injector = ReflectiveInjector.fromResolvedProviders(providers, this.exeUploadId.parentInjector); //创建注入器给 dynamic-component (记得要继承哦)
        // let factory = this._componentFactoryResolver.resolveComponentFactory(this.componentsService.getUploadComponent()); //创建 dynamic-component 工厂
        // let dynamic-component = factory.create(injector); //创建 dynamic-component, 这是就把注入器放进了, 后面的 array 是给 ng-content 用的
        // // dynamic-component.instance.name = "keatkeat"; // 对 input, output 做点东西
        //  this.exeUploadId.insert(dynamic-component.hostView, 0); // 插入到模板中  0 是 position, 如果是 0 其实可以不用放.
    };
    return exeUploadFileComponent;
}());
exeUploadFileComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'exe-upload-file',
                template: "\n              <div  class=\"upload-pic\">\n                <ng-template #uploadfile> </ng-template>\n              </div>\n            "
            },] },
];
/** @nocollapse */
exeUploadFileComponent.ctorParameters = function () { return [
    { type: _angular_core.ComponentFactoryResolver, },
    { type: ComponentsFactoryService, },
]; };
exeUploadFileComponent.propDecorators = {
    'avatarSrc': [{ type: _angular_core.Input },],
    'hasRound': [{ type: _angular_core.Input },],
    'serverUrl': [{ type: _angular_core.Input },],
    'imageUrl': [{ type: _angular_core.Input },],
    'uploadFile': [{ type: _angular_core.ViewChild, args: ["uploadfile", { read: _angular_core.ViewContainerRef },] },],
};

function componentsFactory(exePlatformService) {
    return new ComponentsFactoryService(exePlatformService);
}
var ExePlatformConponentModule = (function () {
    function ExePlatformConponentModule() {
    }
    return ExePlatformConponentModule;
}());
ExePlatformConponentModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                exports: [exeUploadFileComponent],
                declarations: [exeUploadFileComponent, exeUploadFilePcComponent, exeUploadFileWechatComponent, exeUploadFileNativeComponent],
                entryComponents: [exeUploadFileComponent, exeUploadFilePcComponent, exeUploadFileWechatComponent, exeUploadFileNativeComponent],
                providers: [
                    {
                        provide: ComponentsFactoryService, useFactory: componentsFactory,
                        deps: [ExePlatformService]
                    }
                ]
            },] },
];
/** @nocollapse */
ExePlatformConponentModule.ctorParameters = function () { return []; };

//导入对应的平台模块
// let platformModule=new PlatformStragety().getStragety();
var ExePlatformModule = (function () {
    function ExePlatformModule() {
    }
    return ExePlatformModule;
}());
ExePlatformModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    WindowsPlatformModule,
                    ExePlatformConponentModule
                ],
                exports: [ExePlatformConponentModule],
                providers: [
                    AuthService,
                    ExePlatformService,
                ]
            },] },
];
/** @nocollapse */
ExePlatformModule.ctorParameters = function () { return []; };

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by yefs on 2017/7/11.
 *
 * 微信平台
 */
var WechatPlatform$1 = (function (_super) {
    __extends$4(WechatPlatform, _super);
    function WechatPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WechatPlatform.prototype.initPlatform = function () {
        // this.wechat = (<any>window).Wechat;
        this.wx = window.wx;
        var tenantId = "exe";
        var option = this._getWxOption(tenantId);
        this._wxInit(option);
    };
    WechatPlatform.prototype.getPlatformContext = function () {
        return this.wx;
    };
    WechatPlatform.prototype.getPlatformName = function () {
        return wechat;
    };
    WechatPlatform.prototype.getPlatformCode = function () {
        return Platforms.wechat;
    };
    WechatPlatform.prototype._getWxOption = function (tenantId) {
        var option = {
            jsApiList: ['checkJsApi', 'scanQRCode', 'getLocation', 'getLocation', 'chooseImage', 'uploadImage', 'downloadImage'],
            configUrl: this._getWxConfigUrl(tenantId)
        };
        return option;
    };
    WechatPlatform.prototype._getWxConfigUrl = function (tenantId) {
        return "http://weixin.exexm.com/auth/" + tenantId + "/config";
    };
    WechatPlatform.prototype._wxInit = function (option) {
        var _this = this;
        if (!(option || option.jsApiList.length > 0)) {
            //Toast("初始化配置错误");
        }
        var configUrl = option.configUrl;
        var jsApiList = option.jsApiList;
        if (typeof this.wx !== "undefined") {
            var wxReq = rxjs_Observable.Observable.ajax({
                url: configUrl,
                body: {
                    url: location.href.split('#')[0]
                },
                method: 'post',
                crossDomain: true,
            });
        }
        wxReq.subscribe(function (AjaxResponse) {
            var res = AjaxResponse.response;
            console.log(AjaxResponse);
            if (!res)
                return;
            if (res.success) {
                _this.wx.config({
                    debug: (option && option.debug) || true,
                    appId: res.result && res.result.appId,
                    timestamp: res.result && res.result.timestamp,
                    nonceStr: res.result && res.result.nonceStr,
                    signature: res.result && res.result.signature,
                    jsApiList: jsApiList
                });
            }
            _this.wx.chooseImage({ count: 1 });
        });
    };
    return WechatPlatform;
}(BasePlatform));
WechatPlatform$1.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
WechatPlatform$1.ctorParameters = function () { return []; };

/**
 * Created by yefs on 2017/7/11.
 *  wechat存储
 *
 */
var StorageWeChat$1 = (function () {
    function StorageWeChat(wechatPlatform) {
        this.wechatPlatform = wechatPlatform;
    }
    StorageWeChat.prototype.saveObject = function (key, value) {
        try {
            this.wechatPlatform.getPlatformContext().setStorageSync(key, value);
        }
        catch (e) {
        }
    };
    StorageWeChat.prototype.getObject = function (key, defaule) {
        try {
            this.wechatPlatform.getPlatformContext().getStorageSync(key, defaule);
        }
        catch (e) {
        }
    };
    return StorageWeChat;
}());
StorageWeChat$1.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
StorageWeChat$1.ctorParameters = function () { return [
    { type: WechatPlatform$1, },
]; };

/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var TransFileWechat$1 = (function () {
    function TransFileWechat(wechatPlatform) {
        this.wechatPlatform = wechatPlatform;
    }
    TransFileWechat.prototype.upload = function (fileUrl, url, options) {
        return new Promise(function (resolve, reject) {
            this.wechatPlatform.getPlatformContext().uploadImage({
                localId: fileUrl,
                isShowProcess: 1,
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
    };
    TransFileWechat.prototype.chooseFile = function (options) {
        return new Promise(function (resolve, reject) {
            this.wechatPlatform.getPlatformContext().chooseImage({
                count: 1,
                // sizeType: sizeType,      // 可以指定是原图还是压缩图，默认二者都有
                // sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
    };
    TransFileWechat.prototype.download = function (source, target, options) {
        throw new Error("Method not implemented.");
    };
    return TransFileWechat;
}());
TransFileWechat$1.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
TransFileWechat$1.ctorParameters = function () { return [
    { type: WechatPlatform$1, },
]; };

var LoggerPcService$1 = (function () {
    function LoggerPcService() {
    }
    LoggerPcService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(message, optionalParams);
    };
    LoggerPcService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.error(message, optionalParams);
    };
    return LoggerPcService;
}());
LoggerPcService$1.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
LoggerPcService$1.ctorParameters = function () { return []; };

var WechatPlatformProvides$1 = [
    { provide: StorageService, useClass: StorageWeChat$1 },
    { provide: TransFileService, useClass: TransFileWechat$1 },
    { provide: LoggerService, useClass: LoggerPcService$1 }
];
var WechatPlatformModule$1 = (function () {
    function WechatPlatformModule() {
    }
    return WechatPlatformModule;
}());
WechatPlatformModule$1.decorators = [
    { type: _angular_core.NgModule, args: [{
                providers: [
                    WechatPlatform$1,
                    WechatPlatformProvides$1
                ]
            },] },
];
/** @nocollapse */
WechatPlatformModule$1.ctorParameters = function () { return []; };

/**
 * Created by yefs on 2017/7/11.
 *  原生存储
 *
 */
var StorageNative$1 = (function () {
    function StorageNative() {
    }
    StorageNative.prototype.saveObject = function (key, value) {
        localStorage.setItem(key, stringify(value));
    };
    StorageNative.prototype.getObject = function (key, defaule) {
        var value = localStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
        }
        else {
            value = defaule;
        }
        return value;
    };
    return StorageNative;
}());
StorageNative$1.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
StorageNative$1.ctorParameters = function () { return []; };

var LoggerNativeService$1 = (function () {
    function LoggerNativeService() {
    }
    LoggerNativeService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(message, optionalParams);
    };
    LoggerNativeService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    return LoggerNativeService;
}());
LoggerNativeService$1.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
LoggerNativeService$1.ctorParameters = function () { return []; };

/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var TransFileNative$1 = (function () {
    function TransFileNative() {
        this.fileTransfer = new _ionicNative_transfer.Transfer().create();
    }
    /**
     * app上传图片
     */
    TransFileNative.prototype.uploadPicture = function (path, url) {
        return this.upload(path, url);
    };
    TransFileNative.prototype.upload = function (path, url) {
        var options = {
            fileKey: 'file',
            fileName: path.substr(path.lastIndexOf('/') + 1)
        };
        var observable = rxjs.Observable.fromPromise(this.fileTransfer.upload(path, url, options)).map(function (result) {
            var exeFileUploadResult = null;
            exeFileUploadResult.response = result.response;
            log("exeFileUploadResult" + result);
            return exeFileUploadResult;
        });
        return observable.toPromise();
    };
    TransFileNative.prototype.chooseFile = function (options) {
        throw new Error("Method not implemented.");
    };
    TransFileNative.prototype.download = function (source, target, options) {
        throw new Error("Method not implemented.");
    };
    return TransFileNative;
}());
TransFileNative$1.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
TransFileNative$1.ctorParameters = function () { return []; };

/**
 * Created by yefs.
 * 原生插件,工具类
 */
var NativeService$1 = (function () {
    function NativeService(platform, 
        // private toastCtrl: ToastController,
        alertCtrl, appVersion, camera, 
        // private toast: Toast,
        transfer, 
        // private file: File,
        fileOpener, inAppBrowser, imagePicker, network, callNumber, loadingCtrl) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.appVersion = appVersion;
        this.camera = camera;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.inAppBrowser = inAppBrowser;
        this.imagePicker = imagePicker;
        this.network = network;
        this.callNumber = callNumber;
        this.loadingCtrl = loadingCtrl;
        this.loadingIsOpen = false;
    }
    NativeService.prototype.warn = function (info) {
        console.log('%cNativeService/' + info, 'color:#e8c406');
    };
    /**
     * 通过浏览器下载app
     */
    NativeService.prototype.openUrlByBrowser = function (url) {
        this.inAppBrowser.create(url, '_system');
    };
    NativeService.prototype.downloadApk = function () {
        // let alert = this.alertCtrl.create({
        //   title: '下载进度：0%',
        //   enableBackdropDismiss: false,
        //   buttons: ['后台下载']
        // });
        // alert.present();
        //
        // const fileTransfer: TransferObject = this.transfer.create();
        // const apk = this.file.externalRootDirectory + 'android.apk';//保存的目录
        // fileTransfer.download('app下载地址', apk).then(entry => {
        //   //.apk MIME类型：application/vnd.android.package-archive
        //   //.ipa MIME类型：application/octet-stream.ipa
        //   this.fileOpener.open(apk, 'application/vnd.android.package-archive').then(res => {
        //     console.log('apk打开成功准备安装 ' + res);
        //   }, () => {
        //     this.alertCtrl.create({
        //       title: '失败!',
        //       subTitle: '安装包下载完成,打开失败!',
        //       buttons: ['确定']
        //     }).present();
        //   });
        // }, () => {
        //   this.alertCtrl.create({
        //     title: '失败!',
        //     subTitle: '下载安装包失败,请稍后再试!',
        //     buttons: ['确定']
        //   }).present();
        // });
        //
        // fileTransfer.onProgress((event: ProgressEvent) => {
        //   let num = Math.floor(event.loaded / event.total * 100);
        //   if (num === 100) {
        //     alert.dismiss();
        //   } else {
        //     let title = document.getElementsByClassName('alert-title')[0];
        //     title && (title.innerHTML = '下载进度：' + num + '%');
        //   }
        // });
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    // showToast(message: string = '操作完成', duration: number = 2000): void {
    //   if (this.isMobile()) {
    //     this.toast.show(message, String(duration), 'center').subscribe();
    //   } else {
    //     this.toastCtrl.create({
    //       message: message,
    //       duration: duration,
    //       position: 'middle',
    //       showCloseButton: false
    //     }).present();
    //   }
    // };
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(function () {
                _this.loadingIsOpen && _this.loading.dismiss();
                _this.loadingIsOpen = false;
            }, 10000);
        }
    };
    
    /**
     * 关闭loading
     */
    NativeService.prototype.hideLoading = function () {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };
    
    /**
     * 使用cordova-plugin-camera获取照片
     * @param options
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 800,
            targetHeight: 800,
            saveToPhotoAlbum: true,
            correctOrientation: true //设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return new Promise(function (resolve) {
            _this.camera.getPicture(ops).then(function (imgData) {
                resolve(imgData);
            }, function (err) {
                // err == 20 && this.showToast('没有权限,请在设置中开启权限');
                _this.warn('getPicture:' + err);
            });
        });
    };
    
    /**
     * 通过拍照获取照片
     * @param options
     * @return {Promise<string>}
     */
    NativeService.prototype.getPictureByCamera = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve) {
            _this.getPicture(Object.assign({
                sourceType: _this.camera.PictureSourceType.CAMERA
            }, options)).then(function (imgData) {
                resolve(imgData);
            }).catch(function (err) {
                // String(err).indexOf('cancel') != -1 ? this.showToast('取消拍照', 1500) : this.showToast('获取照片失败');
            });
        });
    };
    
    /**
     * 通过图库获取照片
     * @param options
     * @return {Promise<string>}
     */
    NativeService.prototype.getPictureByPhotoLibrary = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve) {
            _this.getPicture(Object.assign({
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY
            }, options)).then(function (imgData) {
                resolve(imgData);
            }).catch(function (err) {
                // String(err).indexOf('cancel') != -1 ? this.showToast('取消选择图片', 1500) : this.showToast('获取照片失败');
            });
        });
    };
    
    /**
     * 通过图库选择多图
     * @param options
     * @return {Promise<T>}
     */
    NativeService.prototype.getMultiplePicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var that = this;
        var destinationType = options['destinationType'] || 0; //0:base64字符串,1:图片url
        return new Promise(function (resolve) {
            _this.imagePicker.getPictures(Object.assign({
                maximumImagesCount: 6,
                width: 800,
                height: 800,
                quality: 100 //图像质量，范围为0 - 100
            }, options)).then(function (files) {
                if (destinationType === 1) {
                    resolve(files);
                }
                else {
                    var imgBase64s_1 = []; //base64字符串数组
                    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                        var fileUrl = files_1[_i];
                        that.convertImgToBase64(fileUrl, function (base64) {
                            imgBase64s_1.push(base64);
                            if (imgBase64s_1.length === files.length) {
                                resolve(imgBase64s_1);
                            }
                        }, null);
                    }
                }
            }).catch(function (err) {
                _this.warn('getMultiplePicture:' + err);
                // this.showToast('获取照片失败');
            });
        });
    };
    
    /**
     * 根据图片绝对路径转化为base64字符串
     * @param url 绝对路径
     * @param callback 回调函数
     * @param outputFormat 转换格式,默认为image/png
     */
    NativeService.prototype.convertImgToBase64 = function (url, callback, outputFormat) {
        if (outputFormat === void 0) { outputFormat = 'image/png'; }
        var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), img = new Image;
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            var imgBase64 = canvas.toDataURL(outputFormat); //返回如'data:image/jpeg;base64,abcdsddsdfsdfasdsdfsdf'
            var base64 = imgBase64.substring(imgBase64.indexOf(';base64,') + 8); //返回如'abcdsddsdfsdfasdsdfsdf'
            callback.call(this, base64);
            canvas = null;
        };
        img.src = url;
    };
    /**
     * 获得用户当前坐标
     * @return {Promise<Position>}
     */
    NativeService.prototype.getUserLocation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.isMobile()) {
                LocationPlugin.getLocation(function (data) {
                    resolve({ 'lng': data.longitude, 'lat': data.latitude });
                }, function (msg) {
                    alert(msg.indexOf('缺少定位权限') == -1 ? ('错误消息：' + msg) : '缺少定位权限，请在手机设置中开启');
                    _this.warn('getUserLocation:' + msg);
                });
            }
            else {
                _this.warn('getUserLocation:非手机环境,即测试环境返回固定坐标');
                resolve({ 'lng': 113.350912, 'lat': 23.119495 });
            }
        });
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getVersionNumber:' + err);
            });
        });
    };
    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getAppName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getAppName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getAppName:' + err);
            });
        });
    };
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPackageName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getPackageName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getPackageName:' + err);
            });
        });
    };
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    NativeService.prototype.call = function (numberToCall) {
        this.callNumber
            .callNumber(numberToCall, true)
            .then(function () { })
            .catch(function () { });
    };
    NativeService.prototype.sendSms = function (numberToCall) {
        this.callNumber
            .callNumber(numberToCall, true)
            .then(function () { })
            .catch(function () { });
    };
    return NativeService;
}());
NativeService$1.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
NativeService$1.ctorParameters = function () { return [
    { type: ionicAngular.Platform, },
    { type: ionicAngular.AlertController, },
    { type: _ionicNative_appVersion.AppVersion, },
    { type: _ionicNative_camera.Camera, },
    { type: _ionicNative_transfer.Transfer, },
    { type: _ionicNative_fileOpener.FileOpener, },
    { type: _ionicNative_inAppBrowser.InAppBrowser, },
    { type: _ionicNative_imagePicker.ImagePicker, },
    { type: _ionicNative_network.Network, },
    { type: _ionicNative_callNumber.CallNumber, },
    { type: ionicAngular.LoadingController, },
]; };

var NativePlatformProvides$1 = [
    { provide: StorageService, useClass: StorageNative$1 },
    { provide: TransFileService, useClass: TransFileNative$1 },
    { provide: LoggerService, useClass: LoggerNativeService$1 }
];
var NativePlatformModule$1 = (function () {
    function NativePlatformModule() {
    }
    return NativePlatformModule;
}());
NativePlatformModule$1.decorators = [
    { type: _angular_core.NgModule, args: [{
                providers: [
                    NativePlatformProvides$1,
                    TransFileNative$1,
                    _ionicNative_appVersion.AppVersion,
                    _ionicNative_fileOpener.FileOpener,
                    _ionicNative_transfer.Transfer,
                    _ionicNative_inAppBrowser.InAppBrowser,
                    _ionicNative_imagePicker.ImagePicker,
                    _ionicNative_network.Network,
                    _ionicNative_callNumber.CallNumber,
                    NativeService$1,
                    _ionicNative_camera.Camera,
                ]
            },] },
];
/** @nocollapse */
NativePlatformModule$1.ctorParameters = function () { return []; };

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file is not used to build this module. It is only used during editing
// by the TypeScript language service and during build for verification. `ngc`
// replaces this file with production index.ts when it rewrites private symbol
// names.
// export * from './src/index';
// export * from './src';

exports.ExePlatformModule = ExePlatformModule;
exports.AuthService = AuthService;
exports.ExePlatformConponentModule = ExePlatformConponentModule;
exports.WindowsPlatformModule = WindowsPlatformModule;
exports.WechatPlatformModule = WechatPlatformModule$1;
exports.NativePlatformModule = NativePlatformModule$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
