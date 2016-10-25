// import { footballApp } from './app.module';

// angular.bootstrap(document.body, [footballApp.name, 'ngRoute']);

import { PlatformRef, NgModuleFactory } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade';

import { footballApp } from './app.module';
import { AppModuleNgFactory } from '../aot/app/app2.module.ngfactory';


export function bootstrap(
    platform: PlatformRef, Ng2Module: NgModuleFactory<{}>, element: Element, ng1Module: angular.IModule) {
  // We bootstrap the Angular 2 module first; then when it is ready (async)
  // We bootstrap the Angular 1 module on the bootstrap element
  return platform.bootstrapModuleFactory(Ng2Module).then(ref => {
    let upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(element, [ng1Module.name]);
    return upgrade;
  });
}

bootstrap(platformBrowserDynamic(), AppModuleNgFactory, document.body, footballApp).then((ref) => {
  // this is required because of a bug in NgUpgrade
  setTimeout(() => {
    ref.injector.get(Router).initialNavigation();
  }, 0);
});
