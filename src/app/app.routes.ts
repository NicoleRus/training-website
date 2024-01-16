import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { MembershipsComponent } from './pages/memberships/memberships.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'memberships', component: MembershipsComponent}
];
