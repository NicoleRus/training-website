import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { MembershipsComponent } from './pages/memberships/memberships.component';
import { AccountComponent } from './pages/account/account.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: 'classes', component: ClassesComponent},
  {path: 'memberships', component: MembershipsComponent},
  {path: 'account', component: AccountComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }