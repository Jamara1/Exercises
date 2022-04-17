import { Component } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {

  status: boolean = true;

  phrase: any = {
    message: 'Great power requires great responsibility',
    author: 'Ben Parker'
  };

  characters: string[] = ['Spiderma', 'Venom', 'Dr. Octopus']
}
