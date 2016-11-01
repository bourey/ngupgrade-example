import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TeamServiceModule } from '../common/team/team.service';
import { TeamComponentModule } from './team_detail.module';
import { TeamsComponentModule } from './team_list.module';

import { TeamComponentModuleNgFactory } from '../../aot/app/team2/team_detail.module.ngfactory';
import { TeamsComponentModuleNgFactory } from '../../aot/app/team2/team_list.module.ngfactory';

export function loadTeamList() {
  return TeamsComponentModuleNgFactory as any;
}

export function loadTeamDetail() {
  return TeamComponentModuleNgFactory as any;
}

export const ROUTES = [
  { path: 'teams', children: [
    { path: '', loadChildren: loadTeamList },
    { path: ':teamId', loadChildren: loadTeamDetail }
  ]}
];


@NgModule({
  imports: [
    TeamComponentModule,
    TeamsComponentModule,
    TeamServiceModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class TeamsModule {}
