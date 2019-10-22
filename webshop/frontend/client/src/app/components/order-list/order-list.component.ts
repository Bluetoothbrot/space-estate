/* Author: mk303, jm114 */
import {Component, Input, OnInit} from '@angular/core';
import {Currency} from "../../models/currency";
import {Language} from "../../models/language";
import {CurrencyService} from "../../services/currency.service";
import {LanguageService} from "../../services/language.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ShoppingCartItem} from "../../models/shopping-cart-item";
import {PlanetsService} from "../../services/planets.service";
import {Router} from "@angular/router";
import {MessageService} from "../../services/message.service";
import {LoginToggleService} from "../../services/login-toggle.service";
import {OrderService} from "../../services/order.service";
import {LoginService} from "../../services/login.service";
import {ContentService} from "../../services/content.service";
import {StaticStrings} from "../../models/static-strings";

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  @Input() data;

  private shoppingCartItems: ShoppingCartItem[];
  private totalPrice: number = 0;
  private currentCurrency: Currency;
  private currentLanguage: Language;
  private staticStrings: StaticStrings;

  constructor(private currencyService: CurrencyService,
              private languageService: LanguageService,
              private shoppingCartService: ShoppingCartService,
              private planetsService: PlanetsService,
              private router: Router,
              private messageService: MessageService,
              private loginToggleService: LoginToggleService,
              private orderService: OrderService,
              private loginService: LoginService,
              private contentService: ContentService
  ) { }

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

    this.shoppingCartService.shoppingCartTotalPriceEmitter.subscribe(data => {
      console.log("Received emitted shoppingCartTotalPrice: "+data);
      this.totalPrice = data;
    });

    this.shoppingCartService.shoppingCartItemsEmitter.subscribe(data => {
      console.log("Received emitted shoppingCartItems: "+data);
      this.shoppingCartItems = data;
    });

    this.contentService.getStaticStrings().then((data) => {
      this.staticStrings = data;
    });

    this.totalPrice = this.shoppingCartService.getShoppingCartTotalPrice();
    this.shoppingCartItems = this.shoppingCartService.getCurrentShoppingCartItems();
  }

  /**
   * Triggers attempt to submit a order and calls orderService to do so. If user is not logged in, he is asked to do so first.
   *
   * Depending on response from orderService the user is shown a message or he is redirected.
   * true = success: Submit successful, redirect user to orders page
   * false = failed: Something went wrong on server side, inform user
   * *  = undefined: Something went wrong on server side, inform user
   */
  submitOrder() {
    // First check if user is logged or first needs to log in
    this.loginService.isLoggedIn().subscribe(isLoggedIn => {

      if(isLoggedIn) {
        this.orderService.submitOrder().subscribe(
          res => {
            // Log successful order submit
            console.log('Response to POST ATTEMPT: '+JSON.stringify(res));

            if(res == true) {
              // redirect user to login orders page
              this.router.navigate(['/orders']);

            } else if(res == false) {
              // Write out info message
              console.log('Error: Order could not be processed because response was: ',res);
              this.messageService.showErrorMessage(this.staticStrings.ERROR_DEFAULT);
            } else {
              console.log('Error: Server did not respond with a boolean to verify submit. Response was: '+JSON.stringify(res));
              this.messageService.showErrorMessage(this.staticStrings.ERROR_DEFAULT);
            }
            // Update shopping cart
            this.shoppingCartService.updateShoppingCart();
          },
          (err) => {
            console.log('Error: ' + JSON.stringify(err.error));
            console.log('Message: ' + err.message);
          }
        );
      } else {
        this.messageService.showInfoMessage(this.staticStrings.SUBMIT_LOGIN_INFO);
        this.loginToggleService.toggleLoginPanel();
      }
    });
  }
}
