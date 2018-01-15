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

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

// Item service

// import { ItemsComponent } from './components/items/items.component';
// import { ItemService } from './services/item.service';
import { TokenService } from './services/token.service';

//
// import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavBarComponent,
    NoPhotoPipe,
    ArtistComponent,
    // ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Firestore start
    AngularFirestoreModule,
    // Make sure you add the two parameters
    AngularFireModule.initializeApp(environment.firebase, 'savingtokens'),
    // Firestore end
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: SearchComponent },
      { path: 'search', component: SearchComponent },
      // { path: 'items', component: ItemsComponent },
      { path: 'artist/:id', component: ArtistComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'home' },
    ])
  ],
  providers: [
    // AngularFireDatabase,
    // AngularFireDatabaseModule,
    SpotifyService,
    // ItemService,
    TokenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
