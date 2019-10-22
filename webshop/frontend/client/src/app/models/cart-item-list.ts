/* Author: mk303 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * CartItemList model
 */
export class CartItemList {
  constructor(
    public contentId: number,
    public item: string,
    public amount: string,
    public price: string,
    public totalPrice: string,
    public buttonText: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * CartItemList Adapter. Adapts any provided item to a CartItemList if possible
 */
export class CartItemListAdapter implements Adapter<CartItemList> {
  adapt(item: any): CartItemList {
    return new CartItemList(
      item.contentId,
      item.texts.item,
      item.texts.amount,
      item.texts.price,
      item.texts.total_price,
      item.texts.button
    );
  }
}
