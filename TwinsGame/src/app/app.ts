import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { Card } from './app.type';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule]
})
export class App implements OnInit {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  isChecking: boolean = false;

  ngOnInit(): void {
    this.initialGame();
  }

  initialGame() {
    const images = [
      '🐶',
      '🐱',
      '🐭',
      '🐹',
      '🐰',
      '🦊',
      '🐻',
      '🐼',
      '🐶',
      '🐱',
      '🐭',
      '🐹',
      '🐰',
      '🦊',
      '🐻',
      '🐼',
    ];

    this.cards = images.map((image, index) => ({
      id: index,
      imageUrl: image,
      flipped: false,
      matched: false
    })).sort(() => Math.random() - 0.5);
  }

  flipCard(card: Card) {
    if (this.isChecking || card.flipped || card.matched) {
      return;
    }
    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkForMatch();
    }
  }

  checkForMatch() {
    this.isChecking = true;
    const [firstCard, secondCard] = this.flippedCards;
    if (firstCard.imageUrl === secondCard.imageUrl) {
      firstCard.matched = true;
      secondCard.matched = true;
      this.resetFlippedCards();
    }
    setTimeout(() => {
      this.flippedCards.forEach(card => card.flipped = false);
      this.flippedCards = [];
      this.isChecking = false;
    }, 500);
  }

  resetFlippedCards() {
    this.flippedCards = [];
    this.isChecking = false;
  }

  resetGame(): void {
    this.initialGame();
  }
}
