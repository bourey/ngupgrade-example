// ng1/2 hybrid
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationError, Router, RouterModule, UrlHandlingStrategy } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

import { Ng2RouterRoot, ROOT_OUTLET_LOADED, routerOutletLoaded } from './router-root.component';
import { TeamsModule } from './team2/team.module';



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
    RouterModule.forRoot([]),
    TeamsModule,
    UpgradeModule,
  ],
  declarations: [Ng2RouterRoot],
  entryComponents: [Ng2RouterRoot],
  providers: [
    { provide: ROOT_OUTLET_LOADED, useFactory: routerOutletLoaded },
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
  ]
})
export class AppModule {
  constructor(router: Router) {
    // Log routing events
    router.events.subscribe(e => {
      if (e instanceof NavigationError) {
        console.debug('Routing error', e);
      } else {
        console.debug('Routing event', e);
      }
    });
  }

  ngDoBootstrap() {}
}
