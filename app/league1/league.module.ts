import { leagueServiceModule } from '../common/league/league.service';
import { LeagueListComponent, resolveLeagues } from './league_list.component';
import { LeagueDetailComponent, resolveLeague, resolveTeams } from './league_detail.component';

// Angular 1 module for the /leagues sub-directory
export const leagueModule = angular.module('leagueListModule', ['ngRoute', leagueServiceModule.name]);

let configRoutes = function($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/leagues', {
    controller: LeagueListComponent,
    controllerAs: 'ctrl',
    resolve: { leagues: ['leagueService', resolveLeagues] },
    templateUrl: '/app/league1/league_list.component.html'
  }).when('/leagues/:league', {
    controller: LeagueDetailComponent,
    controllerAs: 'ctrl',
    resolve: {
      league: ['leagueService', '$route', resolveLeague],
      teams: ['teamService', '$route', resolveTeams]
    },
    templateUrl: '/app/league1/league_detail.component.html'
  });
};
leagueModule.config(['$routeProvider', configRoutes]);
