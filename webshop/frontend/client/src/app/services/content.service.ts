/* Author: mk303 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {StaticStrings, StaticStringsAdapter} from "../models/static-strings";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  private baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/content';

  private static staticStrings = null;

  constructor(private http: HttpClient,
              private staticStringsAdapter: StaticStringsAdapter) {}

  /**
   * Get content data by id
   * @return Observable object of any type
   */
  getContentById(id: number): Observable<any> {
    const url = `${this.baseUrl}/` + id;
    const res = this.http.get(url);
    console.log('Call to: '+`${this.baseUrl}/` + id+"\n" + "Result was: "+ JSON.stringify(res));
    return res;
  }

  /**
   * Returns the static strings field. If is is not initialises yet, a get call is made to get the data.
   * To make sure nothing is returned before data is available, the get call is wrapped into a Promise which is returned.
   * @return Promise of the StaticStrings object
   */
  getStaticStrings(): Promise<StaticStrings> {
    return new Promise<StaticStrings>( (resolve) => {
      if (ContentService.staticStrings == null) {
        console.log("ContentService.staticStrings was null");
        this.getContentById(15)
          .pipe(map(item => this.staticStringsAdapter.adapt(item))).subscribe(data => {

            ContentService.staticStrings = data;
            console.log("Init ContentService.staticStrings:",data);
            resolve(ContentService.staticStrings);
          });
      } else {
        resolve(ContentService.staticStrings);
      }
    });

  }
}
