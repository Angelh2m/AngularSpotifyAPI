import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  urlSpotify = 'https://api.spotify.com/v1/';
  token = '';

  constructor(private http: HttpClient) { }


  newToken(){
   this.http.get('http://localhost:3000/token')
    .subscribe( (data: any ) => this.token = data.token);
  }


  private getHeaders(){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });

    return headers;
  }


  getTopTracks(id) {

    const headers = this.getHeaders();

    const url = `${this.urlSpotify}artists/${ id }/top-tracks?country=US`;

    return this.http.get(url, { headers });

  }

  artist(id: string){

    const header = this.getHeaders();

    const url = `${this.urlSpotify}artists/${ id }`;

    return this.http.get(url, { headers: header });
      // .map( (res: any) => this.artists =  res.artists.items );
  }

  getArtist(searchTerm) {

    const headers = this.getHeaders();

    const url = `${this.urlSpotify}search?query=${ searchTerm }&type=artist&market=US&offset=0&limit=20`;

    return this.http.get(url, { headers })
      .map( (res: any) => this.artists =  res.artists.items );
  }

}
