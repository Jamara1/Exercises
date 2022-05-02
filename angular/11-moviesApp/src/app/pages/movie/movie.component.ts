import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieResponse } from 'src/app/interfaces/movie-response.interface';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/credits-response.interface';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent implements OnInit {

  public movie: MovieResponse;
  public actors: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private _moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    combineLatest([
      this._moviesService.getMovieDetail(id),
      this._moviesService.getCast(id)
    ]).subscribe(([movie, cast]) => {
      if (!movie) {
        this.router.navigate(['home']);
        return;
      }

      this.movie = movie;
      this.actors = cast.filter(actor => actor.profile_path !== null);
    });

    /* this._moviesService.getMovieDetail(id).subscribe(movie => {
      if (!movie) {
        this.router.navigate(['home']);
        return;
      }

      this.movie = movie;
    });

    this._moviesService.getCast(id).subscribe(cast => {
      this.actors = cast.filter(actor => actor.profile_path !== null);
    }); */
  }

  onBack() {
    this.location.back();
  }
}
