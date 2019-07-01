import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {
  @Input() cSymbol: string;
  protected companyStock;
  protected noData: boolean;


  constructor(
    private readonly dashboardService: DashboardService,
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    // clean state
    this.companyStock = null;
    this.noData = false;

    try {
      this.companyStock = JSON.stringify(await this.dashboardService.getStock(this.cSymbol));
    } catch {
      this.noData = true;
    }
  }

}
