/* Author: mk303 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet, PlanetAdapter } from '../models/planet';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {

  private baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/planet';

  constructor(
    private http: HttpClient,
    private planetAdapter: PlanetAdapter) {}

  /**
   * Get all available planets from db
   * @return Observable array of Planets
   */
  getPlanets(): Observable<Planet[]> {
    const url = `${this.baseUrl}/`;
    return this.getPlanetList(url);
  }

  /**
   * Get all planets which are promoted currently - server side defined subset of all available planets.
   * @return Observable array of Planets
   */
  getPromoPlanets(): Observable<Planet[]> {
    const url = `${this.baseUrl}/promoplanet`;
    return this.getPlanetList(url);
  }

  /**
   * Load a specific planet from DB by its id
   * @param id Planets simple Name e.g. 'mars'
   * @return Observable Planet
   */
  getPlanet(id: string): Observable<Planet> {
    const url = `${this.baseUrl}/` + id;
    return this.http.get(url).pipe(map(item => this.planetAdapter.adapt(item)));
  }

  /**
   * Returns a list of Planets, depending on the input url
   * @param target ULR of the call
   * @return Observable array of Planets
   */
  private getPlanetList(url: string): Observable<Planet[]> {
    return this.http.get(url).pipe(map((data: any[]) => data.map(
      item => this.planetAdapter.adapt(item))));
  }

}
