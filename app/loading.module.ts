import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

export const loadingModule = angular.module('loadingModule', ['ngRoute']);

/** @ngInject */
export class LoadingService {
  rootScope: ng.IRootScopeService;
  constructor(private $rootScope: ng.IRootScopeService) {
    this.rootScope = $rootScope;
  }

  showLoading() {
    console.log('load');
    this.rootScope['loading'] = true;
  }

  hideLoading() {
    console.log('done');
    this.rootScope['loading'] = false;
  }
}
loadingModule.service('loadingService', LoadingService);

/** @ngInject */
function configLoading($rootScope: ng.IRootScopeService, loadingService: LoadingService) {
  $rootScope.$on('$routeChangeStart', function() { loadingService.showLoading(); });
  $rootScope.$on('$routeChangeSuccess', function() { loadingService.hideLoading(); });
};
loadingModule.run(configLoading);

@NgModule({
  imports: [UpgradeModule],
  providers: [{
    provide: LoadingService,
    useFactory: (i: ng.auto.IInjectorService) => i.get('loadingService'),
    deps: ['$injector']
  }]
})
export class LoadingServiceModule { }
