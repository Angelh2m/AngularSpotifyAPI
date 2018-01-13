import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { log } from 'util';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public _spotify: SpotifyService
  ) { }

  stopClick(event: Event) {
    event.preventDefault();
    event. stopPropagation();
  }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe( id => {
        this._spotify.artist(id)
          // .map(element => element.id)
          .subscribe( artist => {
            console.log(artist);
            this.artist = artist;
          });
        this._spotify.getTopTracks(id)
          .map( (res: any ) => res.tracks)
          .subscribe( topTracks => {
            this.topTracks = topTracks;
            console.log(topTracks);
          });
      });
  }
}
