/* Author: jm114, mk303 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Currency, CurrencyAdapter} from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/currency';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private currencyAdapter: CurrencyAdapter
  ) { }

  /**
   * Get all currencies from db
   */
  getCurrencies(): Observable<Currency[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url, this.httpOptions).pipe(map((data: any[]) => data.map(
      item => this.currencyAdapter.adapt(item))));
  }

  /**
   * Get current languages from db
   */
  getCurrentCurrency(): Observable<Currency> {
    const url = `${this.baseUrl}/currentCurrency`;
    return this.http.get(url, this.httpOptions).pipe(map(item => this.currencyAdapter.adapt(item)));
  }

  /**
   * Switch currencie
   */
  switchCurrency(id: string) {
    const url = `${this.baseUrl}/`;
    return this.http.post(url, {code: id}, this.httpOptions);
  }
}
