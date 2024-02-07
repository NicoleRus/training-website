import { Injectable, signal } from '@angular/core';
import { User } from '../../data/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn: boolean = false;

  user: User | null = null;
}
