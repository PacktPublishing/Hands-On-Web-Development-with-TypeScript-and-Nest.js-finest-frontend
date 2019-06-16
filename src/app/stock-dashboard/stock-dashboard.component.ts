import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {
  @Input('cSymbol') cSymbol: string;
  companyStock: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.companyStock = `Here is stock data for ${this.cSymbol}`;
  }

}
