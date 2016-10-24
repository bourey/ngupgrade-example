import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Team } from '../common/team/team';

@Component({
  selector: 'team',
  templateUrl : 'app/team2/team_detail.component.html'
})
export class TeamDetailCmp implements OnInit {
  team: Team;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.team = this.route.snapshot.data['team'];
  }
}
