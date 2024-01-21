import { Component } from '@angular/core';
import { AppService } from '../../../services/app/app.service';

@Component({
  selector: 'app-week-calendar',
  standalone: true,
  imports: [],
  templateUrl: './week-calendar.component.html',
  styleUrl: './week-calendar.component.scss'
})
export class WeekCalendarComponent {
  constructor(private appService: AppService) {}

  times = this.appService.classTimes;

  schedule = this.appService.schedule;
}
