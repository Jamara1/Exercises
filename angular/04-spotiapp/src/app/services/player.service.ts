import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  track: any = {};
  uri: string = '';
  seek: number = 0;
  duration: number = 0;
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

  constructor() { }

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

  open(url: string): void {
    this.stream(url).subscribe((event) => { });
  }

  play(url: string): void {
    this.open(url);
    this.audiobject.play();
  }

  pause(): void {
    this.audiobject.pause();
  }

  stop() {
    this.audiobject.pause();
    this.audiobject.currentTime = 0;
  }

  next() { }

  back() { }
}
