import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingComponent } from './layout/landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieInfoComponent } from './layout/movie-info/movie-info.component';
import { MovieListComponent } from './layout/movie-list/movie-list.component';
import {TableModule} from 'primeng/table';
import {TreeModule} from 'primeng/tree';
import { BrowseMovieComponent } from './layout/browse-movie/browse-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    LayoutComponent,
    MovieInfoComponent,
    MovieListComponent,
    BrowseMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
