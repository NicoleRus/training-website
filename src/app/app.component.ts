import {
  Component,
  ElementRef,
  OnInit,
  Renderer2
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';
import { AppService } from './services/app/app.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { environment } from './data/firebase/firebase';
import {AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR} from "@angular/fire/compat/auth";
import { FirebaseUIModule } from 'firebaseui-angular';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AngularFireAuthModule,
    RouterOutlet,
    TopNavComponent,
  ],
  providers: [
    {provide: USE_AUTH_EMULATOR, useValue: !environment.production ? ['localhost', 9099] : undefined},
  ],
})
export class AppComponent implements OnInit {
  isHome: boolean = true;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'resize', (event) => {
      if (this.el.nativeElement.offsetWidth > 700) {
        this.appService.updateScreenSize(false);
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome =
          event.url === '' || event.url === '.' || event.url === '/';
      }
    });
  }
}
