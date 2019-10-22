/* Author: mk303 */
import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart-icon',
  templateUrl: './shopping-cart-icon.component.html',
  styleUrls: ['./shopping-cart-icon.component.scss']
})
export class ShoppingCartIconComponent implements OnInit {

  private currentCartSize: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

    this.shoppingCartService.currentCartItemSizeEmitter.subscribe(data => {
      console.log("Received emitted shoppingCartSize: "+data);
      this.currentCartSize = data;
    });

    this.currentCartSize = this.shoppingCartService.getCurrentShoppingCartSize();
  }

}
