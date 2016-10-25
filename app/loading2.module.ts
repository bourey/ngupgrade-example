import { Injectable, NgModule } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { LoadingServiceModule, LoadingService } from './loading.module';

@Injectable()
export class LoadingService2 {
  constructor(r: Router, loadingService: LoadingService) {
    r.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        console.log('nav start');
        loadingService.showLoading();
      } else if (e instanceof NavigationEnd) {
        console.log('nav end');
        loadingService.hideLoading();
      }
    });
  }
}


@NgModule({
  imports: [LoadingServiceModule],
  providers: [LoadingService2]
})
export class LoadingService2Module {}

