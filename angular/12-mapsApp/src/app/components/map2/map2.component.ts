import { Component, ViewChild, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Marker } from 'src/app/classes/marker.class';
import { MapEditComponent } from '../map-edit/map-edit.component';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css'],
})
export class Map2Component implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 4.5709, lng: -74.2973 },
    zoom: 6,
  };
  markers: Marker[] = [];

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

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.markers = result;
    });
  }

  deleteMarker(index: number) {
    this.markers.splice(index, 1);
    this.saveStorage();
    this.snackBar.open('Marker deleted', 'Close', { duration: 2000 });
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

}
