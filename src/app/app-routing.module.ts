import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './layout/landing/landing.component';
import {AppComponent} from './app.component';
import {MovieInfoComponent} from './layout/movie-info/movie-info.component';
import {MovieListComponent} from './layout/movie-list/movie-list.component';
import {BrowseMovieComponent} from './layout/browse-movie/browse-movie.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'landing', component: LandingComponent},
  { path: 'movieInfo', component: MovieInfoComponent},
  { path: 'movieList', component: MovieListComponent},
  { path: 'browse', component: BrowseMovieComponent},
  { path: '**', redirectTo: '/landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
