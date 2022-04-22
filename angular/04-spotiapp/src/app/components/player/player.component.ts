import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnDestroy {
  track: any = {};
  uri: string = '';
  seek: number = 0;
  duration: number = 0;
  status: boolean = true;
  initial: boolean = false;
  currentTime: number = 0;
  audiobject: any = new Audio();
  url: string = 'https://open.spotify.com/embed/?uri=';
  audioEvents: string[] = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
  ];

  constructor(
    private activatedRouter: ActivatedRoute,
    private _spotifyService: SpotifyService,
    private router: Router
  ) {
    this.activatedRouter.params.subscribe((data) => {
      this.getTrack(data['id']);
    });
  }

  ngOnDestroy() {
    this.stop();
  }

  getTrack(id: string) {
    this._spotifyService.getTracks(id).subscribe((response: any) => {

      this.track = response;
      this.uri = response.uri;
    });
  }

  stream(url: string): Observable<string> {
    return new Observable((observer) => {
      this.audiobject.src = url;
      this.audiobject.load();
      this.audiobject.play();

      const handler = (event: Event) => {
        this.seek = this.audiobject.currentTime;
        this.duration = this.audiobject.duration;
        this.currentTime = this.audiobject.currentTime;
      };

      this.addEvent(this.audiobject, this.audioEvents, handler);

      return () => {
        this.audiobject.pause();
        this.audiobject.currentTime = 0;
        this.removeEvent(this.audiobject, this.audioEvents, handler);
      };
    });
  }

  addEvent(obj: any, events: any[], handler: any): void {
    events.forEach((event) => {
      obj.addEventListener(event, handler);
    });
  }

  removeEvent(obj: any, events: any[], handler: any): void {
    events.forEach((event) => {
      obj.removeEventListener(event, handler);
    });
  }

  setSeekTo(e: any) {
    this.audiobject.currentTime = e.target.value;
  }

  setVolume(e: any): void {
    this.audiobject.volume = e.target.value;
  }

  open(): void {
    this.stream(this.track.preview_url).subscribe((event) => {});

    this.initial = true;
    this.status = false;
  }

  play(): void {
    if (!this.initial) {
      this.open();
    }
    this.audiobject.play();
    this.status = false;
  }

  pause(): void {
    this.audiobject.pause();
    this.status = true;
  }

  stop() {
    this.audiobject.pause();
    this.audiobject.currentTime = 0;
  }

  next() {}

  back() {}

  navigateArtist() {
    this.router.navigate(['artist', this.track.artists[0].id]);
  }
}
