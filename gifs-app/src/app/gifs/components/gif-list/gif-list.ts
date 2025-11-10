import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';

@Component({
  selector: 'gifs-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
  styleUrl: './gif-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifList { }
