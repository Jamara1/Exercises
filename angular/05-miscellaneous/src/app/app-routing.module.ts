import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ROUTES_USER } from './components/user/user-routing.module';
import { UserComponent } from './components/user/user.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    children: ROUTES_USER
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
