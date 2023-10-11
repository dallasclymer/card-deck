import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'card-stack';

  cards = ['HA', 'HK', 'HQ', 'HJ', 'H10'];
}
