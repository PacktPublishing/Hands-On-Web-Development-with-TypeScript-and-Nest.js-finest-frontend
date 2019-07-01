import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  infoUrl = `${environment.SERVER_URL}/info`;
  newsUrl = `${environment.SERVER_URL}/news`;
  stockUrl = `${environment.SERVER_URL}/stock`;

  constructor(private readonly httpClient: HttpClient) { }

  async getInfo(symbol: string) {
    const data = await this.httpClient.get(`${this.infoUrl}?symbol=${symbol}`).toPromise();
    return data;
  }

  async getNews(symbol: string) {
    return await this.httpClient.get(`${this.newsUrl}?symbol=${symbol}`).toPromise();
  }

  async getStock(symbol: string) {
    return await this.httpClient.get(`${this.stockUrl}?symbol=${symbol}`).toPromise();
  }
}
