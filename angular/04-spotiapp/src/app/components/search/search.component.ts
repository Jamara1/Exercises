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

    console.log(text);
    this._spotifyService.getArtist(text)
    .subscribe((response: any) => {
      this.loading = true;
      this.artists = response;
      this.loading = false;
    });

  }

}
