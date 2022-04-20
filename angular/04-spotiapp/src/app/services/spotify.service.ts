import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewRealease() {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQB_BnZWfLu7AlmPVnCbKudAe7QY997Jbgm4TtVqly_Ve7lYRn4djQ65AlBqPWx71HOJY7zf-WA7fiHXmdQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: headers });

  }

  getArtist(text: string) {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQAS7nMLT9pSvJVhDV8LmszdK7SuEqsORBW6fY6i5TPr0KwvnLR9ZWixvx-ucodHoHOZk-7yuv5SrPg51gI'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${text}&type=artist&limit=15`, { headers: headers });
  }
}
