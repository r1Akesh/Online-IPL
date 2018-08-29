import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {  } from 'rxjs/operators';

export interface playerInfo{
  playerName:string;
  playerId:any;
  playerValue:number;
  battingRank:number;
  bowlingRank:number;
  overAllRank:number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  testvar:string = 'rakesh';
  availablePlayers:playerInfo[];
  selectedPlayers:playerInfo[];
  constructor() {
    /**
     * Dummy data set containing list of players.
     */
    this.availablePlayers = [
      {
        playerName:'Player-1',
        playerId:1,
        playerValue:10000,
        bowlingRank:1,
        battingRank:1,
        overAllRank:1
      },
      {
        playerName:'Player-2',
        playerId:2,
        playerValue:20000,
        bowlingRank:2,
        battingRank:2,
        overAllRank:2
      },
      {
        playerName:'Player-3',
        playerId:3,
        playerValue:30000,
        bowlingRank:3,
        battingRank:3,
        overAllRank:3
      },
      {
        playerName:'Player-4',
        playerId:4,
        playerValue:40000,
        bowlingRank:4,
        battingRank:4,
        overAllRank:4
      }
    ]
  }

  getPlayersList(){
    return of(this.availablePlayers);
  }
}
