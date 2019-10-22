/* Author: jm114, mk303 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/user';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  /**
   * Post call to the server trying to authenticate the user by username and password
   * @param user Username
   * @param pass Password
   * @return Observable object of any type
   */
  login(user: string, pass: string): Observable<any> {
    const url = `${this.baseUrl}/`;
    return this.http.post(url, {"email": user, "password": pass}, this.httpOptions);
  }

  /**
   * Get call to the server requesting if current user is logged in
   * @return Observable string - true if is logged in - false if not
   */
  isLoggedIn(): Observable<any> {
    const url = `${this.baseUrl}/loggedin`;
    return this.http.get(url, this.httpOptions);
  }

  /**
   * Post call to the server to log out the current user
   * @return Observable object  of any type
   */
  logout(): Observable<any> {
    const url = `${this.baseUrl}/logout`;
    return this.http.post(url, this.httpOptions);
  }

  /**
   * Get call to loads the name of the current user
   * @return Observable object of any type
   */
  getUserName(): Observable<any> {
    const url = `${this.baseUrl}/name`;
    return this.http.get(url, this.httpOptions);
  }
}
