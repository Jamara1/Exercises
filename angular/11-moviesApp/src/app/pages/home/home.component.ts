import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/interfaces/billboard-response.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const top = (document.documentElement.scrollTop || document.body.scrollTop) + 1500;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)

    console.log(top, max);

    if (top > max) {

      if (this._moviesService.loading) {
        return;
      }

      this._moviesService.getBillboard().subscribe(movies => {
        this.movies.push(...movies)
      })
    }
  }

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getBillboard()
      .subscribe(movies => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }

  ngOnDestroy(): void {
      this._moviesService.resetBillboardPage();
  }

}
