/* Author: mk303 */
import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Route, Router, Routes} from '@angular/router';
import {HomeComponent} from "../../pages/home/home.component";
import {ProductComponent} from "../../pages/product/product.component";
import {ProductsOverviewComponent} from "../../pages/products-overview/products-overview.component";
import {ShoppingCartComponent} from "../../pages/shopping-cart/shopping-cart.component";
import {OrdersComponent} from "../../pages/orders/orders.component";
import {ImprintComponent} from "../../pages/imprint/imprint.component";
import {GreetingComponent} from "../../pages/greeting/greeting.component";
import {PageNotFoundComponent} from "../../pages/page-not-found/page-not-found.component";
import {PageService} from "../../services/page.service";
import {Page} from "../../models/page";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  private menuOpen = false;
  private pages: Page[] = [];

  // Close menu when a new page load is finished
  constructor(private router: Router,
              private pageService: PageService) {

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.menuOpen = false;
      }
    });

      this.router.config.unshift(
        { path: '', redirectTo: '/greeting', pathMatch: 'full' },
        { path: 'home', component: HomeComponent},
        { path: 'products', component: ProductsOverviewComponent},
        { path: 'product/:id', component: ProductComponent },
        { path: 'shopping_cart', component: ShoppingCartComponent },
        { path: 'orders', component: OrdersComponent },
        { path: 'imprint', component: ImprintComponent },
        { path: 'greeting', component: GreetingComponent },
        { path: '**', component: PageNotFoundComponent }
      );

  }

  ngOnInit() {

    this.pageService.getPageList().subscribe( (pages) => {
      console.log("Fetched pages:",pages);
      this.pages = pages;
    }, (err)=> {
      console.log("Error fetching pages:",err);
    });
  }

  /**
   * Toggles the status of the menu
   */
  toggleNavActiveClass() {
    this.menuOpen = !this.menuOpen;
  }

}
