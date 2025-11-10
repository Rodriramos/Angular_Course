import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";

@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPage { }
