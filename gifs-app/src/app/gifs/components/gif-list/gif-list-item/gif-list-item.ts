import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  styleUrl: './gif-list-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListItem {
  imageUrl = input.required<string>();
}
