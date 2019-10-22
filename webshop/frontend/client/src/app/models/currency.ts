/* Author: jm114 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

export class Currency {
  constructor(
    public code: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class CurrencyAdapter implements Adapter<Currency> {
  adapt(item: any): Currency {
    return new Currency(
      item.code,
    );
  }
}
