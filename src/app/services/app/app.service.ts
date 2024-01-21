import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  mobileScreen = signal(false);
  gym_name: string = "H-Town Fitness";

  classes: {name: string, description: string}[] = [
    {
      name: 'Barbell',
      description: 'Focus on barbell movements such as power cleans and snatches.'
    },
    {
      name: 'HIIT',
      description: 'HIIT stands for high intensity interval training. These classes will get your heart rate up with a varation of movements.'
    },
    {
      name: 'Not Crossfit',
      description: "It's just like Crossfit, we just can't call it that."
    },
    {
      name: 'Open gym',
      description: "Free time to work on whatever your heart desires!."
    }
  ]

  memberships: {}[] = [
    {
      name: '2x/week',
      price: '$100/month'
    },
    {
      name: '4x/week',
      price: '$150/month'
    },
    {
      name: 'unlimited',
      price: '$180/month'
    }
  ]

  classTimes: string[] = [
    '5:30am',
    '6:30am',
    '9:00am',
    '10:00am',
    '4:30pm',
    '5:30pm',
    '6:30pm',
  ]

  schedule: { day: string, schedule: { [x: string]: {name: string, description: string}} }[] = [
    {
      day: 'Monday',
      schedule: {
        [this.classTimes[0]]: this.classes[0],
        [this.classTimes[1]]: this.classes[0],
        [this.classTimes[4]]: this.classes[0],
        [this.classTimes[5]]: this.classes[0],
        [this.classTimes[6]]: this.classes[0],
      }
    },
    {
      day: 'Tuesday',
      schedule: {
        [this.classTimes[0]]: this.classes[0],
        [this.classTimes[1]]: this.classes[0],
        [this.classTimes[4]]: this.classes[0],
        [this.classTimes[5]]: this.classes[0],
        [this.classTimes[6]]: this.classes[0],
      }
    },
    {
      day: 'Wednesday',
      schedule: {
        [this.classTimes[0]]: this.classes[0],
        [this.classTimes[1]]: this.classes[0],
        [this.classTimes[4]]: this.classes[0],
        [this.classTimes[5]]: this.classes[0],
        [this.classTimes[6]]: this.classes[0],
      }
    },
    {
      day: 'Thursday',
      schedule: {
        [this.classTimes[0]]: this.classes[0],
        [this.classTimes[1]]: this.classes[0],
        [this.classTimes[4]]: this.classes[0],
        [this.classTimes[5]]: this.classes[0],
        [this.classTimes[6]]: this.classes[0],
      }
    },
    {
      day: 'Friday',
      schedule: {
        [this.classTimes[0]]: this.classes[0],
        [this.classTimes[1]]: this.classes[0],
        [this.classTimes[4]]: this.classes[0],
        [this.classTimes[5]]: this.classes[0],
        [this.classTimes[6]]: this.classes[0],
      }
    },
    {
      day: 'Saturday',
      schedule:
        {
          [this.classTimes[2]]: this.classes[2],
          [this.classTimes[3]]: this.classes[3]
        }
    },
  ]

  constructor() { }

  updateScreenSize(isMobile: boolean) {
    this.mobileScreen.set(isMobile);
  }
}
