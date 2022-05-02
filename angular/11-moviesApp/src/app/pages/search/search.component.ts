import { Movie } from './../../interfaces/billboard-response.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  valueSearch: string;
  movies: Movie[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private _moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((param: any) => {

      this.valueSearch = param.text;

      this._moviesService.searchMovies(param.text).subscribe(response => {
        this.movies = response;
      });
    });
  }

}
