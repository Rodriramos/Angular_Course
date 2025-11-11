import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cell',
  imports: [CommonModule],
  templateUrl: './cell.html',
  styleUrl: './cell.css',
})
export class Cell {
  @Input() value: 'X' | 'O' | null = null;
}
