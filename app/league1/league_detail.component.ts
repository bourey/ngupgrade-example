import { League } from '../common/league/league';
import { LeagueService } from '../common/league/league.service';
import { Team } from '../common/team/team';
import { TeamService } from '../common/team/team.service';

export function resolveLeague(leagueService: LeagueService,
    $route: angular.route.IRouteService): Promise<League> {
  return leagueService.getLeague($route.current.params['league']);
}

export function resolveTeams(teamService: TeamService,
    $route: angular.route.IRouteService): Promise<Team[]> {
  return teamService.getTeamsForLeague($route.current.params['league']);
}

export class LeagueDetailComponent {
  constructor(public league: League, public teams: Team[]) { }
}
LeagueDetailComponent.$inject = ['league', 'teams'];
