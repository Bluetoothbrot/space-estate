/* Author: jm114 */

import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * OrderItem model
 */
export class OrderItem {
  constructor(
    public orderId: string,
    public items: any[],
    public totalPrice: number,
    public currency: string) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * OrderItem Adapter. Adapts any provided item to a OrderItem if possible
 */
export class OrderItemAdapter implements Adapter<OrderItem> {
  adapt(item: any): OrderItem {
    return new OrderItem(
      item.orderId,
      item.orderItemList,
      item.totalPrice,
      item.currency
    );
  }
}
