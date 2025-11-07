import { UpperCasePipe } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'hero-page',
  standalone: true,
  imports: [ UpperCasePipe ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => `El nombre es ${this.name()} y su edad es ${this.age()}`)

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(value: number) {
    this.age.update((current) => value);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
