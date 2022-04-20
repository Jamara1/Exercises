import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string): Observable<Object> {
    const url: string = `https://api.spotify.com/v1/${query}`;

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQB2drI-1XUSvDD24E4JXnT6YX6GqJUfdkqhZFoopzHlvBSauUxdFlvZjdckcREVXXTk04g4tU3BYJEsA3o'
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
}
