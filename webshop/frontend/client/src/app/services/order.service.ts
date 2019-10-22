/* Author: jm114, mk303 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {OrderItemAdapter} from "../models/order-item";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/order';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private orderItemAdapter: OrderItemAdapter) { }

  /**
   * Submit the current shopping cart
   * @return Observable object of any type
   */
  submitOrder(): Observable<any> {
    // Log post attempt and what should be added to the cart
    console.log('POST ATTEMPT: Trying to submit the current order.');

    // Post call to server
    return this.http.post(this.baseUrl, this.httpOptions);
  }

  /**
   *  Get Array with all orders from Database.
   *  Map the Orders-Array in the service and
   *  @return adapted order Array with Item Array inside.
   */
  getOrderOverview(): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.get(url, this.httpOptions).pipe(map((data: any[]) => data.map(
      item => this.orderItemAdapter.adapt(item))));
  }
}
