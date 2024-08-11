import { Component, HostBinding, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss'
})
export class UICardComponent {
  accentCard = input(false);
  title = input('');
  constructor() {}
}
