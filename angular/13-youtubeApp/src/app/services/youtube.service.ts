import { Item } from './../models/youtube.model';
import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Video, YoutubeResponse } from '../models/youtube.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyBsX6OXpZ7mEb4BFGSvsP_qYAsC518npZs';
  private playList = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(private httpClient: HttpClient) {}

  getVideos(): Observable<Video[]> {
    const url = `${this.youtubeUrl}/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', 10)
      .set('playlistId', this.playList)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken);

    return this.httpClient.get<YoutubeResponse>(url, { params }).pipe(
      map(response => {
        this.nextPageToken = response.nextPageToken;
        return response.items;
      }),
      map((items) => items.map((video: Item) => video.snippet))
    );
  }
}
