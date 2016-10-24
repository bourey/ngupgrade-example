// ng1/2 hybrid
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { UpgradeModule, downgradeComponent} from '@angular/upgrade';

import { footballApp } from './app.module';

// a placeholder component that acts as a root component for angular 2 modules
@Component({
  selector : 'ng2-router-root',
  template: `<router-outlet></router-outlet>`
})
export class Ng2RouterRoot {}


/** Wrapper root module for angular 1 */
export const RootModule = angular.module('rootModule', ['ngRoute', footballApp.name]);

RootModule.directive('ng2RouterRoot', downgradeComponent({
  component: Ng2RouterRoot,
  outputs: ['ng2RouterRoot'],
}) as ng.IDirectiveFactory);

// Tell the angular 1 router to render the placeholder
RootModule.config(($routeProvider: angular.route.IRouteProvider) => {
  $routeProvider
    .otherwise({template : '<ng2-router-root></ng2-router-root>',
        reloadOnSearch: false});
});


// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only specific URLs.
class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: any) { return false; }
  extract(url: any) { return url; }
  merge(url: any, whole: any) { return url; }
}


/**
 * Root module for angular 2 for the app. 
 */
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: true}),
    UpgradeModule,
  ],
  declarations: [Ng2RouterRoot],
  entryComponents: [Ng2RouterRoot],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
