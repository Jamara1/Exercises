import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {

  newSongs: any[] = [];

  constructor(private _spotifyService: SpotifyService,) {
    this._spotifyService.getNewRealease()
      .subscribe((response: any) => {
        this.newSongs = response;
      });
  }

}
