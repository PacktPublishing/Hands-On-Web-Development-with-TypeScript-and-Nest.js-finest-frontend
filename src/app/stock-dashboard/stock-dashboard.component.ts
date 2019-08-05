import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {
  @Input() cSymbol: string;
  public companyStock;
  public noData: boolean;


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

      const [result] = await this.dashboardService.getStock(this.cSymbol) as any;
      this.companyStock = result.price;
    } catch {
      this.noData = true;
    }
  }

}
