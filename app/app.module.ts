// ng1/2 hybrid
import { leagueModule } from './league1/league.module';
import { teamModule } from './team1/team.module';
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
  teamModule.name,
  teamServiceModule.name,
]);

function configRoutes($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/', { templateUrl: '/app/welcome.html' });
};
footballApp.config(['$routeProvider', configRoutes]);

function configLocation($locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true);
}
footballApp.config(['$locationProvider', configLocation]);

/** Component containing the ng1-router-controller ng-view */
footballApp.component('footballApp', {
  template : '<div class="ng-view"></div>',
  controllerAs : 'ctrl'
});
