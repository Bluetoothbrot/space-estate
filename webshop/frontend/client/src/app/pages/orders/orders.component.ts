/* Author: jm114, mk303 */
import { Component, OnInit } from '@angular/core';
import {HeadlineText, HeadlineTextAdapter} from "../../models/headline-text";
import {Image, ImageAdapter} from "../../models/image";
import {ContentService} from "../../services/content.service";
import {map} from "rxjs/operators";
import {OrderService} from "../../services/order.service";
import {OrderItem, OrderItemAdapter} from "../../models/order-item";
import {Planet} from "../../models/planet";
import {Currency} from "../../models/currency";
import {Language} from "../../models/language";
import {CurrencyService} from "../../services/currency.service";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  private currentCurrency: Currency;
  private currentLanguage: Language;
  private headlineText_11: HeadlineText;
  private image_12: Image;
  private orders: OrderItem[] = [];
  private headlineText_17: HeadlineText;

  constructor(private contentService: ContentService,
              private headlineTextAdapter: HeadlineTextAdapter,
              private imageAdapter: ImageAdapter,
              private orderService: OrderService,
              private currencyService: CurrencyService,
              private languageService: LanguageService) { }

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

    // Get Headline Text
    this.contentService.getContentById(11)
      .pipe(map(item => this.headlineTextAdapter.adapt(item)))
      .subscribe(data => this.headlineText_11 = data);

    // Get Background-Image
    this.contentService.getContentById(12)
      .pipe(map(item => this.imageAdapter.adapt(item)))
      .subscribe(data => this.image_12 = data);

    // Get Background-Image
    this.contentService.getContentById(17)
      .pipe(map(item => this.headlineTextAdapter.adapt(item)))
      .subscribe(data => this.headlineText_17 = data);

    // Get Array of Orders from Backend (already mapped)
    this.orderService.getOrderOverview().subscribe((o: OrderItem[]) => {
      this.orders = o;
      console.log('### Order Array from Backend ###');
      console.log(this.orders);
    });

  }
}
