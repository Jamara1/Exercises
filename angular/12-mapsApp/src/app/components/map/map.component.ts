import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Mark } from 'src/app/classes/mark.class';
import { MapStyles } from 'src/app/map.style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  public map: google.maps.Map;
  public marks: Mark[] = [];
  public showInfo: boolean = false;

  constructor() {
    const newMark = new Mark(4.5709, -74.2973);
    const newMark2 = new Mark(6.217, -75.567, 'Example', 'Description example');

    this.marks.push(newMark, newMark2);
  }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDhBrrwm15WzzLQyVktFgjeBpBJWHhoqt0',
    });

    loader.load().then(() => {
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

      this.marks.forEach((mark: Mark, index: number) => {
        const contentString = document.getElementById('content_' + index);

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });

        const marker = new google.maps.Marker({
          position: { lat: mark.lat, lng: mark.lng },
          map: this.map,
        });

        this.showInfo = true;

        marker.addListener('click', () => {
          infowindow.open({
            anchor: marker,
            map: this.map,
            shouldFocus: false,
          });
        });
      });
    });
  }

  addMark() {
    const newMark3 = new Mark(4.81321, -75.6946, 'Pereira');
    this.marks.push(newMark3);
  }
}
