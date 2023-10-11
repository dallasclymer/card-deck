import { Component, Input, OnInit } from '@angular/core';

type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';
type Index = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() suit!: any;
  @Input() index!: any;

  constructor() {}

  ngOnInit(): void {}
}
