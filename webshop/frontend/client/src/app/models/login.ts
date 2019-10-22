/* Author: mk303, jm114 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * Login model
 */
export class Login {
  constructor(
    public contentId: number,
    public headline: string,
    public username: string,
    public password: string,
    public buttonText: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * Login Adapter. Adapts any provided item to a Login if possible
 */
export class LoginAdapter implements Adapter<Login> {
  adapt(item: any): Login {
    return new Login(
      item.contentId,
      item.texts.headline,
      item.texts.username,
      item.texts.password,
      item.texts.buttonText
    );
  }
}
