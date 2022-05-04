export class Marker {
  constructor(
    public position: google.maps.LatLngLiteral,
    public title: string = 'Untitled',
    public desc: string = 'No description',
    public index: number = 0
  ) {}
}
