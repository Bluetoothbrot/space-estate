/* Author: mk303 */
import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../services/content.service";
import {HeadlineText, HeadlineTextAdapter} from "../../models/headline-text";
import {map} from "rxjs/operators";
import {CartItemList, CartItemListAdapter} from "../../models/cart-item-list";
import {Image, ImageAdapter} from "../../models/image";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  styleUrls: ['./shopping-cart.component.scss'],
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private contentService: ContentService,
              private headlineTextAdapter: HeadlineTextAdapter,
              private cartItemListAdapter: CartItemListAdapter,
              private imageAdapter: ImageAdapter,
              private shoppingCartService: ShoppingCartService) { }

  private headlineText_5: HeadlineText;
  private cartItemList_6: CartItemList;
  private image_8: Image;
  private headlineText_14: HeadlineText;
  private shoppingCartSize: number;

  ngOnInit() {
    this.contentService.getContentById(5)
      .pipe(map(item => this.headlineTextAdapter.adapt(item)))
      .subscribe(data => this.headlineText_5 = data);

    this.contentService.getContentById(6)
      .pipe(map(item => this.cartItemListAdapter.adapt(item)))
      .subscribe(data => this.cartItemList_6 = data);

    this.contentService.getContentById(8)
      .pipe(map(item => this.imageAdapter.adapt(item)))
      .subscribe(data => this.image_8 = data);

    this.contentService.getContentById(14)
      .pipe(map(item => this.headlineTextAdapter.adapt(item)))
      .subscribe(data => this.headlineText_14 = data);

    this.shoppingCartService.currentCartItemSizeEmitter.subscribe(data => {
      console.log("Received emitted shoppingCartSize: "+data);
      this.shoppingCartSize = data;
    });

    this.shoppingCartSize = this.shoppingCartService.getCurrentShoppingCartSize();
  }

}
