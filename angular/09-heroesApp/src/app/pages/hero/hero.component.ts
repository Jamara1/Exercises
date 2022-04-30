import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  hero: HeroModel = new HeroModel();

  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');

    if (id !== 'new') {
      this._heroesService.getHero(id)
      .subscribe((response: any | HeroModel) => {
        this.hero = response;
        this.hero.id = id;
      });
    }
  }

  save(form: NgForm) {

    if (form.invalid) {
      console.log('Form invalid');
      return;
    }

    Swal.fire({
      title: 'Wait...',
      text: 'Saving information',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let petition: Observable<any>;

    if (this.hero.id) {
      petition = this._heroesService.update(this.hero);
    } else {
      petition = this._heroesService.create(this.hero);
    }

    petition.subscribe(response => {
      Swal.fire({
        title: this.hero.name,
        text: 'Updated successfully!',
        icon: 'success'
      });
    });
  }

}
