import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css',
})
export class HeroeComponent {
  name: string = 'ironman';
  age: number = 45;

  //TODO: los getters se usa como propiedades
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroe(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 50;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
