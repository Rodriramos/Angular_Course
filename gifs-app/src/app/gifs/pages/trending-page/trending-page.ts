import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPage { }
