import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: 'classes', loadComponent: () => import('./pages/classes/classes.component').then((com) => com.ClassesComponent)},
  {path: 'memberships', loadComponent: () => import('./pages/memberships/memberships.component').then((com) => com.MembershipsComponent)},
  {path: 'account', loadComponent: () => import('./pages/account/account.component').then((com) => com.AccountComponent)},
  {path: '', component: HomeComponent},
  // {path: '**', component: 404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }