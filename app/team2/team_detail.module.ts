import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Team } from '../common/team/team';
import { TeamService } from '../common/team/team.service';
import { TeamDetailCmp } from './team_detail.component';

@Injectable()
class TeamResolver implements Resolve<Team> {
  constructor(private teamService: TeamService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Team> {
    return this.teamService.getTeam(route.params['teamId']);
  }
}

let ROUTES = [{
  path : '', component: TeamDetailCmp, resolve: {
    team: TeamResolver,
  }
}];


@NgModule({
  declarations: [TeamDetailCmp],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  providers: [TeamResolver],
})
export class TeamComponentModule { }
