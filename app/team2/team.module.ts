import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TeamServiceModule } from '../common/team/team.service';
import { TeamComponentModule } from './team_detail.module';
import { TeamsComponentModule } from './team_list.module';

export function loadTeamList() {
  return TeamsComponentModule;
}

export function loadTeamDetail() {
  return TeamComponentModule;
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
