import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-new',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: [
  ]
})
export class UserNewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent?.params.subscribe((params: any) => {
      console.log(params.id);
    });
  }

  ngOnInit(): void {
  }

}
