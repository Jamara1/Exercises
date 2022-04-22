import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tracks: any[]  = ['3rmo8F54jFF8OgYsqTxm5d', '0HqZX76SFLDz2aW8aiqi7G', '0lwUIYJfWGB8qUEAJtYfb6'];
  likes: any[] = [];

  constructor(private http: HttpClient) { }

  getQuery(query: string): Observable<Object> {
    const url: string = `https://api.spotify.com/v1/${query}`;

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQDNA1IiMywuNJfeWHX6HSfkC9LvxR-U207sb7MN2NcbdyS1JDfw2B3a7oZBZ1Q6K--miYEU2O9A2NSRz0g'
    });

    return this.http.get(url, { headers: headers });

  }

  getNewRealease(): Observable<Object> {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map((data: any) => data['albums'].items));
  }

  getArtists(text: string): Observable<Object> {
    return this.getQuery(`search?q=${text}&type=artist&limit=15`)
      .pipe(map((data: any) => data['artists'].items));
  }

  getArtist(id: string): Observable<Object> {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): Observable<Object> {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data['tracks']));
  }

  getTracks(id: string) {
    return this.getQuery(`tracks/${id}?country=us`)
      .pipe(map((data: any) => data));
  }

  searchMyLibrary(text: string) {

    let trackArr: any[] = [];
    text = text.toLowerCase();

    if (text === '') {
      return this.likes;
    }

    for (let i = 0; i < this.likes.length; i++) {
      const track = this.likes[i];

      let name = track.name.toLowerCase();


      if (name.indexOf(text) >= 0) {
        trackArr.push(track);
      }
    }

    return trackArr;

  }

  getDefault(): any[] {

    this.likes = [];
    this.tracks.map(id => {
      this.getTracks(id)
        .subscribe((response: any) => {
          this.likes.push(response);
        });
    });

    return this.likes;
  }

}
