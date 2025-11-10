import { Component, computed, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';

interface Character {
  id: number,
  name: string,
  power: number
}

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

  addCharacter(name: string, power: number) {
    if (!name || !power || power <= 0) {
      return;
    }
    const newCharacter:Character = {
      id: this.characters().length + 1,
      name: name,
      power: power
    }
    this.characters.update((list) => [... list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
