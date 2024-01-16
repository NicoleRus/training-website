import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { AppService } from '../../services/app/app.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LogoComponent],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  constructor(private appService: AppService, private route: ActivatedRoute) {}
  gym_name = this.appService.gym_name;
  menu_open: boolean = false;


  ngOnInit() {
    console.log(this.route); // ActivatedRout
    console.log(this.route.url); // UrlSegment[]
  }

  links: {label: string, id: number, path: string}[] = [
    {label: "Classes", id: 1, path: 'classes'},
    {label: "Memberships", id: 2, path: 'memberships'},
    {label: "Resources", id: 3, path: 'resources'},
    {label: "Account", id: 4, path: 'account'}
  ]

  onRouterLinkActive(event: boolean) {
    console.log(event);
  }
}
