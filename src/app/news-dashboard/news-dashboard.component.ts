import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.css']
})
export class NewsDashboardComponent implements OnInit {
  @Input() cSymbol: string;
  public companyNews;
  public noData: boolean;


  constructor(
    private readonly dashboardService: DashboardService,
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    // clean state
    this.companyNews = null;
    this.noData = false;

    try {
      this.companyNews = await this.dashboardService.getNews(this.cSymbol);
    } catch {
      this.noData = true;
    }
  }

}
