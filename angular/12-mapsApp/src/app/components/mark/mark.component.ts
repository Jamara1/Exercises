import { Component, Input } from '@angular/core';
import { Mark } from 'src/app/classes/mark.class';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css'],
})
export class MarkComponent {
  @Input() marks: Mark[] = [];
  @Input() showInfo: boolean = false;

  constructor() {}
}
