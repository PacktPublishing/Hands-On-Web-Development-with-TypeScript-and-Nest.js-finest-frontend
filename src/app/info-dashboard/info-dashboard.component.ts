import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrls: ['./info-dashboard.component.css']
})
export class InfoDashboardComponent implements OnInit {
  @Input('cSymbol') cSymbol: string;
  companyInfo: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.companyInfo = `Here is data for ${this.cSymbol}`;
  }

}
