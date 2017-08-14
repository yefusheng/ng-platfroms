"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
StorageService = __decorate([
    core_1.Injectable()
], StorageService);
exports.StorageService = StorageService;
