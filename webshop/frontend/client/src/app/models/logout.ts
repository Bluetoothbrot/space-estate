/* Author: mk303 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

export class Logout {
  constructor(
    public contentId: number,
    public headline: string,
    public text: string,
    public buttonText: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * Logout Adapter. Adapts any provided item to a Logout if possible
 */
export class LogoutAdapter implements Adapter<Logout> {
  adapt(item: any): Logout {
    return new Logout(
      item.contentId,
      item.texts.headline,
      item.texts.text,
      item.texts.buttonText
    );
  }
}
