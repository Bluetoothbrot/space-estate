/* Author: mk303 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * PlanetInfo model
 */
export class PlanetInfo {
  constructor(
    public contentId: number,
    public headline: string,
    public priceSquareKm: number,
    public availableSizeSquareKm: number,
    public amount: number,
    public button: string,
    public soldOut: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * PlanetInfo Adapter. Adapts any provided item to a PlanetInfo if possible
 */
export class PlanetInfoAdapter implements Adapter<PlanetInfo> {
  adapt(item: any): PlanetInfo {
    return new PlanetInfo(
      item.simpleName,
      item.texts.headline,
      item.texts.priceSquareKm,
      item.texts.availableSizeSquareKm,
      item.texts.amount,
      item.texts.button,
      item.texts.soldOut
    );
  }
}
