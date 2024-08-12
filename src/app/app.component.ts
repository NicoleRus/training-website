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
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    TopNavComponent
  ],
})
export class AppComponent implements OnInit {
  isHome: boolean = true;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private appService: AppService,
    private router: Router,
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
