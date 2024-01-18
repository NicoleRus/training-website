import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private appService: AppService) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'resize', (event) => {
      if(this.el.nativeElement.offsetWidth < 700) this.appService.updateScreenSize(false);
    })
  }
}
