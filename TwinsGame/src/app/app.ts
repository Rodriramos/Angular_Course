import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { Card } from './app.type';
import { CommonModule } from "@angular/common";
import confetti from 'canvas-confetti';

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
  victory = signal(false);

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

    if (this.everyCardMatched()) {
      this.showVictoryPopup();
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
    this.victory.set(false);
    this.initialGame();
  }

  everyCardMatched(): boolean {
    return this.cards.every(card => card.matched);
  }

  showVictoryPopup() {
    this.victory.set(true);
    // Crear canvas detrás del popup
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '998'; // detrás del popup
    document.body.appendChild(canvas);
    const myConfetti = confetti.create(canvas, { resize: true });
    // Explosión desde el centro
    myConfetti({
      particleCount: 200,
      spread: 360, // dispersión completa
      startVelocity: 45, // velocidad inicial
      origin: { x: 0.5, y: 0.5 } // centro de la pantalla
    });
    setTimeout(() => canvas.remove(), 3000);
  }
}
