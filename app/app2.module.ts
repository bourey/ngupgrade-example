// ng1/2 hybrid
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, UrlHandlingStrategy } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

import { TeamsModule } from './team2/team.module';

// a placeholder component that acts as a root component for angular 2 modules
@Component({
  selector : 'ng2-router-root',
  template: `<div><router-outlet></router-outlet></div>`
})
export class Ng2RouterRoot {
  constructor(router: Router) {
    router.initialNavigation();
  }
}


/**
 * Application-specific custom URL handling strategy.  This tells the
 * Angular 2 router to handle only a subset of our application.
 */
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: any) { return url.toString().startsWith('/teams'); }
  extract(url: any) { return url; }
  merge(url: any, whole: any) { return url; }
}


/**
 * Root module for angular 2 for the app.
 */
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: false, useHash: true}),
    TeamsModule,
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
