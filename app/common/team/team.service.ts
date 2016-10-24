import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade';

import { Team } from './team';

let delay = 0;

export class TeamService {
  teams: Team[] = [
    new Team('1', 'Bayern Munich', 'bundesliga'),
    new Team('2', 'Borussia Dortmund', 'bundesliga'),
    new Team('3', 'Borussia Mönchengladbach', 'bundesliga'),
    new Team('4', 'Werder Bremen', 'bundesliga'),
    new Team('5', 'Hamburger SV', 'bundesliga'),
    new Team('6', '1. FC Köln', 'bundesliga'),
    new Team('7', 'VfL Wolfsburg', 'bundesliga'),

    new Team('8', 'Ajax', 'eredivisie'),
    new Team('9', 'PSV', 'eredivisie'),
    new Team('10', 'Feyenoord', 'eredivisie'),
    new Team('11', 'AZ', 'eredivisie'),
    new Team('12', 'Twente', 'eredivisie'),
    new Team('13', 'ADO Den Haag', 'eredivisie'),

    new Team('14', 'Real Madrid', 'laliga'),
    new Team('15', 'Barcelona', 'laliga'),
    new Team('16', 'Atlético Madrid', 'laliga'),
    new Team('17', 'Athletic Bilbao', 'laliga'),
    new Team('18', 'Valencia', 'laliga'),
    new Team('19', 'Real Sociedad', 'laliga'),
    new Team('20', 'Deportivo La Coruna', 'laliga'),
    new Team('21', 'Sevilla', 'laliga'),
    new Team('22', 'Real Betis', 'laliga'),

    new Team('23', 'Benfica', 'ligasagres'),
    new Team('24', 'Porto', 'ligasagres'),
    new Team('25', 'Sporting CP', 'ligasagres'),
    new Team('26', 'Belenenses', 'ligasagres'),
    new Team('27', 'Boavista', 'ligasagres'),

    new Team('28', 'Saint-Étienne', 'ligue1'),
    new Team('29', 'Marseille', 'ligue1'),
    new Team('30', 'Nantes', 'ligue1'),
    new Team('31', 'Lyon', 'ligue1'),
    new Team('32', 'Monaco', 'ligue1'),
    new Team('33', 'Bordeaux', 'ligue1'),
    new Team('34', 'PSG', 'ligue1'),
    new Team('35', 'Nice', 'ligue1'),
    new Team('36', 'Lille', 'ligue1'),
    new Team('37', 'Montpellier', 'ligue1'),

    new Team('38', 'Arsenal', 'premier'),
    new Team('39', 'Blackburn Rovers', 'premier'),
    new Team('40', 'Chelsea', 'premier'),
    new Team('41', 'Leicester City', 'premier'),
    new Team('42', 'Manchester City', 'premier'),
    new Team('43', 'Manchester United', 'premier'),

    new Team('44', 'Juventus', 'seriea'),
    new Team('45', 'Milan', 'seriea'),
    new Team('46', 'Internazionale', 'seriea'),
    new Team('47', 'Genoa', 'seriea'),
    new Team('48', 'Torino', 'seriea'),
    new Team('49', 'Bologna', 'seriea'),
    new Team('50', 'Roma', 'seriea'),
    new Team('51', 'Lazio', 'seriea'),
    new Team('52', 'Napoli', 'seriea'),
    new Team('53', 'Fiorentina', 'seriea'),
    new Team('54', 'Cagliari', 'seriea'),
    new Team('55', 'Sampdoria', 'seriea'),
  ];

  constructor(private $timeout: ng.ITimeoutService) { }

  getTeam(id: string): Promise<Team> {
    let match = this.teams.find(function(team: Team) {
      return team.id === id;
    });
    return new Promise<Team>(resolve => setTimeout(resolve, delay)).
        then(() => match);
  }

  getTeamsForLeague(leagueId: string): Promise<Team[]> {
    let matches = this.teams.filter(function(team: Team) {
      return team.leagueId === leagueId;
    });
    return new Promise<Team>(resolve => setTimeout(resolve, delay)).
        then(() => matches);
  }

  getTeams(): Promise<Team[]> {
    return new Promise<Team>(resolve => setTimeout(resolve, delay)).
        then(() => this.teams);
  }
}

export const teamServiceModule = angular.module('teamServiceModule', []);
teamServiceModule.service('teamService', TeamService);

@NgModule({
  imports: [UpgradeModule],
  providers: [{
    provide: TeamService,
    useFactory: (i: ng.auto.IInjectorService) => i.get('teamService'),
    deps: ['$injector']
  }]
})
export class TeamServiceModule { }
