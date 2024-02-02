import { Component, OnInit } from '@angular/core';
import { WeekCalendarComponent } from './week-calendar/week-calendar.component';
import { AppService } from '../../services/app/app.service';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [WeekCalendarComponent],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {
  classIDs: string[] = [];

  constructor(private appService: AppService) {
    // this.appService.classes.forEach((class) => {
      
    // })
  }

  classes = this.appService.classes;

}
