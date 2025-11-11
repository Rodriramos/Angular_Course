import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cell } from '../cell/cell';

@Component({
  selector: 'board',
  imports: [Cell, CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board implements OnInit {
  cells: any[] = [];
  xIsNext: boolean = true;
  winner: string | null = null;

  constructor() {}
    
  ngOnInit(): void {
    this.newGame();
  }
  
  newGame(): void {
    this.cells = Array(9).fill(null); 
    this.winner = null;
    this.xIsNext = true;
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number): void {
    if (!this.cells[idx]) {
      this.cells.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): string | null {
    const lines = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6], 
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
        return this.cells[a];
      } 
    }
    return null;
  }
}
