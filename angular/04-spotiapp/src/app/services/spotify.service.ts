import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url: string = `https://api.spotify.com/v1/${query}`;

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQB_BnZWfLu7AlmPVnCbKudAe7QY997Jbgm4TtVqly_Ve7lYRn4djQ65AlBqPWx71HOJY7zf-WA7fiHXmdQ'
    });

    return this.http.get(url, { headers: headers });

  }

  getNewRealease() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map((data: any) => data['albums'].items));
  }

  getArtist(text: string) {
    return this.getQuery(`search?q=${text}&type=artist&limit=15`)
      .pipe(map((data: any) => data['artists'].items));
  }
}
