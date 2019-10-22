/* Author: mk303 */

import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * ShoppingCartItem model
 */
export class ShoppingCartItem {
  constructor(
    public simpleName: string,
    public name: string,
    public priceSquareKm: number,
    public image: string,
    public sizeSquareKm: number,
    public maxAvailableSquareKm: number,
    public totalPrice: number) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * ShoppingCartItem Adapter. Adapts any provided item to a ShoppingCartItem if possible
 */
export class ShoppingCartItemAdapter implements Adapter<ShoppingCartItem> {
  adapt(item: any): ShoppingCartItem {
    return new ShoppingCartItem(
      item.simpleName,
      item.name,
      item.priceSquareKm,
      item.image,
      item.sizeSquareKm,
      item.maxAvailableSquareKm,
      item.totalPrice
    );
  }
}
