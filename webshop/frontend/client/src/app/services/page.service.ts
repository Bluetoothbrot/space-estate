import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Page, PageAdapter} from "../models/page";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/page';

  constructor(
    private http: HttpClient,
    private pageAdapter: PageAdapter) {}

  /**
   * Returns a list of Pages, which then can be displayed in navigation
   * @return Observable array of Pages
   */
  public getPageList(): Observable<Page[]> {
    return this.http.get(this.baseUrl).pipe(map((data: any[]) => data.map(
      item => this.pageAdapter.adapt(item))));
  }
}
