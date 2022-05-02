import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-sliceshow',
  templateUrl: './cast-sliceshow.component.html',
  styleUrls: ['./cast-sliceshow.component.css']
})
export class CastSliceshowComponent implements OnInit, AfterViewInit {

  @Input() casts: Cast[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

  ngOnInit(): void {
  }

}
