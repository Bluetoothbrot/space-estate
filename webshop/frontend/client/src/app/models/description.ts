/* Author: mk303 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

export class Description {
  constructor(
    public contentId: number,
    public headline: string,
    public text: string,
    public button: string,
    public buttonLink: string,
    public image: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class DescriptionAdapter implements Adapter<Description> {
  adapt(item: any): Description {
    return new Description(
      item.contentId,
      item.texts.headline,
      item.texts.text,
      item.texts.button,
      item.texts.buttonLink,
      item.images.background_image
    );
  }
}
