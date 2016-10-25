// ng1/2 hybrid
import { downgradeComponent} from '@angular/upgrade';

import { Ng2RouterRoot } from './app2.module';

/** Wrapper root module for angular 1 */
export const routerRootModule = angular.module('routerRootModule', ['ngRoute']);

routerRootModule.directive('ng2RouterRoot', downgradeComponent({
  component: Ng2RouterRoot,
  outputs: ['ng2RouterRoot'],
}) as ng.IDirectiveFactory);

// Tell the angular 1 router to render the placeholder
routerRootModule.config(($routeProvider: angular.route.IRouteProvider) => {
  $routeProvider
    .otherwise({template : '<ng2-router-root></ng2-router-root>',
        reloadOnSearch: false});
});
