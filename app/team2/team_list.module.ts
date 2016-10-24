import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resolve, RouterModule } from '@angular/router';

import { Team } from '../common/team/team';
import { TeamService } from '../common/team/team.service';
import { TeamListCmp } from './team_list.component';


@Injectable()
class TeamsResolver implements Resolve<Team[]> {
  constructor(private teamService: TeamService) {}

  resolve(): Promise<Team[]> {
    return this.teamService.getTeams();
  }
}

let ROUTES = [{
  path : '', component: TeamListCmp, resolve: {
    teams: TeamsResolver
  }
}];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [TeamListCmp],
  providers: [TeamsResolver],
})
export class TeamsComponentModule { }
