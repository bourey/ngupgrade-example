import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

export const loadingModule = angular.module('loadingModule', ['ngRoute']);

export class LoadingService {
  constructor(private $rootScope: ng.IRootScopeService) {
    this.$rootScope['loading'] = true;
  }

  showLoading() {
    this.$rootScope['loading'] = true;
  }

  hideLoading() {
    this.$rootScope['loading'] = false;
  }
}
loadingModule.service('loadingService', LoadingService);

function configLoading($rootScope: ng.IRootScopeService, loadingService: LoadingService) {
  $rootScope.$on('$routeChangeStart', function() { 
    loadingService.showLoading();
  });
  $rootScope.$on('$routeChangeSuccess', function(e, c, p) {
    if (c.loadedTemplateUrl) {
      loadingService.hideLoading();
    }
  });
};
loadingModule.run(['$rootScope', 'loadingService', configLoading]);


@NgModule({
  imports: [UpgradeModule],
  providers: [{
    provide: LoadingService,
    useFactory: (i: ng.auto.IInjectorService) => i.get('loadingService'),
    deps: ['$injector']
  }]
})
export class LoadingServiceModule {
  constructor(r: Router, loadingService: LoadingService) {
    r.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        loadingService.showLoading();
      } else if (e instanceof NavigationEnd) {
        loadingService.hideLoading();
      }
    });
  }
}
