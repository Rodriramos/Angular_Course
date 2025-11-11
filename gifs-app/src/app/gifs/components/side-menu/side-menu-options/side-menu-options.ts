import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifsService } from "../../../services/gifs.service";

interface GifsSideMenuOptionsInterface {
  label: string;
  subLabel: string;
  router: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuOptions {
  gifService = inject(GifsService);

  menuOptions: GifsSideMenuOptionsInterface[] = [
    {
      icon: 'fa-solid fa-arrow-trend-up',
      label: 'Trending',
      subLabel: 'Popular GIFs',
      router: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Searcher',
      subLabel: 'Search GIFs',
      router: '/dashboard/search',
    }
  ];

  printKeys(key: string) {
    console.log(key);
  }
}
