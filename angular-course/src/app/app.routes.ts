import { Routes } from '@angular/router';
import  { CounterPageComponent } from './pages/counter-page/counter-page.component'
import { HeroPageComponent } from './pages/hero/hero-page.component'
import { DragonBallPageComponent } from './pages/dragonball-page/dragonball-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonBallPageComponent
  },
  {
    path: "**",
    redirectTo: ''
  }
];
