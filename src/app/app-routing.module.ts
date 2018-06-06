import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EpisodeBlurbsComponent} from './episode-blurbs/episode-blurbs.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {SeasonsComponent} from './seasons/seasons.component';
import {SupportComponent} from './support/support.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  <Route>{
    path: '',
    redirectTo: 'episodes',
    pathMatch: 'full'
  },
  < Route > {
    path: 'episodes',
    component: EpisodeBlurbsComponent
  },
  <Route>{
    path: 'seasons',
    component: SeasonsComponent
  },
  <Route>{
    path: 'support',
    component: SupportComponent
  },
  <Route>{
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'}),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
