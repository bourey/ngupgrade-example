import { Team } from '../common/team/team';

/** @ngInject */
export class TeamListCmp {
  constructor(public teams: Team[]) { }
}
