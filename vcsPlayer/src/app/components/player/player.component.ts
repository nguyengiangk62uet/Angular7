import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/players';
import { listPlayers } from '../../list-players';
import { PlayerListService } from '../../services/player-list.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Player = {
    id: 1,
    name: "Bigkoro",
    club: "Phong Vu Buffalo",
    year: 2000
  }
  // players = listPlayers;
  players: Player[];
  constructor(private playerService: PlayerListService) { }

  getPlayersFromService(): void {
    // this.players = this.playerService.getPlayers();
    this.playerService.getPlayers().subscribe(updatedPlayers => this.players = updatedPlayers)
      
    
  }
  ngOnInit() {
    this.getPlayersFromService();
  }

  selectedPlayer: Player;
  onSelect(player: Player): void {
    this.selectedPlayer = player;
    console.log(`selectedPlayer = ${JSON.stringify(this.selectedPlayer)}`);
  }

  removePlayer(id: number) {
    const index = this.players.findIndex(player => player.id === id);
    this.players.splice(index, 1);
  }
  addPlayer() {
    this.players.unshift({
      id: this.players.length + 1,
      name: this.newName,
      year: this.newYear,
      club: this.newClub
    });
    this.newId = null;
    this.newName = '';
    this.newYear = null;
    this.newClub = '';
  }
  newId = null;
  newName = '';
  newYear = null;
  newClub = '';
}
