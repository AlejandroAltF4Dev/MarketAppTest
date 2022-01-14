import { Component } from '@angular/core';
import { initEffects } from '@ngneat/effects';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'markets';
  constructor() {
    initEffects();
  }
}
