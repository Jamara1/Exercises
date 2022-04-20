import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify successfully!');
  }

  getNewRealease() {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQDsge9CSO2zGEzxzeruvfhgCh3vBqLeU4wTi19TK8avooeMQkwTSNHyFBvULdZBXY4FCuHIwATBwauWaz4'
    });

    return this.http.get('	https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: headers });
  }
}
