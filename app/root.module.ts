// ng1/2 hybrid
import { downgradeComponent} from '@angular/upgrade';

import { footballApp } from './app.module';
import { Ng2RouterRoot } from './app2.module';

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
