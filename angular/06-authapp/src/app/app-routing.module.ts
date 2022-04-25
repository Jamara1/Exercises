import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Services */
import { AuthGuard } from './services/auth.guard';

/* Components */
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuard]
   },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
