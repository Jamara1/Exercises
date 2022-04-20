import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {

  loading: boolean;
  error: boolean;
  messageError: string = "";
  newSongs: any[] = [];

  constructor(private _spotifyService: SpotifyService,) {

    this.loading = true;
    this.error = false;

    this._spotifyService.getNewRealease()
      .subscribe({
        next: (response: any) => {
          this.newSongs = response;
          this.loading = false;
        },
        error: (err: any) => {
          this.loading = false;
          this.error = true;
          this.messageError = err.error.error.message;
        }
      });
  }

}
