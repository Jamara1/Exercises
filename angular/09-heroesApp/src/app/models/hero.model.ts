export class HeroModel {

  id?: string | null;
  name: string;
  power: string;
  live: boolean;

  constructor() {
    this.live = true;
  }

}
