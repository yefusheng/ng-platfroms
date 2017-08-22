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
export {ExePlatformModule} from './src/ExePlatformModule';
export {AuthService} from './src/Auth.service';
export {ExePlatformConponentModule} from './src/dynamic-component/ExePlatformConponentModule';
export {WindowsPlatformModule} from './src/windows/WindowsPlatformModule';
export {WechatPlatformModule} from './src/Wechat/WechatPlatformModule';
export {NativePlatformModule} from './src/Native/NativePlatformModule';

export {StorageService} from './src/service/Storage.service';
export {LoggerService} from './src/service/Logger.service';
export {ExePlatformService} from './src/ExePlatform.service';