import { Component, ViewChild, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Marker } from 'src/app/classes/marker.class';
import { MapEditComponent } from '../map-edit/map-edit.component';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css'],
})
export class Map2Component implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 4.5709, lng: -74.2973 },
    zoom: 6,
  };
  markers: Marker[] = [];
  infoMarker: Marker = new Marker({ lat: 4.5709, lng: -74.2973 });

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers') as string);
    }
  }

  ngOnInit(): void {}

  createMarker(event: google.maps.MapMouseEvent) {
    if (!event.latLng) {
      return;
    }

    const newMarker = new Marker(event.latLng.toJSON());
    this.markers.push(newMarker);

    this.saveStorage();

    // Simple message with an action.
    this.snackBar.open('Marker added', 'Close', { duration: 2000 });
  }

  updateMarker(marker: Marker) {
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: { title: marker.title, desc: marker.desc },
    });

    dialogRef.afterClosed().subscribe((result: Marker) => {
      console.log(result);

      if (!result) {
        return;
      }

      marker.title = result.title;
      marker.desc = result.desc;

      this.markers[marker.index] = { ...marker };

      this.saveStorage();
      this.snackBar.open('Marker added', 'Close', { duration: 2000 });
    });
  }

  deleteMarker(index: number) {
    this.markers.splice(index, 1);
    this.saveStorage();
    this.snackBar.open('Marker deleted', 'Close', { duration: 2000 });
  }

  openInfoWindow(marker: MapMarker, info: Marker, i: number) {
    this.infoMarker = { ...info, index: i };
    this.infoWindow.open(marker);
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

}
