import { catchError } from 'rxjs/operators';
import { MovieResponse } from './../interfaces/movie-response.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BillboardResponse, Movie } from './../interfaces/billboard-response.interface';
import { Observable, map, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cast, CreditsResponse } from '../interfaces/credits-response.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = 'https://api.themoviedb.org/3';
  private billboardPage = 1;
  public loading: boolean = false;

  constructor(private httpClient: HttpClient) { }

  get params() {
    return {
      api_key: '9e38ab9d57f75f496877f1734391d9d6',
      language: 'es-Es',
      page: this.billboardPage
    };
  }

  resetBillboardPage() {
    this.billboardPage = 1;
  }

  getBillboard(): Observable<Movie[]> {

    if (this.loading) {
      return of([]);
    }

    this.loading = true;

    return this.httpClient.get<BillboardResponse>(`${this.url}/movie/now_playing`, {params: this.params})
    .pipe(
      map(response => response.results),
      tap(() => {
        this.billboardPage += 1;
        this.loading = false;
      })
    );

  }

  searchMovies(query: string): Observable<Movie[]> {

    const params = {...this.params, page: 1, query}

    return this.httpClient.get<BillboardResponse>(`${this.url}/search/movie`, { params: params })
    .pipe(
      map(response => response.results)/* ,
      tap(() => {
        this.billboardPage += 1;
        this.loading = false;
      }) */
    );
  }

  getMovieDetail(id: number): Observable<MovieResponse | null> {
    return this.httpClient.get<MovieResponse>(`${this.url}/movie/${id}`, { params: this.params })
    .pipe(
      catchError(() => of(null))
    );
  }

  getCast(id: number): Observable<Cast[]> {
    return this.httpClient.get<CreditsResponse>(`${this.url}/movie/${id}/credits`, { params: this.params })
      .pipe(
        map(response => response.cast),
        catchError(() => of([]))
      );
  }

}
