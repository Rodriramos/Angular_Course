import type{ Gif } from "../interfaces/gif.interface";
import type{ GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
  static MapGipghyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    };
  }

  static MapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map( this.MapGipghyItemToGif );
  }
}