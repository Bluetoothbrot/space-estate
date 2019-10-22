/* Author: jm114 */
import { Component, OnInit } from '@angular/core';
import { Currency} from "../../models/currency";
import { CurrencyService } from "../../services/currency.service";
import {HttpErrorResponse} from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
registerLocaleData(localeDe, 'de');
registerLocaleData(localeEn, 'en');

@Component({
  selector: 'app-currency-switch',
  templateUrl: './currency-switch.component.html',
  styleUrls: ['./currency-switch.component.scss']
})
export class CurrencySwitchComponent implements OnInit {

  private currentCurr: Currency;
  private currencies: Currency[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe((currencies: Currency[]) => {
      this.currencies = currencies;

      // Initial currency - gotten from server
      this.currencyService.getCurrentCurrency()
        .subscribe(currency =>  {
          // highlight correct currency
          this.currentCurr = currency;
          // log successful currency switch
          console.log("Switching currency to: ", currency.code);
        });
    });
  }

  /**
   * Triggers a currency switch. Checks, if currency-switch is needed and calls the currencyService in case.
   * Returns reloaded page with new currency on success.
   * @param currIndex in currency array of changed currency.
   */

  switchCurr(currIndex) {
    // Check if we need to switch currency
    if (this.currentCurr != this.currencies[currIndex]) {
      this.currencyService.switchCurrency(this.currencies[currIndex].code).subscribe(
        res => {
          console.log(res);
        },
        (err: HttpErrorResponse) => {
          console.log('Error: ' + err.error);
          console.log('Name: ' + err.name);
          console.log('Message: ' + err.message);
          console.log('Status: ' + err.status);
        },
        // on complete change lang in the frontend
        () => {
          // reload page to get data in correct language
          window.location.reload();
        }
      );
    }
  }
}
