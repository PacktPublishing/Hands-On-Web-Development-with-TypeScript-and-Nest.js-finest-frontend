import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoDashboardComponent } from './info-dashboard/info-dashboard.component';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './auth/login.guard';
import { RegisterGuard } from './auth/register.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [RegisterGuard] },
  {
    path: 'register', component: RegisterComponent, canActivate: [RegisterGuard]
  },
  { path: 'info', component: InfoDashboardComponent, canActivate: [LoginGuard] },
  { path: 'news', component: NewsDashboardComponent, canActivate: [LoginGuard] },
  { path: 'stock', component: StockDashboardComponent, canActivate: [LoginGuard] },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
