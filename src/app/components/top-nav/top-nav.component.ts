import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoComponent],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  gym_name: string = "H-Town Fitness";

  links: {label: string, id: number, path: string}[] = [
    {label: "Classes", id: 1, path: 'classes'},
    {label: "Memberships", id: 2, path: 'memberships'},
    {label: "Resources", id: 3, path: 'resources'},
    {label: "Account", id: 4, path: 'account'}
  ]
}
