import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { MovieFilterPipe } from './shared/movie-filter.pipe';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MovieFilterPipe,
    DetailComponent,
    HomeComponent,
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
