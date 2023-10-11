import { Component, Input, OnInit } from '@angular/core';

type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';
type Index = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';

const cardFaces: string[] = [
  'CA',
  'DA',
  'HA',
  'SA',
  'C2',
  'D2',
  'H2',
  'S2',
  'C3',
  'D3',
  'H3',
  'S3',
  'C4',
  'D4',
  'H4',
  'S4',
  'C5',
  'D5',
  'H5',
  'S5',
  'C6',
  'D6',
  'H6',
  'S6',
  'C7',
  'D7',
  'H7',
  'S7',
  'C8',
  'D8',
  'H8',
  'S8',
  'C9',
  'D9',
  'H9',
  'S9',
  'C10',
  'D10',
  'H10',
  'S10',
  'CJ',
  'DJ',
  'HJ',
  'SJ',
  'CQ',
  'DQ',
  'HQ',
  'SQ',
  'CK',
  'DK',
  'HK',
  'SK',
];

function breakDownCard(card: string): [Suit, Index] | null {
  const index = card.slice(1) as Index;
  const suit =
    card.slice(0, 1) === 'C'
      ? 'clubs'
      : card.slice(0, 1) === 'D'
      ? 'diamonds'
      : card.slice(0, 1) === 'H'
      ? 'hearts'
      : card.slice(0, 1) === 'S'
      ? 'spades'
      : null;
  if (suit && index) {
    return [suit, index];
  } else {
    return null;
  }
}

function getRandomItems(arr: string[], count: number): string[] {
  console.warn(cardFaces);
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

const randomItems = getRandomItems(cardFaces, 5);
console.log(randomItems);

for (const card of randomItems) {
  const breakdown = breakDownCard(card);
  if (breakdown) {
    const [suit, index] = breakdown;
    console.warn(`Card: ${index} of ${suit}`);
  } else {
    console.warn(`Invalid card: ${card}`);
  }
}

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
})
export class DeckComponent implements OnInit {
  @Input() cards!: string[];

  hand: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.hand = randomItems;
    // this.hand = this.cards;
  }
}
