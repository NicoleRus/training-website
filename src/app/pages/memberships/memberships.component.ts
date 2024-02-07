import { Component } from '@angular/core';
import { AppService } from '../../services/app/app.service';
import { MembershipCardComponent } from './membership-card/membership-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [CommonModule, MembershipCardComponent],
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.scss'
})
export class MembershipsComponent {
  constructor(private appService: AppService) {}

  memberships = this.appService.memberships;
}
