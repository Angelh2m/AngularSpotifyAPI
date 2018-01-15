import { Component, OnInit, ViewChild } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
// Firebase
import { TokenService } from '../../services/token.service';
import { ArtistComponent } from '../artist/artist.component';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @ViewChild(ArtistComponent) art: ArtistComponent;

  searchTerm: string = ' ';
  items: string = '';
  id: string = '';



  constructor(
    public _spotify: SpotifyService,
    private _token: TokenService,

  ) { }

  ngOnInit() {
    this._token.getItems().subscribe( x => {
      this.id = x;
      console.log(x[0].token);
    });



  }



  // update(){
  //   console.log(this.id[0]);
  //   this._token.deleteItem(this.id[0]);
  // }


  searchArtist(){


    if (this.searchTerm.length == 0) {
      return;
    }
    this._spotify.getArtist(this.searchTerm).subscribe(data => { }, error => {


      // If fails erase the old Token
      // this._token.deleteItem(this.id[0]);
      this._spotify.newToken();

    });
  }

}

