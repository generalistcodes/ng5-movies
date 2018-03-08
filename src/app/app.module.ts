import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { MovieFilterPipe } from './shared/movie-filter.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  declarations: [ 
    AppComponent,
    MovieFilterPipe,
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
