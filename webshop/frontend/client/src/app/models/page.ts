/* Author: mk303, jm114 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * Page model
 */
export class Page {
  constructor(
    public pageId: number,
    public path: string,
    public title: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * Page Adapter. Adapts any provided item to a Page if possible
 */
export class PageAdapter implements Adapter<Page> {
  adapt(item: any): Page {
    return new Page(
      item.pageId,
      item.path,
      item.texts.title
    );
  }
}
