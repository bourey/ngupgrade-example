import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Team } from '../common/team/team';
import { Load2 } from '../loading.module';


@Component({
  templateUrl: 'app/team2/team_list.component.html'
})
export class TeamListCmp implements OnInit {
  teams: Team[];

  constructor(private route: ActivatedRoute, l: Load2) { }

  ngOnInit() {
    this.teams = this.route.snapshot.data['teams'];
  }

}
