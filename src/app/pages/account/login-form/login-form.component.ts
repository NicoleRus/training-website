import {
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet
} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { SupaService } from '../../../services/data/supa.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
})
export class LoginFormComponent implements OnInit {
  isHome: boolean = true;
  checkboxVal: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: SupaService
  ) {
    this.loginForm = this.formBuilder.group({
      username: formBuilder.control('', Validators.required),
      password: formBuilder.control('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome =
          event.url === '' || event.url === '.' || event.url === '/';
      }
    });
  }

  onSubmit() {
    this.auth
      .signIn(this.loginForm.value.email, this.loginForm.value.password)
      .then((res) => {
      console.log(res)
      if (res.data.user?.role === 'authenticated') {
        console.log('authenticated!')
        // this.router.navigate(['/dashboard'])
      }
      })
      .catch((err) => console.log(err));
  }
}
