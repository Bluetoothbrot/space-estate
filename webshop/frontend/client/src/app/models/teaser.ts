/* Author: jm114, mk303 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * Teaser model
 */
export class Teaser {
  constructor(
    public contentId: number,
    public image: string,
    public logo: string,
    public headline: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * Teaser Adapter. Adapts any provided item to a Teaser if possible
 */
export class TeaserAdapter implements Adapter<Teaser> {
  adapt(item: any): Teaser {
    return new Teaser(
      item.contentId,
      item.images.background_image,
      item.images.logo,
      item.texts.headline
    );
  }
}


