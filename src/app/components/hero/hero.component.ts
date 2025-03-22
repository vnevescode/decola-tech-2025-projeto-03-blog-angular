import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  email = '';
  subscribe() {
    alert(`Subscribed with: ${this.email}`);
    this.email = '';
  }
}
