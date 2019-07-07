import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrls: ['./info-dashboard.component.css']
})
export class InfoDashboardComponent implements OnInit {
  @Input() cSymbol: string;
  protected companyInfo;
  protected noData: boolean;

  constructor(
    private readonly dashboardService: DashboardService,
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    // clean state
    this.companyInfo = null;
    this.noData = false;

    try {
      const cInfo = await this.dashboardService.getInfo(this.cSymbol);
      this.companyInfo = Object.entries(cInfo);
    } catch {
      this.noData = true;
    }
  }

}
