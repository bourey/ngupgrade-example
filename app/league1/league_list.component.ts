import { League } from '../common/league/league';
import { LeagueService } from '../common/league/league.service';

export function resolveLeagues(leagueService: LeagueService): Promise<League[]> {
  return leagueService.getLeagues();
}

export class LeagueListComponent {
  constructor(public leagues: League[]) { }
}
LeagueListComponent.$inject = ['leagues'];
