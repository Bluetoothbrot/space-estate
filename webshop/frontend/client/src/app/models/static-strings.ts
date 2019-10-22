/* Author: mk303 */
import {Injectable} from '@angular/core';
import {Adapter} from '../helpers/adapter';

/**
 * StaticStrings model
 */
export class StaticStrings {
  constructor(
    public contentId: number,
    public PRODUCT_HOVER_FIND_OUT_MORE: string,
    public LOGIN_WELCOME_1: string,
    public LOGIN_WELCOME_2: string,
    public LOGIN_ERROR_1: string,
    public LOGIN_ERROR_2: string,
    public ERROR_DEFAULT: string,
    public LOGIN_ERROR_TIMEOUT: string,
    public LOGIN_INFO: string,
    public SHOPPING_CART_UPDATE_SUCCESSFUL: string,
    public SHOPPING_CART_UPDATE_FAILED: string,
    public SUBMIT_LOGIN_INFO: string,
    public SHOPPING_CART_ITEM_DELETE_INFO: string,
    public SHOPPING_CART_ITEM_DELETE_BUTTON: string,
    public PRODUCT_AVAILABILITY_ERROR_1: string,
    public PRODUCT_AVAILABILITY_ERROR_2: string,
    public PRODUCT_MIN_AMOUNT_INFO: string,
    public PRODUCT_MAX_AMOUNT_INFO_1: string,
    public PRODUCT_MAX_AMOUNT_INFO_2: string,
    public PRODUCT_ADDED_SUCCESSFUL_1: string,
    public PRODUCT_ADDED_SUCCESSFUL_2: string,
    public LOGOUT_SUCCESSFUL: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})

/**
 * StaticStrings Adapter. Adapts any provided item to a StaticStrings if possible
 */
export class StaticStringsAdapter implements Adapter<StaticStrings> {
  adapt(item: any): StaticStrings {
    return new StaticStrings(
      item.contentId,
      item.texts.product_hover_find_out_more,
      item.texts.login_welcome_1,
      item.texts.login_welcome_2,
      item.texts.login_error_1,
      item.texts.login_error_2,
      item.texts.error_default,
      item.texts.login_error_timeout,
      item.texts.login_info,
      item.texts.shopping_cart_update_successful,
      item.texts.shopping_cart_update_failed,
      item.texts.submit_login_info,
      item.texts.shopping_cart_item_delete_info,
      item.texts.shopping_cart_item_delete_button,
      item.texts.product_availability_error_1,
      item.texts.product_availability_error_2,
      item.texts.product_min_amount_info,
      item.texts.product_max_amount_info_1,
      item.texts.product_max_amount_info_2,
      item.texts.product_added_sccuessful_1,
      item.texts.product_added_sccuessful_2,
      item.texts.logout_successful
    );
  }
}
