import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params:any) => {
      console.log(params.id);
    });
  }

  ngOnInit(): void {
  }

}
