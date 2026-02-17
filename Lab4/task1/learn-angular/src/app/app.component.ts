import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header class="header">
      <span>Learn Angular — Tutorial</span>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .header {
      background: #3f51b5;
      color: #fff;
      padding: 0 24px;
      height: 52px;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
    }
  `]
})
export class AppComponent {}
