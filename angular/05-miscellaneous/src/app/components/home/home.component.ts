import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-ng-switch></app-ng-switch>
    <app-css></app-css>
    <app-class></app-class>

    <h2>Directives: <small>Highlighted</small></h2>

    <br>

    <p [appHighlighted]="'red'">Hello world!</p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit
,OnChanges
,DoCheck
,AfterContentInit
,AfterContentChecked
,AfterViewInit
,AfterViewChecked
,OnDestroy {

  constructor() { }

  ngOnInit(): void {
    alert('ngOnInit');
  }

  ngOnChanges(): void {
    alert('ngOnChanges');
  }

  ngDoCheck(): void {
    alert('ngDoCheck');
  }

  ngAfterContentInit(): void {
    alert('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    alert('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    alert('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    alert('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    alert('ngOnDestroy');
  }

}
