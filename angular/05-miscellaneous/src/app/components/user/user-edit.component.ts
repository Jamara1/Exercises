import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  template: `
    <p>
      edit-user works!
    </p>
  `,
  styles: [
  ]
})
export class UserEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent?.params.subscribe((params: any) => {
      console.log(params.id);
    });
  }

  ngOnInit(): void {
  }

}
