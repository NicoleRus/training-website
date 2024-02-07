import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { UserService } from '../../services/user/user.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, LoginFormComponent, SignupFormComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  constructor(private userService: UserService) {}
  formType: 'login' | 'signup' = 'signup';

  user = this.userService.user;
  loggedIn = this.userService.loggedIn;
}
