import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  addCharacter(character: Character): void {
    //this.characters.push(character);
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.unshift(newCharacter);
  }

  onDeleteCharacterById(id: string) {
    //this.characters.splice(id, 1);
    this.characters = this.characters.filter((x) => x.id !== id);
  }
}
