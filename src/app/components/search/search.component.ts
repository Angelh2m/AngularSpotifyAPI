import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string = ' ';

  constructor(public _spotify: SpotifyService) { }

  ngOnInit() {
  }

  getT() {
    this._spotify.newToken();

  }

  searchArtist(){
    if (this.searchTerm.length == 0) {
      return;
    }
    this._spotify.getArtist(this.searchTerm).subscribe(data => { }, error => {

      this._spotify.newToken();

    });
  }

}
