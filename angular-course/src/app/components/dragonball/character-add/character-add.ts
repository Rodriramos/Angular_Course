import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  styleUrl: './character-add.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();
  
  addCharacter(name: string, power: number) {
    if (!name || !power || power <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      power: power
    }
    
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }
  
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
