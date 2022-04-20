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
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) {
    this.loading = false;
  }

  search(text: string) {

    this.loading = true;

    if (text === '') {
      this.artists = [];
      this.loading = false;
      return;
    }



    this._spotifyService.getArtists(text)
    .subscribe((response: any) => {
      this.artists = response;
      this.loading = false;
    });

  }

}
