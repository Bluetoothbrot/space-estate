/* Author: mk303 */
import {Component, OnInit} from '@angular/core';
import {Planet} from "../../models/planet";
import {ActivatedRoute, Router} from "@angular/router";
import {PlanetsService} from "../../services/planets.service";
import {PlanetInfo, PlanetInfoAdapter} from "../../models/planet_info";
import {ContentService} from "../../services/content.service";
import {map} from "rxjs/operators";
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Currency} from "../../models/currency";
import {CurrencyService} from "../../services/currency.service";
import {Language} from "../../models/language";
import {LanguageService} from "../../services/language.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {MessageService} from "../../services/message.service";
import {StaticStrings} from "../../models/static-strings";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  private currentPlanet: Planet;
  private planetInfo_4: PlanetInfo;
  private currentCurrency: Currency;
  private currentLanguage: Language;
  private currentAmountToAddToCart: number;
  private maxAvailableAmount: number;
  private amountAlreadyAddedToShoppingCart;
  private staticStrings: StaticStrings

  constructor(private route: ActivatedRoute,
              private planetsService: PlanetsService,
              private contentService: ContentService,
              private planetInfoAdapter: PlanetInfoAdapter,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private currencyService: CurrencyService,
              private languageService: LanguageService,
              private shoppingCartService: ShoppingCartService,
              private messageService: MessageService,
              private router: Router) {}

  ngOnInit() {

    // Initial currency - gotten from server
    this.currencyService.getCurrentCurrency()
      .subscribe(currency =>  {
        // highlight correct language
        this.currentCurrency = currency;
      });

    // Initial language - gotten from server
    this.languageService.getCurrentLanguage()
      .subscribe(currency =>  {
        // highlight correct language
        this.currentLanguage = currency;
      });

    this.getPlanet();

    this.contentService.getContentById(4)
      .pipe(map(item => this.planetInfoAdapter.adapt(item)))
      .subscribe(data => this.planetInfo_4 = data);

    this.shoppingCartService.shoppingCartItemsEmitter.subscribe(() => {
      // When shopping cart is updated we net to check if the current planet is amount the already added ShoppingCartItems.

      // When planet is loaded we need to check if this planet exists in the shopping cart.
      // If so we need to subtract the already added amount from the current available amount,
      // so that a user can't add more to his shopping cart than what is available.
      this.setMaxAvailableAmount();
    })

    this.contentService.getStaticStrings().then((data) => {
      this.staticStrings = data;
    });
  }

  /**
   * Attempt to add a item with a desired amount to the shopping cart
   * Checks if amount to add to cart is between 1 and the maximum available amount.
   * If not shows user a message respectively.
   * If so calls shoppingCartService to process submit
   * @param amount to add to shopping cart
   */
  onSubmit(amount): void {
    // Check if user added ad least 1km but not more than what is left
    if (amount > this.maxAvailableAmount) {
      this.messageService.showInfoMessage(this.staticStrings.PRODUCT_AVAILABILITY_ERROR_1+" " + this.maxAvailableAmount + " "+this.staticStrings.PRODUCT_AVAILABILITY_ERROR_2);
      this.currentAmountToAddToCart = this.maxAvailableAmount;
    } else if (amount == 0 || amount == null) {
      this.messageService.showInfoMessage(this.staticStrings.PRODUCT_MIN_AMOUNT_INFO);
      this.currentAmountToAddToCart = 1;
    } else {
      // Make post
      this.shoppingCartService.addItemToShoppingCart(this.currentPlanet.simpleName, amount);
    }
  }

  /**
   * Loads the current planet via planetsService.
   * If this fails, user is redirected to products page since we can not provide any relevant data without the planet.
   */
  getPlanet(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.planetsService.getPlanet(id).subscribe(
      planet => {

        this.currentPlanet = planet;
        console.log("Planet fetched: "+ this.currentPlanet.name);

        // When planet is loaded we need to check if this planet exists in the shopping cart.
        // If so we need to subtract the already added amount from the current available amount,
        // so that a user can't add more to his shopping cart than what is available.
        this.setMaxAvailableAmount();
    }, (err) => {
        console.log("Planet could not be fetched:",err);
        // Since we can not display any relevant data without the planet data, we redirect user to products overview page.
        this.router.navigate(['/products']);
      });
  }

  /**
   * Sets the maximum available amount that could be added to the shopping cart
   */
  setMaxAvailableAmount(): void {
    console.log("Calc maxAvailableAmount of "+this.currentPlanet.simpleName);
    // First check if user already has the current planet in his shopping cart.
    // If so, get the amount and subtract is from what is available.
    const currentPlanetInShoppingCart = this.shoppingCartService.getShoppingCartItem(this.currentPlanet.simpleName);
    if (null != currentPlanetInShoppingCart) {
      console.log("Planet found in shopping cart.");
      this.amountAlreadyAddedToShoppingCart = currentPlanetInShoppingCart.sizeSquareKm;
    } else {
      this.amountAlreadyAddedToShoppingCart = 0;
      console.log("Planet not found in shopping cart.");
    }
    this.maxAvailableAmount = this.currentPlanet.totalSize - this.currentPlanet.soldSizeSquareKm - this.amountAlreadyAddedToShoppingCart;
    console.log("User has "+this.amountAlreadyAddedToShoppingCart+" km² of "+this.currentPlanet.simpleName+" in his cart.");
    console.log("Setting maxAvailableAmount of "+this.currentPlanet.simpleName+" to "+this.maxAvailableAmount+" km².")
  }

}
