import { Team } from '../common/team/team';
import { TeamService, teamServiceModule } from '../common/team/team.service';
import { TeamDetailCmp } from './team_detail.component';
import { TeamListCmp } from './team_list.component';

export const teamModule = angular.module('teamModule', [
  'ngRoute', teamServiceModule.name,
]);

let resolveTeams = function(teamService: TeamService): Promise<Team[]> {
  return teamService.getTeams();
};

let resolveTeam = function(teamService: TeamService,
    $route: angular.route.IRouteService): Promise<Team> {
  return teamService.getTeam($route.current.params['team']);
};

let configRoutes = function($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/teams', {
    controller: TeamListCmp,
    controllerAs: 'ctrl',
    templateUrl: '/app/team1/team_list.component.html',
    resolve: { teams: ['teamService', '$route', resolveTeams] }
  }).when('/teams/:team', {
    controller: TeamDetailCmp,
    controllerAs: 'ctrl',
    templateUrl: '/app/team1/team_detail.component.html',
    resolve: { team: ['teamService', '$route', resolveTeam] }
  });
};
teamModule.config(configRoutes);
