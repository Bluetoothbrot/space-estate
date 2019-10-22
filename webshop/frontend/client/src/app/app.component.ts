/* Author: mk303 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LanguageService} from "./services/language.service";
import {ShoppingCartService} from "./services/shopping-cart.service";
import { PageTransition } from './helpers/PageTransition.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [PageTransition]
})

export class AppComponent implements OnInit {

  constructor(private langService: LanguageService,
              private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    // First Call to initialize http session for current website user
    console.log('Initial Call to initialize Session.');
    this.langService.initLanguage();

    // Initialize shopping cart
    this.shoppingCartService.initShoppingCart();
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
