import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';

import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NoPhotoPipe } from './pipes/no-photo.pipe';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavBarComponent,
    NoPhotoPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'artist/:id', component: ArtistComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'home' },
    ])
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
