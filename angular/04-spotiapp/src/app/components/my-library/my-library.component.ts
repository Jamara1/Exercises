import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
})
export class MyLibraryComponent {

  loading: boolean;
  likes: any[] = [];
  text: string = '';

  constructor(
    private _spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.likes = this._spotifyService.getDefault();
    this.search(this.text);
  }

  search(text: string) {
    this.likes = this._spotifyService.searchMyLibrary(text);
    this.loading = false;
  }

}
