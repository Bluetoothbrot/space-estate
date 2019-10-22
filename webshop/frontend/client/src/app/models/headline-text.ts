/* Author: mk303 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * HeadlineText model
 */
export class HeadlineText {
  constructor(
    public contentId: number,
    public headline: string,
    public text: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class HeadlineTextAdapter implements Adapter<HeadlineText> {
  adapt(item: any): HeadlineText {
    return new HeadlineText(
      item.contentId,
      item.texts.headline,
      item.texts.text
    );
  }
}
