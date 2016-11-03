// ng1/2 hybrid
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, UrlHandlingStrategy } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

import { TeamsModule } from './team2/team.module';

// a placeholder component that acts as a root component for angular 2 modules
@Component({
  selector : 'ng2-router-root',
  template: `<router-outlet></router-outlet>`
})
export class Ng2RouterRoot {}


/**
 * Application-specific custom URL handling strategy.  This tells the
 * Angular 2 router to handle only a subset of our application.
 */
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: any) { console.log('url', url.toString()); return url.toString().startsWith('/teams'); }
  extract(url: any) { return url; }
  merge(url: any, whole: any) { return url; }
}


/**
 * Root module for angular 2 for the app.
 */
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), //, {useHash: true}),
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
  constructor(r: Router) {
    console.log('App module intialized');
    r.events.subscribe(e => {
      console.log(e);
    });
  }

  ngDoBootstrap() {}
}
