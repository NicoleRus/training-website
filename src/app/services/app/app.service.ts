import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  gym_name: string = "H-Town Fitness";

  constructor() { }
}
