/* Author: mk303 */
import {Component, Input, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {LanguageService} from "../../services/language.service";
import {ContentService} from "../../services/content.service";
import {StaticStrings} from "../../models/static-strings";

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() planet;

  private currentCurrency;
  private currentLanguage;
  private staticStrings: StaticStrings;

  constructor(
    private currencyService: CurrencyService,
    private languageService: LanguageService,
    private contentService: ContentService) { }

  ngOnInit() {
    // Current Currency - gotten from Server
    this.currencyService.getCurrentCurrency().subscribe(
      currency => this.currentCurrency = currency);

    // Current Language - gotten from Server
    this.languageService.getCurrentLanguage().subscribe(
      language => this.currentLanguage = language);

    this.contentService.getStaticStrings().then((data) => {
      this.staticStrings = data;
    });
  }

}
