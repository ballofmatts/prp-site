import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EpisodeBlurbsComponent} from './episode-blurbs/episode-blurbs.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {SeasonsComponent} from './seasons/seasons.component';
import {SupportComponent} from './support/support.component';
import {AboutComponent} from './about/about.component';
import {EpisodePermalinkComponent} from './episode-permalink/episode-permalink.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  <Route>{
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  <Route>{
    path: 'episodes',
    component: EpisodeBlurbsComponent
  },
  <Route>{
    path: 'episode/:id',
    component: EpisodePermalinkComponent
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
  },
  <Route>{
    path: 'contact',
    component: ContactUsComponent
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
export class AppRoutingModule {
}
