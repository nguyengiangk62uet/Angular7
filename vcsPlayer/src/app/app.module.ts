import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule} from '@angular/forms';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { PlayerListService } from '../app/services/player-list.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from '../app/services/message.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerDetailsComponent,
    MessagesComponent,
    DashboardComponent
    ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    PlayerListService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
