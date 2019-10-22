/* Author: mk303 */

import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * Planet model
 */
export class Planet {
  constructor(
    public simpleName: string,
    public name: string,
    public description: string,
    public totalSize: number,
    public soldSizeSquareKm: number,
    public priceSquareKm: number,
    public maxAvailableSquareKm: number,
    public image: string) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * Planet Adapter. Adapts any provided item to a Planet if possible
 */
export class PlanetAdapter implements Adapter<Planet> {
  adapt(item: any): Planet {
    return new Planet(
      item.simpleName,
      item.texts.name,
      item.texts.description,
      item.totalSize,
      item.soldSizeSquareKm,
      item.priceSquareKm,
      (item.totalSize-item.soldSizeSquareKm),
      item.image
    );
  }
}
