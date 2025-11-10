import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegetta', power: 8000},
    {id: 3, name: 'Piccolo', power: 3000},
    {id: 4, name: 'Yamcha', power: 500}
  ])

  addCharacter(newCharacter: Character) {
    this.characters.update(characters => [...characters, newCharacter]);
  }
}
