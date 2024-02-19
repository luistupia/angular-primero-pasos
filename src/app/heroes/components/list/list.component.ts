import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  deletedHero?: string = '';

  removeLastHero(): void {
    //this.heroNames.shift();
    this.deletedHero = this.heroNames.pop();
  }
}
