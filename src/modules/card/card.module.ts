import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DeckComponent } from './components/deck/deck.component';

@NgModule({
  declarations: [CardComponent, DeckComponent],
  imports: [CommonModule],
  exports: [CardComponent, DeckComponent],
})
export class CardModule {}
