import { downgradeComponent} from '@angular/upgrade/static';

import { Ng2RouterRoot } from './router-root.component';

/** Wrapper root module for angular 1 */
export const routerRootModule = angular.module('routerRootModule', ['ngRoute']);

routerRootModule.directive('ng2RouterRoot', downgradeComponent({
  component: Ng2RouterRoot,
  outputs: ['ng2RouterRoot'],
}) as ng.IDirectiveFactory);
