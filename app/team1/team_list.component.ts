import { Team } from '../common/team/team';

export class TeamListCmp {
  constructor(public teams: Team[]) { }
}
TeamListCmp.$inject = ['teams'];
