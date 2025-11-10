import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsSideMenuHeader as SideMenuHeader } from "./side-menu-header/side-menu-header";
import { GifsSideMenuOptions as SideMenuOptions } from "./side-menu-options/side-menu-options";

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu { }
