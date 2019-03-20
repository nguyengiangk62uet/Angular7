import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/players';
import { PlayerListService } from '../../services/player-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerListService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players.slice(0, 4));
  }

}
