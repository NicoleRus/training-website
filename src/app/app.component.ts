import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  Renderer2
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';
import { AppService } from './services/app/app.service';
import {FormsModule} from '@angular/forms';
import { environment } from './data/firebase/firebase';
import {AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR} from "@angular/fire/compat/auth";
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
    TopNavComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add CUSTOM_ELEMENTS_SCHEMA here
  providers: [
    {provide: USE_AUTH_EMULATOR, useValue: !environment.production ? ['localhost', 9099] : undefined}  ],
})
export class AppComponent implements OnInit {
  isHome: boolean = true;
  firebaseUIReady: boolean = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private appService: AppService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeFirebase();

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

  initializeFirebase(): Promise<any> {
    if (isPlatformBrowser(this.platformId)) {

      return new Promise((resolve, reject) => {
        import('firebaseui-angular').then(firebaseUiAngular => {
          const { FirebaseUIModule } = firebaseUiAngular;
          resolve(FirebaseUIModule);
          this.firebaseUIReady = true;
        }).catch(error => {
          console.error('Error loading FirebaseUI:', error);
          reject(error);
        });
      });
    } else {
      return Promise.resolve(null);
    }
  }
  platformId(platformId: any) {
    throw new Error('Method not implemented.');
  }
}
