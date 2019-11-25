import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { EndComponent } from './components/end/end.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
{path: '', redirectTo: '/game', pathMatch: 'full'},
{path: 'game', component: HomeComponent},
{path: 'game/:NumID', component: GameComponent},
{path: 'game/:NumID/:status', component: EndComponent},
{path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NotFoundComponent, HomeComponent, GameComponent, EndComponent]
