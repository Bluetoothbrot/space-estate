/* Author: mk303 */
import { Injectable } from '@angular/core';
import {Language, LanguageAdapter} from "../models/language";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/language';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private languageAdapter: LanguageAdapter) {}

  /**
   * Get all languages provided from db
   * @return Observable array of Languages
   */
  getLanguages(): Observable<Language[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(map((data: any[]) => data.map(
      item => this.languageAdapter.adapt(item))));
  }

  /**
   * Init call to server to initialise languages and to get a initial language.
   * * @return Observable initial Language
   */
  initLanguage(): Observable<Language> {
    const url = `${this.baseUrl}/init`;
    return this.http.get(url).pipe(map(item => this.languageAdapter.adapt(item)));
  }

  /**
   * Get current languages from db
   * @return Observable current Language
   */
  getCurrentLanguage(): Observable<Language> {
    const url = `${this.baseUrl}/currentLanguage`;
    return this.http.get(url).pipe(map(item => this.languageAdapter.adapt(item)));
  }

  /**
   * Switch language depending on provided language code
   * @param language_code of desired language
   * @return Observable object of any type
   */
  switchLanguage(language_code: string): Observable<any> {
    const url = `${this.baseUrl}/`;
    return this.http.post(url, {'langCode': language_code}, this.httpOptions);
  }
}
