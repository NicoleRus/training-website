import {
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
  ],
})
export class LoginFormComponent implements OnInit {
  isHome: boolean = true;
  checkboxVal: boolean = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome =
          event.url === '' || event.url === '.' || event.url === '/';
      }
    });
  }
}
