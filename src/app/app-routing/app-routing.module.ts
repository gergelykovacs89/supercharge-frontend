import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from '../home/index/index.component';
import {GameComponent} from '../home/game/game.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

