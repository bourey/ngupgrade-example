import { League } from '../common/league/league';
import { LeagueService } from '../common/league/league.service';

/** @ngInject */
export function resolveLeagues(leagueService: LeagueService): Promise<League[]> {
  return leagueService.getLeagues();
}

/** @ngInject */
export class LeagueListComponent {
  constructor(public leagues: League[]) { }
}
