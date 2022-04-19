import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Captain America';
  name2: string = 'JoHaN AmArA';
  characters: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  percentage: number = 0.234;
  salary: number = 1234.5;
  date: Date = new Date();
  enable: boolean = false;

  language: string = 'es';
  videoLink: string = 'https://www.youtube.com/embed/nlTBwNqvVn8';

  valuePromise: Promise<string> = new Promise<string>(response => {
    setTimeout(() => {
      response('Successfully!');
    }, 4500);
  });

  hero: any = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    address: {
      street: 'First',
      house: 20
    }
  }

  getPassword(): string {

    let value: string= "";

    if (this.enable) {
      value = this.name;
    } else {
      value = '*'.repeat(this.name.length);
    }

    return value;

  }
}
