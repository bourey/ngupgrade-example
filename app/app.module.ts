// ng1/2 hybrid
import { LeagueServiceModule } from './common/league/league.service';
import { leagueModule } from './league1/league.module';
import { routerRootModule } from './router-root.module';
import { teamServiceModule } from './common/team/team.service';

/**
 * Root ng1 module for our application. This is the app that will be bootstrapped.
 */
export const footballApp = angular.module('footballApp', [
  'ngRoute',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ngMdIcons',
  leagueModule.name,
  routerRootModule.name,
  teamServiceModule.name,
  LeagueServiceModule.name,
]);

function configRoutes($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/', { templateUrl: '/app/welcome.html' });
};
footballApp.config(['$routeProvider', configRoutes]);

/** Component containing the ng1-router-controller ng-view */
footballApp.component('footballApp', {
  template : '<div class="ng-view"></div>',
  controllerAs : 'ctrl'
});
