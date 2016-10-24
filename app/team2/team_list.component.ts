import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Team } from '../common/team/team';


@Component({
  templateUrl: 'app/team2/team_list.component.html'
})
export class TeamListCmp implements OnInit {
  teams: Team[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.teams = this.route.snapshot.data['teams'];
  }

}
