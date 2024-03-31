import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { SupaService } from '../../../services/data/supa.service';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: '../login-form/login-form.component.scss'
})
export class SignupFormComponent {
  registerForm!: FormGroup;

  constructor(
    private formBuildrer: FormBuilder,
    private auth: SupaService
  ) {
    this.registerForm = this.formBuildrer.group({
      first_name: formBuildrer.control('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: formBuildrer.control('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: formBuildrer.control('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]),
      password: formBuildrer.control('', [
        Validators.required,
        Validators.minLength(7)
      ]),
      subscribe: formBuildrer.control(true, [Validators.nullValidator])
    });
  }

  onSubmit() {
    this.auth
      .signUp(this.registerForm.value.email, this.registerForm.value.password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
