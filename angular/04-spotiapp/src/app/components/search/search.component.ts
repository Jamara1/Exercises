import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  noFound: boolean;
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) {
    this.noFound = false;
    this.loading = false;
  }

  search(text: string) {

    this.noFound = false;
    this.loading = true;

    if (text === '') {
      this.artists = [];
      this.loading = false;
      return;
    }

    this._spotifyService.getArtists(text)
    .subscribe((response: any) => {
      if (response.length === 0) {
        this.noFound = true;
      }
      this.artists = response;
      this.loading = false;
    });

  }

}
