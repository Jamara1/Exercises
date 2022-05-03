import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MapStyles } from 'src/app/map.style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {

  title = 'google-maps';

  private map: google.maps.Map;

  constructor() {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDhBrrwm15WzzLQyVktFgjeBpBJWHhoqt0',
    });

    loader.load().then(() => {
      console.log('Loader');

      const location = {
        lat: 4.5709,
        lng: -74.2973,
      };

      this.map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: location,
          zoom: 6,
          /* styles: MapStyles */
        }
      );

      const marker = new google.maps.Marker ({
        position: location,
        map: this.map
      });

    });
  }
}
