/* Author: mk303 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

export class Image {
  constructor(
    public contentId: number,
    public image: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class ImageAdapter implements Adapter<Image> {
  adapt(item: any): Image {
    return new Image(
      item.contentId,
      item.images.background_image
    );
  }
}
