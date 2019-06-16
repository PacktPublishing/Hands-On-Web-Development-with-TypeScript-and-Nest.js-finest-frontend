import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoDashboardComponent } from './info-dashboard/info-dashboard.component';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoDashboardComponent,
    NewsDashboardComponent,
    StockDashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
