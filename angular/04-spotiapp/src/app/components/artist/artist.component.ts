import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  loading: boolean = true;
  artist: any = {};
  topTracks: any[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {
    this.activatedRouter.params.subscribe(data => {
      this.getArtist(data['id']);
      this.getTopTracks(data['id']);
    });
  }

  getArtist(id: string) {
    this._spotifyService.getArtist(id)
      .subscribe((response: any) => {
        this.artist = response;
        this.loading = false;
      });
  }

  getTopTracks(id: string) {
    this._spotifyService.getTopTracks(id)
      .subscribe((response: any) => {
        console.log(response);
        this.topTracks = response;
        this.loading = false;
      });
  }
}
