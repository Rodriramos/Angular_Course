import { Component, signal, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'counter-page',
  standalone: true,
  imports: [],
  templateUrl: `./counter-page.component.html`,
  styleUrl: `./counter-page.component.css`,
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  increasedBy(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;  
  }

  increasedCounterSignalBy(value: number) {
    this.counterSignal.update((current) => this.counterSignal() + value);
  }

  resetCounterSignal() {
    this.counterSignal.set(10);
  }
}
