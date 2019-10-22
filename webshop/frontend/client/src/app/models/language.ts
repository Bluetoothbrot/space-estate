/* Author: mk303 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * Language model
 */
export class Language {
  constructor(
    public langCode: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * Language Adapter. Adapts any provided item to a Language if possible
 */
export class LanguageAdapter implements Adapter<Language> {
  adapt(item: any): Language {
    return new Language(
      item.langCode,
    );
  }
}
