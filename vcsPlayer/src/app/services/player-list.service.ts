import { Injectable } from '@angular/core';
import { listPlayers } from '../list-players';
import { Player } from '../../models/players';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../services/message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()

export class PlayerListService {
  private playerURL = 'http://5c74f06be24a2e001477f3a5.mockapi.io/api/v1/players';
  getPlayers(): Observable<Player[]> {
    // this.messageService.add(`${new Date().toLocaleString()}`);
    // return of(listPlayers);
    return this.http.get<Player[]>(this.playerURL).pipe(
      tap(receivedPlayers => console.log(`receivedMovies = ${JSON.stringify(receivedPlayers)}`)),
      catchError(error => of([]))
    );

  }

  constructor(
    private http: HttpClient, 
    public messageService: MessageService) { }
}
