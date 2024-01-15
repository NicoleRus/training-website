import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { UnderTheFoldComponent } from './components/under-the-fold/under-the-fold.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TopNavComponent, HeroComponent, UnderTheFoldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
