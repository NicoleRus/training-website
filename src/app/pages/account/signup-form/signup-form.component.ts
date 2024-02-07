import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: '../login-form/login-form.component.scss'
})
export class SignupFormComponent {
}
