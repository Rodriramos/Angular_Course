import { Component, computed, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-page.component',
  imports: [CharacterAdd, CharacterList],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonBallPageComponent {
  name = signal('Gohan');
  power = signal(100);
  
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegetta', power: 8000},
    {id: 3, name: 'Piccolo', power: 3000},
    {id: 4, name: 'Yamcha', power: 500}
  ])

  addCharacter(newCharacter: Character) {
    this.characters.update(characters => [...characters, newCharacter]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
