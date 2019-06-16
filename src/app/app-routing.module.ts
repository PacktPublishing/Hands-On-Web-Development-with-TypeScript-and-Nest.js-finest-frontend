import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoDashboardComponent } from './info-dashboard/info-dashboard.component';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'info', component: InfoDashboardComponent },
  { path: 'news', component: NewsDashboardComponent },
  { path: 'stock', component: StockDashboardComponent },
  { path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
