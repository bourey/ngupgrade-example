import { League } from './league';

let delay = 0;
//let delay = 2000;


export class LeagueService {
  leagues: League[] = [
    new League('bundesliga', 'Bundesliga', 'Germany'),
    new League('laliga', 'La Liga', 'Spain'),
    new League('eredivisie', 'Eredivisie', 'Netherlands'),
    new League('ligue1', 'Ligue 1', 'France'),
    new League('premier', 'Premier League', 'England'),
    new League('seriea', 'Italian Serie A', 'Italy'),
    new League('ligasagres', 'Liga Sagres', 'Portugal'),
  ];

  constructor(private $timeout: ng.ITimeoutService) { }

  getLeagues(): Promise<League[]> {
    return new Promise<League>(resolve => setTimeout(resolve, delay)).
        then(() => this.leagues);
  }

  getLeague(id: string): Promise<League> {
    let match = this.leagues.find(function(league: League) {
        return league.id === id;
    });
    return new Promise<League>(resolve =>
        setTimeout(resolve, delay)).then(() => match);
  }
}

export const LeagueServiceModule = angular.module('LeagueServiceModule', []);
LeagueServiceModule.service('leagueService', LeagueService);
