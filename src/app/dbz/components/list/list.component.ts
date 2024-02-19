import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();
  //onDelete = new EventEmitter<number>();

  @Input()
  characterList: Character[] = [
    {
      id: '',
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteCharacter(id: string): void {
    this.onDeleteId.emit(id);
  }
}
