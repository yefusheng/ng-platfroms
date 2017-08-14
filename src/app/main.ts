import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {createPlatformFactory} from "@angular/core";
import {windowsPlatformProvides} from "../platform/src/windows/WindowsPlatformModule";




// platformBrowserDynamic().bootstrapModule(AppModule);

export const platformWindowDynamic = createPlatformFactory(
  platformBrowserDynamic, 'windowDynamic', windowsPlatformProvides);

platformWindowDynamic().bootstrapModule(AppModule);
