import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../Services/dragonball.service';

@Component({
  selector: 'app-dragonball-page.component',
  imports: [CharacterAdd, CharacterList],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonBallPageComponent {
  public dragonballService = inject(DragonballService);
}
