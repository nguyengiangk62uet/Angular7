import { NgModule } from '@angular/core';
import { PlayerComponent } from '../components/player/player.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'player', component: PlayerComponent },
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  //declarations: [],
  imports: [
    //CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
