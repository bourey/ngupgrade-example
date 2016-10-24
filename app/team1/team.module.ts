import { Team } from '../common/team/team';
import { TeamService, teamServiceModule } from '../common/team/team.service';
import { TeamDetailCmp } from './team_detail.component';
import { TeamListCmp } from './team_list.component';

export const teamModule = angular.module('teamModule', [
  'ngRoute', teamServiceModule.name,
]);

/** @ngInject */
let resolveTeams = function(teamService: TeamService): Promise<Team[]> {
  return teamService.getTeams();
};

/** @ngInject */
let resolveTeam = function(teamService: TeamService,
    $route: angular.route.IRouteService): Promise<Team> {
  return teamService.getTeam($route.current.params['team']);
};

let configRoutes = function($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/teams', {
    controller: TeamListCmp,
    controllerAs: 'ctrl',
    templateUrl: '/app/team1/team_list.component.html',
    resolve: { teams: resolveTeams }
  }).when('/teams/:team', {
    controller: TeamDetailCmp,
    controllerAs: 'ctrl',
    templateUrl: '/app/team1/team_detail.component.html',
    resolve: { team: resolveTeam }
  });
};
teamModule.config(configRoutes);
