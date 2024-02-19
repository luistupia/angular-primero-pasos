import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Component Counter</h3>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class CounterComponent {
  public counter: number = 1;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(): void {
    if (this.counter == 0) {
      return;
    }
    this.counter -= 1;
  }

  reset() {
    this.counter = 0;
  }
}
