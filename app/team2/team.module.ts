import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TeamServiceModule } from '../common/team/team.service';
import { TeamComponentModule } from './team_detail.module';
import { TeamsComponentModule } from './team_list.module';

let ROUTES = [
  { path: 'teams', children: [
    { path: '', loadChildren: () => TeamsComponentModule },
    { path: ':teamId', loadChildren: () => TeamComponentModule }
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
