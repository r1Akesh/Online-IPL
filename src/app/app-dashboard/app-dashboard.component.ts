import { AppService, playerInfo } from './../service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css'],
})
export class AppDashboardComponent implements OnInit {
  availablePlayers: playerInfo[];
  selectedPlayers: playerInfo[];
  totalAmount:number;
  usedAmount:number;
  remainingAmount:number;
  teamStrength:any;
  constructor(public apiService: AppService) {
    this.availablePlayers = [];
    this.selectedPlayers = [];
    this.totalAmount = 1000000; //setting budget by default.
  }

  ngOnInit() {
    this.apiService.getPlayersList().subscribe((data) => this.availablePlayers = data);
  }

  selectPlayer(playerIndex:number):void{
    this.selectedPlayers.push(this.availablePlayers[playerIndex]);
    this.availablePlayers.splice(playerIndex,1);
    this.updateTotalExpenditure();  
    this.calculateTeamStrength();
  }

  removeSelectedPlayer(index:number):void{
    this.availablePlayers.push(this.selectedPlayers[index]);
    this.selectedPlayers.splice(index,1);
    this.updateTotalExpenditure();
    this.calculateTeamStrength();
  }

  updateTotalExpenditure():void{
    this.usedAmount = this.getTotalExpenditure();
    this.remainingAmount = this.totalAmount - this.usedAmount;
  }

  getTotalExpenditure():number{
    return this.selectedPlayers.reduce((acc,curr) => {
      acc+=curr.playerValue;
      return acc;
    },0)
  }

  calculateTeamStrength():void{
    let totalStrength =  this.selectedPlayers.reduce((acc,curr) => {
      acc = acc+ this.getPlayerStrength(curr)
      return acc;
    },0);
    this.teamStrength = totalStrength / (this.selectedPlayers.length * 3);
  }

  getPlayerStrength(player):number{
    let strength = 300 - (player.battingRank + player.bowlingRank + player.overAllRank);
    return strength;
  }

}
