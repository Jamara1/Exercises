import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  lat: number = 40;
  lng: number = -3;
  zoom: number = 6;

  mapTypeId: string = 'HYBRID';

}

