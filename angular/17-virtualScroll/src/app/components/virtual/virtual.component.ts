import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styles: [],
})
export class VirtualComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  people = Array(1000).fill(0);

  constructor() {}

  ngOnInit(): void {
    console.log(this.people);
  }

  goStart() {
    this.viewport.scrollToIndex(0);
  }
  goMiddle() {
    this.viewport.scrollToIndex(this.people.length / 2);
  }

  goEnd() {
    this.viewport.scrollToIndex(this.people.length);
  }
}
