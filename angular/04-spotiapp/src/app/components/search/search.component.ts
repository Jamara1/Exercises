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

  constructor(private _spotifyService: SpotifyService) { }

  search(text: string) {

    console.log(text);
    this._spotifyService.getArtist(text)
    .subscribe((response: any) => {
      console.log(response.artists.items);
      this.artists = response.artists.items;
    });

  }

}
