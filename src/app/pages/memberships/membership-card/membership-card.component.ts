import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-membership-card',
  standalone: true,
  imports: [],
  templateUrl: './membership-card.component.html',
  styleUrl: './membership-card.component.scss'
})
export class MembershipCardComponent {
  @Input() name?: string;
  @Input() cost?: number;

  date = 'February 2024';
}
