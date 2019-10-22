/* Author: mk303 */
import {Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ShoppingCartItem} from "../models/shopping-cart-item";
import {map} from "rxjs/operators";
import {Planet, PlanetAdapter} from "../models/planet";
import {PlanetsService} from "./planets.service";
import {Subject, Subscription} from "rxjs";
import {MessageService} from "./message.service";
import {ContentService} from "./content.service";
import {StaticStrings} from "../models/static-strings";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/cart';

  private shoppingCartItems: ShoppingCartItem[];
  private currentCartItemSize: number = 0;
  private shoppingCartTotalPrice: number = 0;
  private staticStrings: StaticStrings;
  @Output() shoppingCartItemsEmitter = new Subject<ShoppingCartItem[]>();
  @Output() currentCartItemSizeEmitter = new Subject<number>();
  @Output() shoppingCartTotalPriceEmitter = new Subject<number>();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private planetsService: PlanetsService,
              private planetAdapter: PlanetAdapter,
              private messageService: MessageService,
              private contentService: ContentService) {

    this.contentService.getStaticStrings().then((data) => {
      this.staticStrings = data;
    })
  }

  /**
   * Get all shopping cart items of current cart
   * @return current shopping cart as array of ShoppingCartItem
   */
  getCurrentShoppingCartItems(): ShoppingCartItem[] {
    return this.shoppingCartItems;
  }

  /**
   * Get current shopping cart size
   * @return number of shopping cart items in the current shopping cart
   */
  getCurrentShoppingCartSize(): number {
    return this.currentCartItemSize;
  }

  /**
   * Get current shopping cart total price
   * @return total price of all shopping cart items in the current shopping cart
   */
  getShoppingCartTotalPrice(): number {
    return this.shoppingCartTotalPrice;
  }

  /**
   * Return a ShoppingCartItem if it exists in the current shopping cart - if not return null
   * @param id of desired ShoppingCartItem
   * @return ShoppingCartItem
   */
  getShoppingCartItem(id: string): ShoppingCartItem {
    if(this.shoppingCartItems != null) {
      for (let i = 0; i < this.shoppingCartItems.length; i++) {
        if (this.shoppingCartItems[i].simpleName == id) {
          return this.shoppingCartItems[i];
        }
      }
    } else {
      return null;
    }
  }

  ///// CRUD ACTIONS /////

  /**
   * Add an item to the current shopping cart
   */
  addItemToShoppingCart(simpleName, amount): Subscription {

    // Prepare payload
    const payload = {
      "simpleName": simpleName,
      "sizeSquareKm": amount
    };

    // Log post attempt and what should be added to the cart
    console.log('POST ATTEMPT: Adding: ' + amount + 'km² of `' + simpleName + '` to cart.\nPayload is:');
    console.log(payload);

    // Post call to server
    return this.http.post(this.baseUrl, payload, this.httpOptions).subscribe(

      // --- RESPONSE --- //
      (res) => {
        // Log response
        console.log('POST SUCCESSFUL: Added: ' + amount + 'km² of `' + simpleName + '` to cart.');
        console.log('Response was: ' + JSON.stringify(res))
      },

      // --- ERROR --- //
      (err) => {
        // Log error
        console.log('Error was: ' + JSON.stringify(err))
      },

      // --- COMPLETE --- //
      () => {
        // Tell the user adding the item was successful
        this.messageService.showSuccessMessage(this.staticStrings.PRODUCT_ADDED_SUCCESSFUL_1+' '+amount+' km² '+simpleName+' '+this.staticStrings.PRODUCT_ADDED_SUCCESSFUL_2);

        // Cart changed - reload cart
        this.updateShoppingCart();
      }
    );
  }

  /**
   * Update an item of the current shopping cart
   */
  updateShoppingCartItem(simpleName, newAmount) {

    // Prepare payload
    const payload = {
      "simpleName": simpleName,
      "sizeSquareKm": newAmount
    };

    // Log post attempt and what should be added to the cart
    console.log('PATCH ATTEMPT: Updating: ' + simpleName + ' to `' + newAmount + '` km².\nPayload is:');
    console.log(payload);

    // Post call to server
    return this.http.patch(this.baseUrl, payload, this.httpOptions).subscribe(
      res => {
        if (res != null) {
          // Log successful patch attempt
          console.log('PATCH SUCCESSFUL: Updating: `' + simpleName + '` to `' + newAmount + '` km².\nResponse is:');
          console.log(res);

          this.messageService.showSuccessMessage(this.staticStrings.SHOPPING_CART_UPDATE_SUCCESSFUL);
        } else {
          // Since update failed we need to restore the original value
          //this.resetItemAmount();
          this.messageService.showErrorMessage(this.staticStrings.SHOPPING_CART_UPDATE_FAILED);
        }
      },
      (err) => {
        console.log('Error: ' + err.error);
        console.log('Name: ' + err.name);
        console.log('Message: ' + err.message);
        console.log('Status: ' + err.status);
        this.messageService.showErrorMessage(this.staticStrings.ERROR_DEFAULT);
        // Since update failed we need to restore the original value
        //this.resetItemAmount();
      }, () => {
        // Cart changed - reload cart
        this.updateShoppingCart();
      }
    );
  }

  /**
   * Delete an item from the current shopping cart
   */
  deleteShoppingCartItem(itemIdentifier) {
    const url = `${this.baseUrl}`;

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      body: {"simpleName": itemIdentifier},
    };

    // Log delete attempt and what should be delete
    console.log('DELETE ATTEMPT: Cart item `' + itemIdentifier + '` should be deleted');

    return this.http.delete(url,httpOptions).subscribe(
      res => {
        // Log successful deletion
        console.log('DELETE ATTEMPT: Cart item `' + itemIdentifier + '` is deleted');
        console.log(JSON.stringify(res));
      },
      (err) => {
        console.log('Error: ' + err.error);
        console.log('Name: ' + err.name);
        console.log('Message: ' + err.message);
        console.log('Status: ' + err.status);
      },
      () => {
        // Cart changed - reload cart
        this.updateShoppingCart();
      }
    );
  }

  ///// CRUD ACTIONS /////

  ///// UPDATE SHOPPING CART /////

  /**
   * Take all steps to update the shopping cart:
   *
   * 1) updateShoppingCartTotalPrice
   * 2) updateShoppingCartTotalPrice
   * 3) updateCurrentShoppingCartSize
   *
   */
  updateShoppingCart() {
    console.log("Updating entire shopping cart.");
    console.log("### 1) updateShoppingCart #####################");
    this.getRawCartItems().then(rawCartItems => {

      // Go on when raw cart items are loaded
      console.log("Loaded rawCartItems:",rawCartItems);
      this.getAllPlanets().then(planets => {

        // Go on when planets are loaded
        console.log("Loaded planets:",planets);
        this.updateCart(rawCartItems,planets).then( newShoppingCart => {

          // Go on when new shopping cart is set
          console.log("Updated shopping card:",newShoppingCart);
          this.shoppingCartItems = newShoppingCart;
          // Emit the updated cart
          this.shoppingCartItemsEmitter.next(this.shoppingCartItems);
          // Proceed update and set ShoppingCartTotalPrice and CurrentShoppingCartSize
          this.proceedUpdate();
        });

      });

    }, error => {
      console.log("Callback error:",error);
      console.log("Updating shopping cart was stopped");
      // Proceed update and set ShoppingCartTotalPrice and CurrentShoppingCartSize
      this.proceedUpdate();

    }).catch(error => {
      console.log("Catch error:",error);
      // Proceed update and set ShoppingCartTotalPrice and CurrentShoppingCartSize
      this.proceedUpdate();
    });
  }

  /**
   * Load raw cart items
   */
  async getRawCartItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log("Loading rawCartItems...");
      let res = this.http.get(this.baseUrl);

      res.subscribe(result => {
        if (result) {
          // Only proceed if response is not null
          res.pipe(map(data => data['cartItemList'])).subscribe( data => {
            res = data;
            resolve(res);
          });
        } else {
          // Empty shopping cart.
          this.shoppingCartItems = null;
          reject("Loading rawCartItems failed. Response was null.");
        }
      },
      error => {
        // Empty shopping cart.
        this.shoppingCartItems = null;
        reject(error);
      });
    });
  }

  /**
   * Load all planets
   * TODO: Due to problems with asynchronous calls within a for-each loop we load all planets in one call. Replace this function with one that only loads the necessary planets.
   */
  async getAllPlanets(): Promise<Planet[]> {
    return new Promise((resolve, reject) => {
      console.log("Loading planets...");
      let planets: Planet[];
      this.planetsService.getPlanets().subscribe(data => {
        planets = data;
        resolve(planets);
      });
    });
  }

  /**
   * For each rawCartItem take the corresponding planet, build a ShoppingCartItem and push it into a cart which is returned
   */
  async updateCart(rawCartItems, planets: Planet[]): Promise<ShoppingCartItem[]> {
    return new Promise((resolve, reject) => {
      let newCart: ShoppingCartItem[] = [];
      console.log("Building ShoppingCartItems...");
      for (let i = 0; i < rawCartItems.length; i++) {
        for (let j = 0; j < planets.length; j++) {
          if (rawCartItems[i].simpleName == planets[j].simpleName) {
            newCart.push(ShoppingCartService.mergePlanetAndShoppingCartItem(planets[j],rawCartItems[i]));
          }
        }
      }
      resolve(newCart);
    });
  }

  /**
   * Proceed update of shopping cart
   */
  private proceedUpdate() {
    console.log("### 2) updateCurrentShoppingCartSize ##########");
    this.updateShoppingCartTotalPrice();
    console.log("### 3) updateShoppingCartTotalPrice ###########");
    this.updateCurrentShoppingCartSize();
  }
  /**
   * Update shopping cart total price
   */
  private updateShoppingCartTotalPrice() {
    const items: ShoppingCartItem[] = this.shoppingCartItems;
    // Reset total price to 0
    let newValue: number = 0;
    if (null != items) {
      // Calc new total price
      for (let i = 0; i < this.shoppingCartItems.length; i++) {
        newValue += this.shoppingCartItems[i].totalPrice;
      }
      // Set new value
      this.shoppingCartTotalPrice = newValue;
      // Inform subscribers
      console.log("Emit shoppingCartTotalPrice: " + this.shoppingCartTotalPrice);
    } else {
      console.log("shoppingCartTotalPrice was not updated since 'shoppingCartItems.length' was null or 0. Therefore shoppingCartTotalPrice was set to 0.");
      // Set new value
      this.shoppingCartTotalPrice = 0;
    }
    this.shoppingCartTotalPriceEmitter.next(this.shoppingCartTotalPrice);
  }

  /**
   * Update current shopping cart size
   */
  private updateCurrentShoppingCartSize() {

    if(null != this.shoppingCartItems) {
      if(this.shoppingCartItems.length >= 0) {
        this.currentCartItemSize = this.shoppingCartItems.length;
      } else {
        this.currentCartItemSize = 0;
      }
      console.log("Emit currentCartItemSize: " + this.currentCartItemSize);
    } else {
      console.log("currentCartItemSize wasn't updated since shoppingCartItems was null. Therefore shoppingCartTotalPrice was set to 0.");
      this.currentCartItemSize = 0;
    }
    this.currentCartItemSizeEmitter.next(this.currentCartItemSize);
  }

  ///// UPDATE SHOPPING CART /////

  ///// HELPERS /////

  /**
   * Initialize shopping cart by updating/loading shopping cart for the first time
   */
  initShoppingCart() {
    console.log("Init shopping cart");
    this.updateShoppingCart();
  }

  /**
   * Take a rawCartItem and a planet to build and return a ShoppingCartItem
   */
  static mergePlanetAndShoppingCartItem(planet: Planet, rawCartItem: any): ShoppingCartItem {
    const item = new ShoppingCartItem(
      rawCartItem.simpleName,
      planet.name,
      planet.priceSquareKm,
      planet.image,
      rawCartItem.sizeSquareKm,
      planet.maxAvailableSquareKm,
      (planet.priceSquareKm * rawCartItem.sizeSquareKm)
    );
    console.log("Build ShoppingCartItem for "+item.name+":",item);
    return item;
  }

}
