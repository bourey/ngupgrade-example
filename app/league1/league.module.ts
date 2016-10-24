import { LeagueListComponent, resolveLeagues } from './league_list.component';
import { LeagueDetailComponent, resolveLeague, resolveTeams } from './league_detail.component';

// Angular 1 module for the /leagues sub-directory
export const leagueModule = angular.module('leagueListModule', ['ngRoute']);

/** @ngInject */
let configRoutes = function($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/leagues', {
    controller: LeagueListComponent,
    controllerAs: 'ctrl',
    resolve: { leagues: resolveLeagues },
    templateUrl: '/app/league1/league_list.component.html'
  }).when('/leagues/:league', {
    controller: LeagueDetailComponent,
    controllerAs: 'ctrl',
    resolve: { league: resolveLeague, teams: resolveTeams },
    templateUrl: '/app/league1/league_detail.component.html'
  });
};
leagueModule.config(configRoutes);
