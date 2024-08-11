import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { UnderTheFoldComponent } from '../../components/under-the-fold/under-the-fold.component';
import { UICardComponent } from '../../components/ui-card/ui-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, UnderTheFoldComponent, UICardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
