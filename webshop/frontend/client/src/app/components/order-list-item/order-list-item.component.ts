/* Author: mk303 */
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Currency} from "../../models/currency";
import {Language} from "../../models/language";
import {CurrencyService} from "../../services/currency.service";
import {LanguageService} from "../../services/language.service";
import {ShoppingCartItem} from "../../models/shopping-cart-item";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {MessageService} from "../../services/message.service";
import {StaticStrings} from "../../models/static-strings";
import {ContentService} from "../../services/content.service";

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit, AfterViewInit {

  @Input() data: ShoppingCartItem;

  private currentCurrency: Currency;
  private currentLanguage: Language;
  private currentItemAmount: number;
  private currentItemAmountBeforeChange: number;
  private maxAvailableAmount: number;
  private currentTotalPrice: number;
  private staticStrings: StaticStrings;

  constructor(
    private currencyService: CurrencyService,
    private languageService: LanguageService,
    private shoppingCartService: ShoppingCartService,
    private messageService: MessageService,
    private contentService: ContentService
  ) {}

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

    this.contentService.getStaticStrings().then((data) => {
      this.staticStrings = data;
    });
  }

  /**
   * ngAfterViewInit is here needed to make sure the data which is provided via @Input() is available when we need it.
   * OnViewInit data is available (unfortunately not OnInit), so AfterViewInit we can access it.
   */
  ngAfterViewInit(): void {
    this.currentItemAmount = <number> this.data.sizeSquareKm;
    this.maxAvailableAmount = <number> this.data.maxAvailableSquareKm;
    this.currentTotalPrice = <number> this.data.totalPrice;
  }

  /**
   * Triggers deletion of a shopping cart item by calling the shoppingCartService to do so
   * @param itemIdentifier = simpleName which identifies the shoppingCartItem
   */
  deleteCartItem(itemIdentifier): void {
    this.shoppingCartService.deleteShoppingCartItem(itemIdentifier);
  }

  /**
   * Triggers shopping cart update. Checks if it is possible to add the desired amount or if there isn't any availability left.
   * If user tries to add too much the amount he wants to add is reset to the original value and the user is informed about it.
   * If user tries to update his shopping cart item to 0 or 'empty' teh amount is reset to the original value and the user is informed about it.
   * Else shoppingCartService is called to to update the shopping cart.
   * @param itemIdentifier which identifies the cart item that should be updated
   */
  updateCartItem(itemIdentifier): void {
    // Make sure user did not try to order more than what is available
    if(this.currentItemAmount > this.maxAvailableAmount) {
      // Reset value and print out a info message
      this.resetItemAmount();
      this.messageService.showInfoMessage(this.staticStrings.PRODUCT_MAX_AMOUNT_INFO_1+" "+this.maxAvailableAmount+" "+this.staticStrings.PRODUCT_MAX_AMOUNT_INFO_2);
    } else if(this.currentItemAmount == 0 || this.currentItemAmount == null) {
      // If new value is 0 we reset the value and inform the user to use the "delete" button to remove an item from the cart
      // Reset value and print out a info message
      this.resetItemAmount();
      this.messageService.showInfoMessage(this.staticStrings.SHOPPING_CART_ITEM_DELETE_INFO);
    } else if (this.currentItemAmount != this.currentItemAmountBeforeChange) {
      // Process update
      this.shoppingCartService.updateShoppingCartItem(itemIdentifier, this.currentItemAmount);
    }
  }

  /**
   * Resets the amount of a shopping cart item to the value before it was changed
   */
  resetItemAmount(): void {
    this.currentItemAmount = this.currentItemAmountBeforeChange;
  }

}
