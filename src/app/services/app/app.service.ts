import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  mobileScreen = signal(false);
  gym_name: string = "H-Town Fitness";

  classes: {}[] = [
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

  constructor() { }

  updateScreenSize(isMobile: boolean) {
    this.mobileScreen.set(isMobile);
  }
}
