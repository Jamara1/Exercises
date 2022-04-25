import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <p>
      user-detail works!
    </p>
  `,
  styles: [
  ]
})
export class UserDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent?.params.subscribe((params: any) => {
      console.log(params.id);
    });
  }

  ngOnInit(): void {
  }

}
