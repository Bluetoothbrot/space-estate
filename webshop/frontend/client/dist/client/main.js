(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_products_overview_products_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/products-overview/products-overview.component */ "./src/app/pages/products-overview/products-overview.component.ts");
/* harmony import */ var _pages_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/shopping-cart/shopping-cart.component */ "./src/app/pages/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _pages_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/imprint/imprint.component */ "./src/app/pages/imprint/imprint.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/orders/orders.component */ "./src/app/pages/orders/orders.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/greeting/greeting.component */ "./src/app/pages/greeting/greeting.component.ts");

/* Author: mk303 */










var routes = [
    { path: '', redirectTo: '/greeting', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'products', component: _pages_products_overview_products_overview_component__WEBPACK_IMPORTED_MODULE_4__["ProductsOverviewComponent"] },
    { path: 'products', component: _pages_products_overview_products_overview_component__WEBPACK_IMPORTED_MODULE_4__["ProductsOverviewComponent"] },
    { path: 'product/:id', component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: 'shopping_cart', component: _pages_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartComponent"] },
    { path: 'orders', component: _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"] },
    { path: 'imprint', component: _pages_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_6__["ImprintComponent"] },
    { path: 'greeting', component: _pages_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_10__["GreetingComponent"] },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<app-header></app-header>\n<app-message></app-message>\n<app-login></app-login>\n<app-logout></app-logout>\n<div [@pageTransition]=\"getRouterOutletState(router_outlet)\">\n  <router-outlet #router_outlet=\"outlet\"></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: none; }\nhtml, body {\n  width: 100%;\n  height: 100%;\n  background: #0d0d0d; }\nmain {\n  position: relative;\n  z-index: 300;\n  min-height: calc(100vh - 60px); }\ninput {\n  -webkit-appearance: none;\n  outline: none;\n  border: none;\n  background: transparent;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  text-align: center; }\nem {\n  font-style: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0FBLHlCQUFBO0FBSUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhLEVBQUE7QUFHZjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUEyQyxFQUFBO0FBRzdDO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG5AaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWxcIjtcbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG5cbiRmb290ZXItaGVpZ2h0OiA2MHB4O1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5odG1sLCBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzBkMGQwZDtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMzAwO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skZm9vdGVyLWhlaWdodH0pO1xufVxuXG5pbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmVtIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _helpers_PageTransition_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/PageTransition.animation */ "./src/app/helpers/PageTransition.animation.ts");

/* Author: mk303 */




var AppComponent = /** @class */ (function () {
    function AppComponent(langService, shoppingCartService) {
        this.langService = langService;
        this.shoppingCartService = shoppingCartService;
    }
    AppComponent.prototype.ngOnInit = function () {
        // First Call to initialize http session for current website user
        console.log('Initial Call to initialize Session.');
        this.langService.initLanguage();
        // Initialize shopping cart
        this.shoppingCartService.initShoppingCart();
    };
    AppComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [_helpers_PageTransition_animation__WEBPACK_IMPORTED_MODULE_4__["PageTransition"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cleave_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cleave-directive */ "./node_modules/ngx-cleave-directive/fesm5/ngx-cleave-directive.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_products_overview_products_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/products-overview/products-overview.component */ "./src/app/pages/products-overview/products-overview.component.ts");
/* harmony import */ var _pages_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/shopping-cart/shopping-cart.component */ "./src/app/pages/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _pages_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/imprint/imprint.component */ "./src/app/pages/imprint/imprint.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/orders/orders.component */ "./src/app/pages/orders/orders.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_teaser_teaser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/teaser/teaser.component */ "./src/app/components/teaser/teaser.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_teaser_bg_image_teaser_bg_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/teaser-bg-image/teaser-bg-image.component */ "./src/app/components/teaser-bg-image/teaser-bg-image.component.ts");
/* harmony import */ var _components_h1_text_h1_text_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/h1-text/h1-text.component */ "./src/app/components/h1-text/h1-text.component.ts");
/* harmony import */ var _components_h2_text_h2_text_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/h2-text/h2-text.component */ "./src/app/components/h2-text/h2-text.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/description/description.component */ "./src/app/components/description/description.component.ts");
/* harmony import */ var _components_login_toggle_login_toggle_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/login-toggle/login-toggle.component */ "./src/app/components/login-toggle/login-toggle.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _components_order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/order-list-item/order-list-item.component */ "./src/app/components/order-list-item/order-list-item.component.ts");
/* harmony import */ var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/order-list/order-list.component */ "./src/app/components/order-list/order-list.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
/* harmony import */ var _components_product_list_item_product_list_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/product-list-item/product-list-item.component */ "./src/app/components/product-list-item/product-list-item.component.ts");
/* harmony import */ var _components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/language-switch/language-switch.component */ "./src/app/components/language-switch/language-switch.component.ts");
/* harmony import */ var _components_currency_switch_currency_switch_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/currency-switch/currency-switch.component */ "./src/app/components/currency-switch/currency-switch.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_no_items_added_to_order_no_items_added_to_order_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/no-items-added-to-order/no-items-added-to-order.component */ "./src/app/components/no-items-added-to-order/no-items-added-to-order.component.ts");
/* harmony import */ var _components_shopping_cart_icon_shopping_cart_icon_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/shopping-cart-icon/shopping-cart-icon.component */ "./src/app/components/shopping-cart-icon/shopping-cart-icon.component.ts");
/* harmony import */ var _services_login_toggle_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/login-toggle.service */ "./src/app/services/login-toggle.service.ts");
/* harmony import */ var _services_planets_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/planets.service */ "./src/app/services/planets.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _helpers_parallax_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./helpers/parallax.directive */ "./src/app/helpers/parallax.directive.ts");
/* harmony import */ var _helpers_numbers_only_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./helpers/numbers-only.directive */ "./src/app/helpers/numbers-only.directive.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/greeting/greeting.component */ "./src/app/pages/greeting/greeting.component.ts");

/* Author: mk303 */








/* pages */






/* components */




















/* services */



/* helpers */




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                /* pages */
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pages_products_overview_products_overview_component__WEBPACK_IMPORTED_MODULE_10__["ProductsOverviewComponent"],
                _pages_product_product_component__WEBPACK_IMPORTED_MODULE_13__["ProductComponent"],
                _pages_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_12__["ImprintComponent"],
                /* components */
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _components_teaser_teaser_component__WEBPACK_IMPORTED_MODULE_16__["TeaserComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _pages_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartComponent"],
                _components_teaser_bg_image_teaser_bg_image_component__WEBPACK_IMPORTED_MODULE_18__["TeaserBgImageComponent"],
                _components_h1_text_h1_text_component__WEBPACK_IMPORTED_MODULE_19__["H1TextComponent"],
                _components_h2_text_h2_text_component__WEBPACK_IMPORTED_MODULE_20__["H2TextComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _components_description_description_component__WEBPACK_IMPORTED_MODULE_22__["DescriptionComponent"],
                _components_login_toggle_login_toggle_component__WEBPACK_IMPORTED_MODULE_23__["LoginToggleComponent"],
                _components_button_button_component__WEBPACK_IMPORTED_MODULE_24__["ButtonComponent"],
                _components_order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_25__["OrderListItemComponent"],
                _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_26__["OrderListComponent"],
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_27__["ProductListComponent"],
                _components_product_list_item_product_list_item_component__WEBPACK_IMPORTED_MODULE_28__["ProductListItemComponent"],
                _components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_29__["LanguageSwitchComponent"],
                _components_currency_switch_currency_switch_component__WEBPACK_IMPORTED_MODULE_30__["CurrencySwitchComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_31__["MessageComponent"],
                _helpers_numbers_only_directive__WEBPACK_IMPORTED_MODULE_39__["NumbersOnlyDirective"],
                _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_14__["OrdersComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_32__["LogoutComponent"],
                _components_no_items_added_to_order_no_items_added_to_order_component__WEBPACK_IMPORTED_MODULE_33__["NoItemsAddedToOrderComponent"],
                _components_shopping_cart_icon_shopping_cart_icon_component__WEBPACK_IMPORTED_MODULE_34__["ShoppingCartIconComponent"],
                _helpers_parallax_directive__WEBPACK_IMPORTED_MODULE_38__["ParallaxDirective"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_40__["PageNotFoundComponent"],
                _pages_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_41__["GreetingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_cleave_directive__WEBPACK_IMPORTED_MODULE_7__["NgxCleaveDirectiveModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [
                /* services */
                _services_login_toggle_service__WEBPACK_IMPORTED_MODULE_35__["LoginToggleService"],
                _services_planets_service__WEBPACK_IMPORTED_MODULE_36__["PlanetsService"],
                _services_message_service__WEBPACK_IMPORTED_MODULE_37__["MessageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/button/button.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<button>{{buttonText}}</button>\n"

/***/ }),

/***/ "./src/app/components/button/button.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\nbutton {\n  opacity: 0.75;\n  background: rgba(0, 182, 255, 0.1);\n  border: 1px solid #00B6FF;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n  font-family: \"Roboto Bold\";\n  font-size: 14px;\n  line-height: 14px;\n  color: #00B6FF;\n  letter-spacing: 4px;\n  text-align: center;\n  text-transform: uppercase;\n  width: auto;\n  padding: 12px 40px;\n  cursor: pointer; }\nbutton:hover {\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n    background: rgba(0, 182, 255, 0.3); }\n:host-context(.description) button {\n  margin-top: 30px; }\n:host-context(.full_width) button {\n  width: 100%;\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RleHQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RyYW5zaXRpb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUNBQSx5QkFBQTtBQ0FBLHlCQUFBO0FEQUEseUJBQUE7QUNHQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBMEMsRUFBQTtBQUc1QztFQUNFLHdCQUF3QjtFQUN4Qix5QkFBMkMsRUFBQTtBQUc3QztFQUNFLDBCQUEwQjtFQUMxQiwyQkFBNkMsRUFBQTtBQUcvQztFQUNFLDJCQUEyQjtFQUMzQiw0QkFBOEMsRUFBQTtBQUdoRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNEeEIyQjtFQ3lCM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBRW5CO0lBWEY7TUFZSSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBLEVBRXZCO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNEekMyQjtFQzBDM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsY0R0RGtCO0VDdURsQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0RyRXFCO0VDc0VyQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBO0FDNUUzQixrQkFBQTtBSEtBO0VBQ0UsYUFBYTtFQUNiLGtDQ05vQjtFRE9wQix5QkNQb0I7RURRcEIsd0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNDWm9CO0VEYXBCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0FBZGpCO0lHQ0UseUNBTHNDO0lBUXRDLGlDQVJzQztJSHNCcEMsa0NDdEJrQixFQUFBO0FEMEJ0QjtFQUdJLGdCQUFnQixFQUFBO0FBS3BCO0VBR0ksV0FBVztFQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9jb2xvcnNcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdGV4dFwiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90cmFuc2l0aW9uc1wiO1xuXG5idXR0b24ge1xuICBvcGFjaXR5OiAwLjc1O1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRwcmltYXJ5LWJsdWUsIDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWJsdWU7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsMCwwLDAuNTApO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQm9sZFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogJHByaW1hcnktYmx1ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTJweCA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJHByaW1hcnktYmx1ZSwgMC4zKTtcbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5kZXNjcmlwdGlvbikge1xuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG59XG5cbjpob3N0LWNvbnRleHQoLmZ1bGxfd2lkdGgpIHtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cblxufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbiRwcmltYXJ5LWJsdWU6ICMwMEI2RkY7XG4kdGV4dC1jb2xvcjogIzdFN0U3RTtcbiR0ZXh0LWNvbG9yLWhlYWRsaW5lOiAjQzhDOEM4O1xuJHRleHQtY29sb3Itd2hpdGU6ICNmZmY7XG4kbWVkaXVtLWdyZXk6ICM1MDRGNEY7XG4kc2Vjb25kYXJ5LWdyZWVuOiAjMDBjZTgyO1xuJHNlY29uZGFyeS1vcmFuZ2U6ICNGRkE1MDA7XG4kc2Vjb25kYXJ5LXJlZDogI0ZGMDA0RTtcblxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XG4gIH1cbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR0cmFuc2l0aW9uLXF1aWNrOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4kdHJhbnNpdGlvbi1tZWRpdW06IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tcXVpY2stZGVsYXllZDogYWxsIDAuMTVzIGVhc2UtaW4tb3V0IDAuMTVzO1xuXG5AbWl4aW4gY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXMpe1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtby10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG59XG5cbkBtaXhpbiBkZWxheWVkLXRyYW5zaXRpb24tdGltZWQoJHByb3BlcnR5LCAkdGltZSwgJGRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.buttonText = 'No value set';
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "buttonText", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/button/button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/currency-switch/currency-switch.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/currency-switch/currency-switch.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: jm114 -->\n<div *ngIf=\"currencies?.length > 0 && currentCurr != null\" class=\"nav-text-switch\">\n  <span *ngFor=\"let curr of currencies index as i\" [ngClass]=\"{'active': currentCurr.code == curr.code}\" (click)=\"switchCurr(i)\">{{curr.code}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/currency-switch/currency-switch.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/currency-switch/currency-switch.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: jm114 */\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n.nav-text-switch {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 10px; }\n.nav-text-switch span {\n    font-size: 16px;\n    line-height: 16px;\n    font-family: \"Roboto Light\";\n    cursor: pointer;\n    text-align: left;\n    text-transform: uppercase;\n    text-shadow: 0 0 3px #000;\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n    opacity: 0.5; }\n.nav-text-switch span:hover {\n      opacity: 1;\n      color: #00B6FF; }\n.nav-text-switch span.active {\n      opacity: 1; }\n.nav-text-switch span:first-child {\n      text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2N1cnJlbmN5LXN3aXRjaC9jdXJyZW5jeS1zd2l0Y2guY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19uYXZfdGV4dF9zd2l0Y2guc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fc2hhZG93cy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdHJhbnNpdGlvbnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RleHQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0FBLGtCQUFBO0FDQUEseUJBQUE7QUNBQSxrQkFBQTtBQ0FBLGtCQUFBO0FDQUEseUJBQUE7QUhBQSx5QkFBQTtBR0dBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUEwQyxFQUFBO0FBRzVDO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUEyQyxFQUFBO0FBRzdDO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUE2QyxFQUFBO0FBRy9DO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE4QyxFQUFBO0FBR2hEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0h4QjJCO0VHeUIzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7QUFFbkI7SUFYRjtNQVlJLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUEsRUFFdkI7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0h6QzJCO0VHMEMzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixjSHREa0I7RUd1RGxCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXSHJFcUI7RUdzRXJCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7QUpyRTNCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUIsRUFBQTtBQUh2QjtJQU1JLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCRWxCaUM7SUNLbkMseUNBTHNDO0lBUXRDLGlDQVJzQztJSG9CcEMsWUFBWSxFQUFBO0FBZGhCO01BaUJNLFVBQVU7TUFDVixjQ3hCZ0IsRUFBQTtBRE10QjtNQXNCTSxVQUFVLEVBQUE7QUF0QmhCO01BMEJNLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW5jeS1zd2l0Y2gvY3VycmVuY3ktc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBqbTExNCAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9uYXZfdGV4dF9zd2l0Y2hcIjtcbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cblxuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9jb2xvcnNcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvc2hhZG93c1wiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90cmFuc2l0aW9uc1wiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5cbi5uYXYtdGV4dC1zd2l0Y2gge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LXNoYWRvdzogJG5hdi10ZXh0LXN3aXRjaC1zaGFkb3c7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xuICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1ibHVlO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiRuYXYtdGV4dC1zd2l0Y2gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XG4kbmF2LWljb24tc2hhZG93OiAwIDAgNHB4ICMwMDA7XG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG4kdHJhbnNpdGlvbi1xdWljazogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tbWVkaXVtOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiR0cmFuc2l0aW9uLXF1aWNrLWRlbGF5ZWQ6IGFsbCAwLjE1cyBlYXNlLWluLW91dCAwLjE1cztcblxuQG1peGluIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzKXtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW8tdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG4gIHRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xufVxuXG5AbWl4aW4gZGVsYXllZC10cmFuc2l0aW9uLXRpbWVkKCRwcm9wZXJ0eSwgJHRpbWUsICRkZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuQGltcG9ydCBcImNvbG9yc1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmJyk7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/currency-switch/currency-switch.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/currency-switch/currency-switch.component.ts ***!
  \*************************************************************************/
/*! exports provided: CurrencySwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySwitchComponent", function() { return CurrencySwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/currency.service */ "./src/app/services/currency.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__);

/* Author: jm114 */





Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4___default.a, 'de');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default.a, 'en');
var CurrencySwitchComponent = /** @class */ (function () {
    function CurrencySwitchComponent(currencyService) {
        this.currencyService = currencyService;
    }
    CurrencySwitchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currencyService.getCurrencies().subscribe(function (currencies) {
            _this.currencies = currencies;
            // Initial currency - gotten from server
            _this.currencyService.getCurrentCurrency()
                .subscribe(function (currency) {
                // highlight correct currency
                _this.currentCurr = currency;
                // log successful currency switch
                console.log("Switching currency to: ", currency.code);
            });
        });
    };
    /**
     * Triggers a currency switch. Checks, if currency-switch is needed and calls the currencyService in case.
     * Returns reloaded page with new currency on success.
     * @param currIndex in currency array of changed currency.
     */
    CurrencySwitchComponent.prototype.switchCurr = function (currIndex) {
        // Check if we need to switch currency
        if (this.currentCurr != this.currencies[currIndex]) {
            this.currencyService.switchCurrency(this.currencies[currIndex].code).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log('Error: ' + err.error);
                console.log('Name: ' + err.name);
                console.log('Message: ' + err.message);
                console.log('Status: ' + err.status);
            }, 
            // on complete change lang in the frontend
            function () {
                // reload page to get data in correct language
                window.location.reload();
            });
        }
    };
    CurrencySwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-currency-switch',
            template: __webpack_require__(/*! ./currency-switch.component.html */ "./src/app/components/currency-switch/currency-switch.component.html"),
            styles: [__webpack_require__(/*! ./currency-switch.component.scss */ "./src/app/components/currency-switch/currency-switch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"]])
    ], CurrencySwitchComponent);
    return CurrencySwitchComponent;
}());



/***/ }),

/***/ "./src/app/components/description/description.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/description/description.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\nsection {\n  text-align: center;\n  background-size: cover;\n  background-position: center; }\ndiv {\n  padding-top: 100px;\n  padding-bottom: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fd3JhcHBlcnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RleHQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDQUEsa0JBQUE7QUFHQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBTG9CO0VBTXBCLG1CQU5vQjtFQU9wQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFHcEI7RUFFRSxlQUFlLEVBQUE7QUFHakI7RUFFRSxpQkFBd0MsRUFBQTtBQUcxQztFQUVFLGdCQUF1QyxFQUFBO0FBR3pDO0VBRUUsZ0JBQXVDLEVBQUE7QUM3QnpDLHlCQUFBO0FDQUEseUJBQUE7QURHQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBMEMsRUFBQTtBQUc1QztFQUNFLHdCQUF3QjtFQUN4Qix5QkFBMkMsRUFBQTtBQUc3QztFQUNFLDBCQUEwQjtFQUMxQiwyQkFBNkMsRUFBQTtBQUcvQztFQUNFLDJCQUEyQjtFQUMzQiw0QkFBOEMsRUFBQTtBQUdoRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNDeEIyQjtFRHlCM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBRW5CO0lBWEY7TUFZSSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBLEVBRXZCO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNDekMyQjtFRDBDM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsY0N0RGtCO0VEdURsQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0NyRXFCO0VEc0VyQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBO0FGeEUzQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7QUFHN0I7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy93cmFwcGVyc1wiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5cbnNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG4kd3JhcHBlci1wYWRkaW5nOiA0MHB4O1xuXG4ld3JhcHBlci1iYXNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6ICR3cmFwcGVyLXBhZGRpbmc7XG4gIHBhZGRpbmctcmlnaHQ6ICR3cmFwcGVyLXBhZGRpbmc7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXgtd3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiBub25lO1xufVxuXG4ud2lkZS13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IDExMTBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuXG4ubWVkaXVtLXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogODAwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cblxuLm5hcnJvdy13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IDYwMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuQGltcG9ydCBcImNvbG9yc1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmJyk7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbiRwcmltYXJ5LWJsdWU6ICMwMEI2RkY7XG4kdGV4dC1jb2xvcjogIzdFN0U3RTtcbiR0ZXh0LWNvbG9yLWhlYWRsaW5lOiAjQzhDOEM4O1xuJHRleHQtY29sb3Itd2hpdGU6ICNmZmY7XG4kbWVkaXVtLWdyZXk6ICM1MDRGNEY7XG4kc2Vjb25kYXJ5LWdyZWVuOiAjMDBjZTgyO1xuJHNlY29uZGFyeS1vcmFuZ2U6ICNGRkE1MDA7XG4kc2Vjb25kYXJ5LXJlZDogI0ZGMDA0RTtcblxuIl19 */"

/***/ }),

/***/ "./src/app/components/description/description.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/description/description.component.ts ***!
  \*****************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303, jm114 */

var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DescriptionComponent.prototype, "data", void 0);
    DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description',
            template: '<section *ngIf="data != null" [ngStyle]="{ \'background-image\': \'url(\' + data.image + \')\'}">' +
                '<div class="narrow-wrapper">\n' +
                '  <h1>{{data.headline}}</h1>\n' +
                '  <p>{{data.text}}</p>\n' +
                '  <app-button [buttonText]="data.button" [ngClass]="\'description\'" routerLink="/products"></app-button>' +
                '</div>' +
                '</section>',
            styles: [__webpack_require__(/*! ./description.component.scss */ "./src/app/components/description/description.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<footer>\n  <div class=\"max-wrapper\">\n    <span>©2019 Astro Space Estate</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303, jm114 */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: none; }\nhtml, body {\n  width: 100%;\n  height: 100%;\n  background: #0d0d0d; }\nmain {\n  position: relative;\n  z-index: 300;\n  min-height: calc(100vh - 60px); }\ninput {\n  -webkit-appearance: none;\n  outline: none;\n  border: none;\n  background: transparent;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  text-align: center; }\nem {\n  font-style: normal; }\nfooter {\n  background: #000000;\n  border-top: 1px solid #7E7E7E;\n  padding-top: 19px;\n  height: 60px; }\nfooter span {\n    font-size: 12px;\n    color: #fff;\n    line-height: 12px;\n    font-family: \"Exo Light\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3dyYXBwZXJzLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL190ZXh0LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0FBLHlCQUFBO0FDQUEsa0JBQUE7QUFHQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBTG9CO0VBTXBCLG1CQU5vQjtFQU9wQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFHcEI7RUFFRSxlQUFlLEVBQUE7QUFHakI7RUFFRSxpQkFBd0MsRUFBQTtBQUcxQztFQUVFLGdCQUF1QyxFQUFBO0FBR3pDO0VBRUUsZ0JBQXVDLEVBQUE7QUM3QnpDLHlCQUFBO0FGQUEseUJBQUE7QUVHQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBMEMsRUFBQTtBQUc1QztFQUNFLHdCQUF3QjtFQUN4Qix5QkFBMkMsRUFBQTtBQUc3QztFQUNFLDBCQUEwQjtFQUMxQiwyQkFBNkMsRUFBQTtBQUcvQztFQUNFLDJCQUEyQjtFQUMzQiw0QkFBOEMsRUFBQTtBQUdoRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNGeEIyQjtFRXlCM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBRW5CO0lBWEY7TUFZSSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBLEVBRXZCO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNGekMyQjtFRTBDM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsY0Z0RGtCO0VFdURsQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0ZyRXFCO0VFc0VyQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBO0FDNUUzQix5QkFBQTtBQUlBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYSxFQUFBO0FBR2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw4QkFBMkMsRUFBQTtBQUc3QztFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQixFQUFBO0FKN0JwQjtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLFlJUmtCLEVBQUE7QUpJcEI7SUFPSSxlQUFlO0lBQ2YsV0NWbUI7SURXbkIsaUJBQWlCO0lBQ2pCLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9jb2xvcnNcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvd3JhcHBlcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3RleHRcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsXCI7XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN0U3RTdFO1xuICBwYWRkaW5nLXRvcDogMTlweDtcbiAgaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkV4byBMaWdodFwiO1xuICB9XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuJHByaW1hcnktYmx1ZTogIzAwQjZGRjtcbiR0ZXh0LWNvbG9yOiAjN0U3RTdFO1xuJHRleHQtY29sb3ItaGVhZGxpbmU6ICNDOEM4Qzg7XG4kdGV4dC1jb2xvci13aGl0ZTogI2ZmZjtcbiRtZWRpdW0tZ3JleTogIzUwNEY0RjtcbiRzZWNvbmRhcnktZ3JlZW46ICMwMGNlODI7XG4kc2Vjb25kYXJ5LW9yYW5nZTogI0ZGQTUwMDtcbiRzZWNvbmRhcnktcmVkOiAjRkYwMDRFO1xuXG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG4kd3JhcHBlci1wYWRkaW5nOiA0MHB4O1xuXG4ld3JhcHBlci1iYXNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6ICR3cmFwcGVyLXBhZGRpbmc7XG4gIHBhZGRpbmctcmlnaHQ6ICR3cmFwcGVyLXBhZGRpbmc7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXgtd3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiBub25lO1xufVxuXG4ud2lkZS13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IDExMTBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuXG4ubWVkaXVtLXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogODAwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cblxuLm5hcnJvdy13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IDYwMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuQGltcG9ydCBcImNvbG9yc1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmJyk7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cblxuJGZvb3Rlci1oZWlnaHQ6IDYwcHg7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmh0bWwsIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMGQwZDBkO1xufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzMDA7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRmb290ZXItaGVpZ2h0fSk7XG59XG5cbmlucHV0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZW0ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/h1-text/h1-text.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/h1-text/h1-text.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<div *ngIf=\"data != null\" class=\"narrow-wrapper\" appParallax [ratio]=\"0.25\">\n  <h1>{{data.headline}}</h1>\n  <p>{{data.text}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/h1-text/h1-text.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/h1-text/h1-text.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\ndiv {\n  padding-top: 100px;\n  padding-bottom: 100px; }\ndiv p {\n    text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2gxLXRleHQvaDEtdGV4dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3dyYXBwZXJzLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL190ZXh0LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0FBLGtCQUFBO0FBR0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUxvQjtFQU1wQixtQkFOb0I7RUFPcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsZUFBZSxFQUFBO0FBR2pCO0VBRUUsaUJBQXdDLEVBQUE7QUFHMUM7RUFFRSxnQkFBdUMsRUFBQTtBQUd6QztFQUVFLGdCQUF1QyxFQUFBO0FDN0J6Qyx5QkFBQTtBQ0FBLHlCQUFBO0FER0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQ3hCMkI7RUR5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQ3pDMkI7RUQwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNDdERrQjtFRHVEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdDckVxQjtFRHNFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBRnhFM0I7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7QUFGdkI7SUFLSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaDEtdGV4dC9oMS10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy93cmFwcGVyc1wiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5cbmRpdiB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbn1cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR3cmFwcGVyLXBhZGRpbmc6IDQwcHg7XG5cbiV3cmFwcGVyLWJhc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctbGVmdDogJHdyYXBwZXItcGFkZGluZztcbiAgcGFkZGluZy1yaWdodDogJHdyYXBwZXItcGFkZGluZztcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1heC13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IG5vbmU7XG59XG5cbi53aWRlLXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogMTExMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG5cbi5tZWRpdW0td3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiA4MDBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuXG4ubmFycm93LXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogNjAwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG5AaW1wb3J0IFwiY29sb3JzXCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUxpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYnKTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLWhlYWRsaW5lO1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxMnB4O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLWhlYWRsaW5lO1xuICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuJHByaW1hcnktYmx1ZTogIzAwQjZGRjtcbiR0ZXh0LWNvbG9yOiAjN0U3RTdFO1xuJHRleHQtY29sb3ItaGVhZGxpbmU6ICNDOEM4Qzg7XG4kdGV4dC1jb2xvci13aGl0ZTogI2ZmZjtcbiRtZWRpdW0tZ3JleTogIzUwNEY0RjtcbiRzZWNvbmRhcnktZ3JlZW46ICMwMGNlODI7XG4kc2Vjb25kYXJ5LW9yYW5nZTogI0ZGQTUwMDtcbiRzZWNvbmRhcnktcmVkOiAjRkYwMDRFO1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/h1-text/h1-text.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/h1-text/h1-text.component.ts ***!
  \*********************************************************/
/*! exports provided: H1TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1TextComponent", function() { return H1TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

var H1TextComponent = /** @class */ (function () {
    function H1TextComponent() {
        this.data = {
            headline: 'No value set',
            text: 'No value set'
        };
    }
    H1TextComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], H1TextComponent.prototype, "data", void 0);
    H1TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-h1-text',
            template: __webpack_require__(/*! ./h1-text.component.html */ "./src/app/components/h1-text/h1-text.component.html"),
            styles: [__webpack_require__(/*! ./h1-text.component.scss */ "./src/app/components/h1-text/h1-text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], H1TextComponent);
    return H1TextComponent;
}());



/***/ }),

/***/ "./src/app/components/h2-text/h2-text.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/h2-text/h2-text.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<div *ngIf=\"data != null\" class=\"narrow-wrapper\">\n  <h2>{{data.headline}}</h2>\n  <p>{{data.text}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/h2-text/h2-text.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/h2-text/h2-text.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\ndiv {\n  padding-top: 100px;\n  padding-bottom: 100px; }\ndiv p {\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2gyLXRleHQvaDItdGV4dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3dyYXBwZXJzLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL190ZXh0LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0FBLGtCQUFBO0FBR0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUxvQjtFQU1wQixtQkFOb0I7RUFPcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsZUFBZSxFQUFBO0FBR2pCO0VBRUUsaUJBQXdDLEVBQUE7QUFHMUM7RUFFRSxnQkFBdUMsRUFBQTtBQUd6QztFQUVFLGdCQUF1QyxFQUFBO0FDN0J6Qyx5QkFBQTtBQ0FBLHlCQUFBO0FER0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQ3hCMkI7RUR5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQ3pDMkI7RUQwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNDdERrQjtFRHVEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdDckVxQjtFRHNFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBRnhFM0I7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7QUFGdkI7SUFLSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaDItdGV4dC9oMi10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy93cmFwcGVyc1wiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5cbmRpdiB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiLyogQXV0aG9yOiBtazMwMyAqL1xuJHdyYXBwZXItcGFkZGluZzogNDBweDtcblxuJXdyYXBwZXItYmFzZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAkd3JhcHBlci1wYWRkaW5nO1xuICBwYWRkaW5nLXJpZ2h0OiAkd3JhcHBlci1wYWRkaW5nO1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF4LXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogbm9uZTtcbn1cblxuLndpZGUtd3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiAxMTEwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cblxuLm1lZGl1bS13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IDgwMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG5cbi5uYXJyb3ctd3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiA2MDBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XG4gIH1cbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/h2-text/h2-text.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/h2-text/h2-text.component.ts ***!
  \*********************************************************/
/*! exports provided: H2TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2TextComponent", function() { return H2TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

var H2TextComponent = /** @class */ (function () {
    function H2TextComponent() {
        this.data = {
            headline: 'No value set',
            text: 'No value set'
        };
    }
    H2TextComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], H2TextComponent.prototype, "data", void 0);
    H2TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-h2-text',
            template: __webpack_require__(/*! ./h2-text.component.html */ "./src/app/components/h2-text/h2-text.component.html"),
            styles: [__webpack_require__(/*! ./h2-text.component.scss */ "./src/app/components/h2-text/h2-text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], H2TextComponent);
    return H2TextComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<header>\n  <div id=\"nav-icon\" [ngClass]=\"{'active': menuOpen}\" (click)=\"toggleNavActiveClass();\">\n    <div></div>\n    <div></div>\n  </div>\n  <app-shopping-cart-icon></app-shopping-cart-icon>\n  <app-login-toggle></app-login-toggle>\n  <app-language-switch></app-language-switch>\n  <app-currency-switch></app-currency-switch>\n</header>\n<div id=\"nav\" class=\"overlay\" [ngClass]=\"{'active': menuOpen}\">\n  <nav>\n    <ul *ngIf=\"null != pages\">\n      <li *ngFor=\"let page of pages\"><a [routerLink]=\"page.path\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">{{ page.title }}</a></li>\n    </ul>\n  </nav>\n  <img src=\"assets/images/logo.svg\" />\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n.overlay {\n  position: fixed;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: black;\n  z-index: 900;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out; }\n.overlay img {\n    display: inline-block;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    z-index: -100;\n    opacity: 0;\n    -webkit-transition: all 1s ease-in-out;\n    transition: all 1s ease-in-out;\n    -webkit-transition-delay: 0.15s;\n            transition-delay: 0.15s; }\n.overlay.active {\n    opacity: 1;\n    visibility: visible; }\n.overlay.active img {\n      opacity: 0.04; }\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n.header-icon {\n  text-align: center;\n  position: relative; }\n.header-icon svg {\n    width: 34px;\n    cursor: pointer;\n    -webkit-filter: drop-shadow(0 0 4px #000);\n            filter: drop-shadow(0 0 4px #000);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n    fill: #fff; }\n.header-icon svg:hover {\n      fill: #00B6FF; }\nheader {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  color: #fff;\n  z-index: 1500;\n  display: grid;\n  grid-template-columns: repeat(1, 50px);\n  grid-template-rows: repeat(5, auto);\n  grid-row-gap: 24px;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-items: center; }\n@media screen and (max-width: 800px) {\n    header {\n      top: 20px;\n      left: 20px;\n      grid-template-columns: repeat(5, auto);\n      grid-template-rows: repeat(1, auto);\n      grid-column-gap: 20px;\n      grid-row-gap: 0px; } }\n#nav {\n  z-index: 950; }\n#nav nav {\n    padding: 0 20px; }\n#nav nav ul {\n      display: grid;\n      grid-template-columns: auto;\n      grid-row-gap: 40px; }\n#nav nav ul li {\n        display: block;\n        position: relative;\n        opacity: 0;\n        -webkit-transform: translateX(-60px);\n                transform: translateX(-60px);\n        -webkit-transition: all 0.3s ease-in-out;\n        transition: all 0.3s ease-in-out; }\n#nav nav ul li:nth-of-type(1) {\n        -webkit-transition: all 0.3s ease-in-out;\n        transition: all 0.3s ease-in-out;\n        -webkit-transition-delay: 0.15s;\n                transition-delay: 0.15s; }\n#nav nav ul li:nth-of-type(2) {\n        -webkit-transition: all 0.3s ease-in-out;\n        transition: all 0.3s ease-in-out;\n        -webkit-transition-delay: 0.3s;\n                transition-delay: 0.3s; }\n#nav nav ul li:nth-of-type(3) {\n        -webkit-transition: all 0.3s ease-in-out;\n        transition: all 0.3s ease-in-out;\n        -webkit-transition-delay: 0.45s;\n                transition-delay: 0.45s; }\n#nav nav ul li:nth-of-type(4) {\n        -webkit-transition: all 0.3s ease-in-out;\n        transition: all 0.3s ease-in-out;\n        -webkit-transition-delay: 0.6s;\n                transition-delay: 0.6s; }\n#nav nav ul li:nth-of-type(5) {\n        -webkit-transition: all 0.3s ease-in-out;\n        transition: all 0.3s ease-in-out;\n        -webkit-transition-delay: 0.75s;\n                transition-delay: 0.75s; }\n#nav nav ul a {\n        font-family: \"Exo Light\";\n        font-size: 50px;\n        line-height: 60px;\n        color: #7E7E7E;\n        letter-spacing: 20px;\n        display: inline-block;\n        text-transform: uppercase;\n        -webkit-transition: all 0.15s ease-in-out;\n        transition: all 0.15s ease-in-out; }\n#nav nav ul a:hover {\n          -webkit-transform: translateX(20px);\n                  transform: translateX(20px);\n          color: #fff; }\n#nav nav ul a.active {\n          color: #00B6FF; }\n@media screen and (max-width: 1200px) {\n        #nav nav ul {\n          grid-row-gap: 24px; }\n          #nav nav ul a {\n            font-size: 30px;\n            line-height: 36px;\n            letter-spacing: 12px; } }\n#nav.active nav ul li {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n#nav-icon {\n  width: 50px;\n  height: auto;\n  height: 30px;\n  position: relative;\n  cursor: pointer; }\n#nav-icon div {\n    height: 1px;\n    width: 40px;\n    background: #fff;\n    position: absolute;\n    box-shadow: 0 0 4px #000;\n    left: 5px;\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out; }\n#nav-icon div:first-child {\n      top: 5px; }\n#nav-icon div:last-child {\n      top: 23px; }\n#nav-icon:hover div:first-child {\n    top: 14px;\n    left: 5px; }\n#nav-icon:hover div:last-child {\n    top: 14px;\n    left: 5px;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg); }\n#nav-icon.active div:first-child {\n    top: 14px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n#nav-icon.active div:last-child {\n    top: 14px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n#nav-icon.active:hover div:first-child {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n#nav-icon.active:hover div:last-child {\n    -webkit-transform: rotate(-135deg);\n            transform: rotate(-135deg); }\n#profile svg {\n  width: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3NoYWRvd3Muc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RyYW5zaXRpb25zLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL193cmFwcGVycy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdGV4dC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fb3ZlcmxheS5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9faGVhZGVyLWljb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0FBLHlCQUFBO0FDQUEsa0JBQUE7QUNBQSxrQkFBQTtBQ0FBLGtCQUFBO0FBR0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUxvQjtFQU1wQixtQkFOb0I7RUFPcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsZUFBZSxFQUFBO0FBR2pCO0VBRUUsaUJBQXdDLEVBQUE7QUFHMUM7RUFFRSxnQkFBdUMsRUFBQTtBQUd6QztFQUVFLGdCQUF1QyxFQUFBO0FDN0J6Qyx5QkFBQTtBSkFBLHlCQUFBO0FJR0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjSnhCMkI7RUl5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjSnpDMkI7RUkwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNKdERrQjtFSXVEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdKckVxQjtFSXNFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBRjVFM0Isa0JBQUE7QUdFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQTRCO0VBQzVCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VIVmxCLHlDQUxzQztFQVF0QyxpQ0FSc0MsRUFBQTtBR0N4QztJQWtCSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYixVQUFVO0lIYlosc0NBQStDO0lBRy9DLDhCQUF1QztJQUN2QywrQkdVZ0Q7WUhWaEQsdUJHVWdELEVBQUE7QUF6QmxEO0lBNkJJLFVBQVU7SUFDVixtQkFBbUIsRUFBQTtBQTlCdkI7TUFpQ00sYUFBYSxFQUFBO0FDbkNuQixrQkFBQTtBTEFBLGtCQUFBO0FDQUEsa0JBQUE7QUZBQSx5QkFBQTtBTUtBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBRnBCO0lBS0ksV0FBVztJQUNYLGVBQWU7SUFDZix5Q0FBcUM7WUFBckMsaUNBQXFDO0lKTnZDLHlDQUxzQztJQVF0QyxpQ0FSc0M7SUlhcEMsVU5WbUIsRUFBQTtBTUN2QjtNQVlNLGFOaEJnQixFQUFBO0FEUXRCO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0NUcUI7RURVckIsYUFBYTtFQUdiLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBO0FBR3JCO0lBaEJGO01BaUJJLFNBQVM7TUFDVCxVQUFVO01BQ1Ysc0NBQXNDO01BQ3RDLG1DQUFtQztNQUNuQyxxQkFBcUI7TUFDckIsaUJBQWlCLEVBQUEsRUFHcEI7QUFFRDtFQUNFLFlBQVksRUFBQTtBQURkO0lBSUksZUFBZSxFQUFBO0FBSm5CO01BT00sYUFBYTtNQUNiLDJCQUEyQjtNQUMzQixrQkFBa0IsRUFBQTtBQVR4QjtRQVlRLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLG9DQUE0QjtnQkFBNUIsNEJBQTRCO1FHN0NsQyx3Q0FKc0M7UUFPdEMsZ0NBUHNDLEVBQUE7QUhrQ3hDO1FHdkJFLHdDQUErQztRQUcvQyxnQ0FBdUM7UUFDdkMsK0JId0MrRDtnQkd4Qy9ELHVCSHdDK0QsRUFBQTtBQXJCakU7UUd2QkUsd0NBQStDO1FBRy9DLGdDQUF1QztRQUN2Qyw4Qkh3QytEO2dCR3hDL0Qsc0JId0MrRCxFQUFBO0FBckJqRTtRR3ZCRSx3Q0FBK0M7UUFHL0MsZ0NBQXVDO1FBQ3ZDLCtCSHdDK0Q7Z0JHeEMvRCx1Qkh3QytELEVBQUE7QUFyQmpFO1FHdkJFLHdDQUErQztRQUcvQyxnQ0FBdUM7UUFDdkMsOEJId0MrRDtnQkd4Qy9ELHNCSHdDK0QsRUFBQTtBQXJCakU7UUd2QkUsd0NBQStDO1FBRy9DLGdDQUF1QztRQUN2QywrQkh3QytEO2dCR3hDL0QsdUJId0MrRCxFQUFBO0FBckJqRTtRQTBCUSx3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQy9EWTtRRGdFWixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHlCQUF5QjtRRzlEL0IseUNBTHNDO1FBUXRDLGlDQVJzQyxFQUFBO0FIbUN4QztVQW9DVSxtQ0FBMkI7a0JBQTNCLDJCQUEyQjtVQUMzQixXQ3JFYSxFQUFBO0FEZ0N2QjtVQXlDVSxjQzVFWSxFQUFBO0FEZ0ZoQjtRQTdDTjtVQThDUSxrQkFBa0IsRUFBQTtVQTlDMUI7WUFpRFUsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixvQkFBb0IsRUFBQSxFQUNyQjtBQXBEVDtJQTJETSxVQUFVO0lBQ1Ysa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0FBS2hDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUxqQjtJQVFJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkUvRzBCO0lGZ0gxQixTQUFTO0lHNUdYLHlDQUxzQztJQVF0QyxpQ0FSc0MsRUFBQTtBSG9HeEM7TUFpQk0sUUFBUSxFQUFBO0FBakJkO01BcUJNLFNBQVMsRUFBQTtBQXJCZjtJQTZCUSxTQUFTO0lBQ1QsU0FBUyxFQUFBO0FBOUJqQjtJQWtDUSxTQUFTO0lBQ1QsU0FBUztJQUNULGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQTtBQXBDakM7SUE2Q1EsU0FBUztJQUNULGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTtBQTlDaEM7SUFrRFEsU0FBUztJQUNULGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQTtBQW5EakM7SUE0RFEsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0FBNURqQztJQWdFUSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7QUFNbEM7RUFFSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL2NvbG9yc1wiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9zaGFkb3dzXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3dyYXBwZXJzXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RleHRcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvb3ZlcmxheVwiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9oZWFkZXItaWNvblwiO1xuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuICB6LWluZGV4OiAxNTAwO1xuXG4gIC8vIGhlYWRlciBnb2VzIHZlcnRpY2FsbHlcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgNTBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIGF1dG8pO1xuICBncmlkLXJvdy1nYXA6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICAvLyBoZWFkZXIgZ29lcyBob3Jpem9udGFsbHlcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBhdXRvKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCBhdXRvKTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIH1cblxufVxuXG4jbmF2IHtcbiAgei1pbmRleDogOTUwO1xuXG4gIG5hdiB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgdWwge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICAgIGdyaWQtcm93LWdhcDogNDBweDtcblxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwcHgpO1xuICAgICAgICBAaW5jbHVkZSBjdXN0b20tdHJhbnNpdGlvbigkdHJhbnNpdGlvbi1tZWRpdW0pO1xuICAgICAgfVxuXG4gICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDUge1xuICAgICAgICBsaTpudGgtb2YtdHlwZSgjeyRpfSkge1xuICAgICAgICAgIEBpbmNsdWRlIGRlbGF5ZWQtdHJhbnNpdGlvbi10aW1lZChhbGwsIDAuM3MsIDAuMTVzICogJGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBmb250LWZhbWlseTogXCJFeG8gTGlnaHRcIjtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBAaW5jbHVkZSBjdXN0b20tdHJhbnNpdGlvbigkdHJhbnNpdGlvbi1xdWljayk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAyNHB4O1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBuYXYgdWwgbGkge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbiAgfVxufVxuXG4jbmF2LWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGRpdiB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNoYWRvdzogJG5hdi1pY29uLXNoYWRvdztcbiAgICBsZWZ0OiA1cHg7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICB0b3A6IDVweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgdG9wOiAyM3B4O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuXG4gICAgZGl2IHtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgIGxlZnQ6IDVweDtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgdG9wOiAxNHB4O1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5hY3RpdmUge1xuXG4gICAgZGl2IHtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgdG9wOiAxNHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYWN0aXZlOmhvdmVyIHtcblxuICAgIGRpdiB7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiNwcm9maWxlIHtcbiAgc3ZnIHtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbiRwcmltYXJ5LWJsdWU6ICMwMEI2RkY7XG4kdGV4dC1jb2xvcjogIzdFN0U3RTtcbiR0ZXh0LWNvbG9yLWhlYWRsaW5lOiAjQzhDOEM4O1xuJHRleHQtY29sb3Itd2hpdGU6ICNmZmY7XG4kbWVkaXVtLWdyZXk6ICM1MDRGNEY7XG4kc2Vjb25kYXJ5LWdyZWVuOiAjMDBjZTgyO1xuJHNlY29uZGFyeS1vcmFuZ2U6ICNGRkE1MDA7XG4kc2Vjb25kYXJ5LXJlZDogI0ZGMDA0RTtcblxuIiwiLyogQXV0aG9yOiBtazMwMyAqL1xuJG5hdi10ZXh0LXN3aXRjaC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbiRuYXYtaWNvbi1zaGFkb3c6IDAgMCA0cHggIzAwMDtcbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR0cmFuc2l0aW9uLXF1aWNrOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4kdHJhbnNpdGlvbi1tZWRpdW06IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tcXVpY2stZGVsYXllZDogYWxsIDAuMTVzIGVhc2UtaW4tb3V0IDAuMTVzO1xuXG5AbWl4aW4gY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXMpe1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtby10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG59XG5cbkBtaXhpbiBkZWxheWVkLXRyYW5zaXRpb24tdGltZWQoJHByb3BlcnR5LCAkdGltZSwgJGRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR3cmFwcGVyLXBhZGRpbmc6IDQwcHg7XG5cbiV3cmFwcGVyLWJhc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctbGVmdDogJHdyYXBwZXItcGFkZGluZztcbiAgcGFkZGluZy1yaWdodDogJHdyYXBwZXItcGFkZGluZztcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1heC13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IG5vbmU7XG59XG5cbi53aWRlLXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogMTExMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG5cbi5tZWRpdW0td3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiA4MDBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuXG4ubmFycm93LXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogNjAwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG5AaW1wb3J0IFwiY29sb3JzXCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUxpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYnKTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLWhlYWRsaW5lO1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxMnB4O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLWhlYWRsaW5lO1xuICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iLCJAaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zXCI7XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcbiAgei1pbmRleDogOTAwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIEBpbmNsdWRlIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2l0aW9uLXF1aWNrKTtcblxuICBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTEwMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIEBpbmNsdWRlIGRlbGF5ZWQtdHJhbnNpdGlvbi10aW1lZChhbGwsMXMsMC4xNXMpO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblxuICAgIGltZyB7XG4gICAgICBvcGFjaXR5OiAwLjA0O1xuICAgIH1cbiAgfVxufVxuIiwiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9zaGFkb3dzXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uaGVhZGVyLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBzdmcge1xuICAgIHdpZHRoOiAzNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCRuYXYtaWNvbi1zaGFkb3cpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2l0aW9uLXF1aWNrKTtcbiAgICBmaWxsOiAkdGV4dC1jb2xvci13aGl0ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgZmlsbDogJHByaW1hcnktYmx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _pages_products_overview_products_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/products-overview/products-overview.component */ "./src/app/pages/products-overview/products-overview.component.ts");
/* harmony import */ var _pages_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/shopping-cart/shopping-cart.component */ "./src/app/pages/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/orders/orders.component */ "./src/app/pages/orders/orders.component.ts");
/* harmony import */ var _pages_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/imprint/imprint.component */ "./src/app/pages/imprint/imprint.component.ts");
/* harmony import */ var _pages_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/greeting/greeting.component */ "./src/app/pages/greeting/greeting.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/page.service */ "./src/app/services/page.service.ts");

/* Author: mk303 */











var HeaderComponent = /** @class */ (function () {
    // Close menu when a new page load is finished
    function HeaderComponent(router, pageService) {
        var _this = this;
        this.router = router;
        this.pageService = pageService;
        this.menuOpen = false;
        this.pages = [];
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.menuOpen = false;
            }
        });
        this.router.config.unshift({ path: '', redirectTo: '/greeting', pathMatch: 'full' }, { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }, { path: 'products', component: _pages_products_overview_products_overview_component__WEBPACK_IMPORTED_MODULE_5__["ProductsOverviewComponent"] }, { path: 'product/:id', component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] }, { path: 'shopping_cart', component: _pages_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"] }, { path: 'orders', component: _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"] }, { path: 'imprint', component: _pages_imprint_imprint_component__WEBPACK_IMPORTED_MODULE_8__["ImprintComponent"] }, { path: 'greeting', component: _pages_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_9__["GreetingComponent"] }, { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"] });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageService.getPageList().subscribe(function (pages) {
            console.log("Fetched pages:", pages);
            _this.pages = pages;
        }, function (err) {
            console.log("Error fetching pages:", err);
        });
    };
    /**
     * Toggles the status of the menu
     */
    HeaderComponent.prototype.toggleNavActiveClass = function () {
        this.menuOpen = !this.menuOpen;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_11__["PageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/language-switch/language-switch.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/language-switch/language-switch.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<div *ngIf=\"languages?.length > 0 && currentLang != null\" class=\"nav-text-switch\">\n  <span *ngFor=\"let lang of languages index as i\" [ngClass]=\"{'active': currentLang.langCode == lang.langCode}\" (click)=\"switchLang(i)\">{{lang.langCode}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/language-switch/language-switch.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/language-switch/language-switch.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n.nav-text-switch {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 10px; }\n.nav-text-switch span {\n    font-size: 16px;\n    line-height: 16px;\n    font-family: \"Roboto Light\";\n    cursor: pointer;\n    text-align: left;\n    text-transform: uppercase;\n    text-shadow: 0 0 3px #000;\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n    opacity: 0.5; }\n.nav-text-switch span:hover {\n      opacity: 1;\n      color: #00B6FF; }\n.nav-text-switch span.active {\n      opacity: 1; }\n.nav-text-switch span:first-child {\n      text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xhbmd1YWdlLXN3aXRjaC9sYW5ndWFnZS1zd2l0Y2guY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19uYXZfdGV4dF9zd2l0Y2guc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fc2hhZG93cy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdHJhbnNpdGlvbnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RleHQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0FBLGtCQUFBO0FDQUEseUJBQUE7QUNBQSxrQkFBQTtBQ0FBLGtCQUFBO0FDQUEseUJBQUE7QUhBQSx5QkFBQTtBR0dBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUEwQyxFQUFBO0FBRzVDO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUEyQyxFQUFBO0FBRzdDO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUE2QyxFQUFBO0FBRy9DO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE4QyxFQUFBO0FBR2hEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0h4QjJCO0VHeUIzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7QUFFbkI7SUFYRjtNQVlJLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUEsRUFFdkI7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0h6QzJCO0VHMEMzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixjSHREa0I7RUd1RGxCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXSHJFcUI7RUdzRXJCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7QUpyRTNCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUIsRUFBQTtBQUh2QjtJQU1JLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCRWxCaUM7SUNLbkMseUNBTHNDO0lBUXRDLGlDQVJzQztJSG9CcEMsWUFBWSxFQUFBO0FBZGhCO01BaUJNLFVBQVU7TUFDVixjQ3hCZ0IsRUFBQTtBRE10QjtNQXNCTSxVQUFVLEVBQUE7QUF0QmhCO01BMEJNLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS1zd2l0Y2gvbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9uYXZfdGV4dF9zd2l0Y2hcIjtcbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cblxuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9jb2xvcnNcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvc2hhZG93c1wiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90cmFuc2l0aW9uc1wiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5cbi5uYXYtdGV4dC1zd2l0Y2gge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LXNoYWRvdzogJG5hdi10ZXh0LXN3aXRjaC1zaGFkb3c7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xuICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1ibHVlO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiRuYXYtdGV4dC1zd2l0Y2gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XG4kbmF2LWljb24tc2hhZG93OiAwIDAgNHB4ICMwMDA7XG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG4kdHJhbnNpdGlvbi1xdWljazogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tbWVkaXVtOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiR0cmFuc2l0aW9uLXF1aWNrLWRlbGF5ZWQ6IGFsbCAwLjE1cyBlYXNlLWluLW91dCAwLjE1cztcblxuQG1peGluIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzKXtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW8tdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG4gIHRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xufVxuXG5AbWl4aW4gZGVsYXllZC10cmFuc2l0aW9uLXRpbWVkKCRwcm9wZXJ0eSwgJHRpbWUsICRkZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuQGltcG9ydCBcImNvbG9yc1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmJyk7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/language-switch/language-switch.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/language-switch/language-switch.component.ts ***!
  \*************************************************************************/
/*! exports provided: LanguageSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitchComponent", function() { return LanguageSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");

/* Author: mk303 */


var LanguageSwitchComponent = /** @class */ (function () {
    function LanguageSwitchComponent(languageService) {
        this.languageService = languageService;
    }
    LanguageSwitchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.getLanguages().subscribe(function (languages) {
            _this.languages = languages;
            // Initial language - gotten from server
            _this.languageService.getCurrentLanguage()
                .subscribe(function (lang) {
                // highlight correct language
                _this.currentLang = lang;
                // log successful language switch
                console.log("Switching language to: ", lang.langCode);
            });
        });
    };
    /**
     * Triggers a language switch. Checks if we need to switch and if so we call languageService to execute switch
     * On success page is reloaded to get all texts in the new language.
     * @param langIndex in languages array of language to which we want to switch
     */
    LanguageSwitchComponent.prototype.switchLang = function (langIndex) {
        // Check if we need to switch lang
        if (this.currentLang != this.languages[langIndex]) {
            this.languageService.switchLanguage(this.languages[langIndex].langCode).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log('Error: ' + err.error);
                console.log('Name: ' + err.name);
                console.log('Message: ' + err.message);
                console.log('Status: ' + err.status);
            }, 
            // on complete change lang in the frontend
            function () {
                // reload page to get data in correct language
                window.location.reload();
            });
        }
    };
    LanguageSwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-language-switch',
            template: __webpack_require__(/*! ./language-switch.component.html */ "./src/app/components/language-switch/language-switch.component.html"),
            styles: [__webpack_require__(/*! ./language-switch.component.scss */ "./src/app/components/language-switch/language-switch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
    ], LanguageSwitchComponent);
    return LanguageSwitchComponent;
}());



/***/ }),

/***/ "./src/app/components/login-toggle/login-toggle.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/login-toggle/login-toggle.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<div id=\"profile\" class=\"header-icon\">\n  <svg (click)=\"toggleLoginPanel();\" version=\"1.1\"xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 29.58 29.84\" style=\"enable-background:new 0 0 29.58 29.84;\" xml:space=\"preserve\">\n      <path d=\"M14.79,29.84c-4.15,0-7.71-2.23-7.86-2.33c-0.32-0.2-0.42-0.63-0.21-0.95c0.2-0.32,0.62-0.42,0.94-0.22\n        c0.03,0.02,3.38,2.12,7.13,2.12c7.4,0,13.42-6.07,13.42-13.54S22.19,1.38,14.79,1.38c-4.41,0-7.45,2.16-9.23,3.97\n        c-2.61,2.66-4.22,6.32-4.19,9.56c0.02,2.06,0.7,5.09,2.52,7.79c3.12-4.19,7.61-6.56,11.67-6.09c1.84,0.21,4.72,1.17,7.27,3.24\n        c0.29,0.24,0.34,0.67,0.1,0.97c-0.24,0.3-0.67,0.34-0.96,0.11c-2.32-1.88-4.91-2.75-6.56-2.94c-3.81-0.44-8.1,2.03-10.94,6.29\n        c-0.12,0.18-0.32,0.3-0.54,0.31c-0.22,0.01-0.43-0.09-0.56-0.26C0.92,21.17,0.02,17.4,0,14.93c-0.03-3.59,1.72-7.64,4.59-10.55\n        C6.55,2.38,9.91,0,14.79,0c8.15,0,14.79,6.69,14.79,14.92C29.58,23.14,22.94,29.84,14.79,29.84z\"></path>\n      <path d=\"M14.73,6.71c-2.02,0-3.67,1.66-3.67,3.7c0,2.04,1.65,3.7,3.67,3.7c2.02,0,3.67-1.66,3.67-3.7\n        C18.4,8.37,16.75,6.71,14.73,6.71z M14.73,15.49c-2.78,0-5.04-2.28-5.04-5.08c0-2.8,2.26-5.08,5.04-5.08c2.78,0,5.04,2.28,5.04,5.08\n        C19.77,13.21,17.51,15.49,14.73,15.49z\"></path>\n    </svg>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login-toggle/login-toggle.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/login-toggle/login-toggle.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n.header-icon {\n  text-align: center;\n  position: relative; }\n.header-icon svg {\n    width: 34px;\n    cursor: pointer;\n    -webkit-filter: drop-shadow(0 0 4px #000);\n            filter: drop-shadow(0 0 4px #000);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n    fill: #fff; }\n.header-icon svg:hover {\n      fill: #00B6FF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLXRvZ2dsZS9sb2dpbi10b2dnbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3NoYWRvd3Muc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RyYW5zaXRpb25zLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19oZWFkZXItaWNvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDQUEseUJBQUE7QUNBQSxrQkFBQTtBQ0FBLGtCQUFBO0FDQUEsa0JBQUE7QUZBQSxrQkFBQTtBQ0FBLGtCQUFBO0FGQUEseUJBQUE7QUdLQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUZwQjtJQUtJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUNBQXFDO1lBQXJDLGlDQUFxQztJRE52Qyx5Q0FMc0M7SUFRdEMsaUNBUnNDO0lDYXBDLFVIVm1CLEVBQUE7QUdDdkI7TUFZTSxhSGhCZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tdG9nZ2xlL2xvZ2luLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEF1dGhvcjogbWszMDMgKi9cbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3NoYWRvd3NcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdHJhbnNpdGlvbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvaGVhZGVyLWljb25cIjtcbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiRuYXYtdGV4dC1zd2l0Y2gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XG4kbmF2LWljb24tc2hhZG93OiAwIDAgNHB4ICMwMDA7XG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG4kdHJhbnNpdGlvbi1xdWljazogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tbWVkaXVtOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiR0cmFuc2l0aW9uLXF1aWNrLWRlbGF5ZWQ6IGFsbCAwLjE1cyBlYXNlLWluLW91dCAwLjE1cztcblxuQG1peGluIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzKXtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW8tdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG4gIHRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xufVxuXG5AbWl4aW4gZGVsYXllZC10cmFuc2l0aW9uLXRpbWVkKCRwcm9wZXJ0eSwgJHRpbWUsICRkZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3NoYWRvd3NcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdHJhbnNpdGlvbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XG5cbi5oZWFkZXItaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coJG5hdi1pY29uLXNoYWRvdyk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xuICAgIGZpbGw6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBmaWxsOiAkcHJpbWFyeS1ibHVlO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/login-toggle/login-toggle.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-toggle/login-toggle.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginToggleComponent", function() { return LoginToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_toggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-toggle.service */ "./src/app/services/login-toggle.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");

/* Author: mk303 */



var LoginToggleComponent = /** @class */ (function () {
    function LoginToggleComponent(loginToggleService, loginService) {
        this.loginToggleService = loginToggleService;
        this.loginService = loginService;
    }
    /**
     * Toggles login/logout panels status (opened / closed) depending on the users login status (logged in / logged out)
     * - logged in: Logout panel is toggled
     * - logged out: Login panel is toggled
     */
    LoginToggleComponent.prototype.toggleLoginPanel = function () {
        var _this = this;
        this.loginService.isLoggedIn().subscribe(function (isLoggedIn) {
            console.log('User is logged in: ' + isLoggedIn);
            if (!isLoggedIn) {
                console.log('Calling login panel');
                _this.loginToggleService.toggleLoginPanel();
            }
            else {
                console.log('Calling logout panel');
                _this.loginToggleService.toggleLogoutPanel();
            }
        }, function (err) {
            console.log('Error: ' + JSON.stringify(err.error));
            console.log('Name: ' + err.name);
            console.log('Message: ' + err.message);
            console.log('Status: ' + err.status);
        });
    };
    LoginToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-toggle',
            template: __webpack_require__(/*! ./login-toggle.component.html */ "./src/app/components/login-toggle/login-toggle.component.html"),
            styles: [__webpack_require__(/*! ./login-toggle.component.scss */ "./src/app/components/login-toggle/login-toggle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_toggle_service__WEBPACK_IMPORTED_MODULE_2__["LoginToggleService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginToggleComponent);
    return LoginToggleComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303, jm114 -->\n<div class=\"login_logout overlay\" [ngClass]=\"{'active': loginPanelOpened}\" *ngIf=\"loaded && data != null\">\n  <div class=\"narrow-wrapper\">\n    <h2>{{data.headline}}</h2>\n    <form id=\"loginForm\" name=\"loginForm\">\n      <div class=\"input\">\n        <input type=\"text\" #username placeholder=\"{{data.username}}\"/>\n      </div>\n      <div class=\"input\">\n        <input type=\"password\" #password placeholder=\"{{data.password}}\" [ngClass]=\"credentials\"/>\n      </div>\n      <app-button (click)=\"login()\" [buttonText]=\"data.buttonText\"></app-button>\n    </form>\n    <div class=\"close-icon\" (click)=\"toggleLoginPanel();\">\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n  <img src=\"assets/images/logo.svg\" />\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303, jm114 */\n/* Author: mk303 */\n.overlay {\n  position: fixed;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: black;\n  z-index: 900;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out; }\n.overlay img {\n    display: inline-block;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    z-index: -100;\n    opacity: 0;\n    -webkit-transition: all 1s ease-in-out;\n    transition: all 1s ease-in-out;\n    -webkit-transition-delay: 0.15s;\n            transition-delay: 0.15s; }\n.overlay.active {\n    opacity: 1;\n    visibility: visible; }\n.overlay.active img {\n      opacity: 0.04; }\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n/* Author: mk303 */\n.login_logout > div {\n  position: relative; }\n.close-icon {\n  position: absolute;\n  top: -70px;\n  right: -50px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  z-index: 1000;\n  text-align: center; }\n.close-icon span {\n    position: absolute;\n    top: 15px;\n    left: -5px;\n    display: inline-block;\n    width: 40px;\n    height: 1px;\n    background: #fff;\n    box-shadow: 0 0 4px #000;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out; }\n.close-icon span:first-child {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n.close-icon:hover span {\n    background: #00B6FF; }\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\n#loginForm {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-row-gap: 15px; }\n#loginForm ::ng-deep button {\n    width: 100% !important;\n    margin-top: 25px; }\nh2 {\n  margin-bottom: 60px; }\n.input {\n  display: inline-block;\n  width: 100%;\n  border-bottom: 1px solid #504F4F;\n  position: relative; }\n.input:before, .input:after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 1px;\n    height: 10px;\n    background: #504F4F; }\n.input:after {\n    left: initial;\n    right: 0; }\n.input input {\n    font-family: 'Exo Light';\n    font-size: 20px;\n    color: #fff;\n    text-align: center;\n    line-height: 20px;\n    padding: 10px 20px;\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdHJhbnNpdGlvbnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX292ZXJsYXkuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RleHQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fbG9naW5fbG9nb3V0LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19zaGFkb3dzLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL193cmFwcGVycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FDQUEsa0JBQUE7QUNFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQTRCO0VBQzVCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VEVmxCLHlDQUxzQztFQVF0QyxpQ0FSc0MsRUFBQTtBQ0N4QztJQWtCSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYixVQUFVO0lEYlosc0NBQStDO0lBRy9DLDhCQUF1QztJQUN2QywrQkNVZ0Q7WURWaEQsdUJDVWdELEVBQUE7QUF6QmxEO0lBNkJJLFVBQVU7SUFDVixtQkFBbUIsRUFBQTtBQTlCdkI7TUFpQ00sYUFBYSxFQUFBO0FDbkNuQix5QkFBQTtBQ0FBLHlCQUFBO0FER0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQ3hCMkI7RUR5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQ3pDMkI7RUQwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNDdERrQjtFRHVEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdDckVxQjtFRHNFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBRTVFM0Isa0JBQUE7QUZBQSx5QkFBQTtBQ0FBLHlCQUFBO0FER0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQ3hCMkI7RUR5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQ3pDMkI7RUQwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNDdERrQjtFRHVEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdDckVxQjtFRHNFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBRzVFM0Isa0JBQUE7QUxBQSxrQkFBQTtBSUtBO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7QUFScEI7SUFXSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0JDekIwQjtJRDBCMUIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJSnRCMUIseUNBTHNDO0lBUXRDLGlDQVJzQyxFQUFBO0FJUXhDO01BdUJLLGlDQUF5QjtjQUF6Qix5QkFBeUIsRUFBQTtBQXZCOUI7SUE2Qk0sbUJEckNnQixFQUFBO0FHRHRCLGtCQUFBO0FBR0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUxvQjtFQU1wQixtQkFOb0I7RUFPcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsZUFBZSxFQUFBO0FBR2pCO0VBRUUsaUJBQXdDLEVBQUE7QUFHMUM7RUFFRSxnQkFBdUMsRUFBQTtBQUd6QztFQUVFLGdCQUF1QyxFQUFBO0FQdkJ6QztFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7QUFIcEI7SUFNSSxzQkFBc0I7SUFDdEIsZ0JBQWdCLEVBQUE7QUc0QnBCO0VIdkJFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQ0luQm1CO0VKb0JuQixrQkFBa0IsRUFBQTtBQUpwQjtJQU9JLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkk5QmlCLEVBQUE7QUpnQnJCO0lBa0JJLGFBQWE7SUFDYixRQUFRLEVBQUE7QUFuQlo7SUF1Qkksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXSTFDbUI7SUoyQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9vdmVybGF5XCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RleHRcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvbG9naW5fbG9nb3V0XCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3dyYXBwZXJzXCI7XG5cbiNsb2dpbkZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1yb3ctZ2FwOiAxNXB4O1xuXG4gIDo6bmctZGVlcCBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxufVxuXG5oMiB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbWVkaXVtLWdyZXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAkbWVkaXVtLWdyZXk7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBsZWZ0OiBpbml0aWFsO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnRXhvIExpZ2h0JztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR0cmFuc2l0aW9uLXF1aWNrOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4kdHJhbnNpdGlvbi1tZWRpdW06IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tcXVpY2stZGVsYXllZDogYWxsIDAuMTVzIGVhc2UtaW4tb3V0IDAuMTVzO1xuXG5AbWl4aW4gY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXMpe1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtby10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG59XG5cbkBtaXhpbiBkZWxheWVkLXRyYW5zaXRpb24tdGltZWQoJHByb3BlcnR5LCAkdGltZSwgJGRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbiIsIkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdHJhbnNpdGlvbnNcIjtcblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xuICB6LWluZGV4OiA5MDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xuXG4gIGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgQGluY2x1ZGUgZGVsYXllZC10cmFuc2l0aW9uLXRpbWVkKGFsbCwxcywwLjE1cyk7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXG4gICAgaW1nIHtcbiAgICAgIG9wYWNpdHk6IDAuMDQ7XG4gICAgfVxuICB9XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuQGltcG9ydCBcImNvbG9yc1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmJyk7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbiRwcmltYXJ5LWJsdWU6ICMwMEI2RkY7XG4kdGV4dC1jb2xvcjogIzdFN0U3RTtcbiR0ZXh0LWNvbG9yLWhlYWRsaW5lOiAjQzhDOEM4O1xuJHRleHQtY29sb3Itd2hpdGU6ICNmZmY7XG4kbWVkaXVtLWdyZXk6ICM1MDRGNEY7XG4kc2Vjb25kYXJ5LWdyZWVuOiAjMDBjZTgyO1xuJHNlY29uZGFyeS1vcmFuZ2U6ICNGRkE1MDA7XG4kc2Vjb25kYXJ5LXJlZDogI0ZGMDA0RTtcblxuIiwiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3NoYWRvd3NcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdHJhbnNpdGlvbnNcIjtcblxuLmxvZ2luX2xvZ291dD5kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03MHB4O1xuICByaWdodDogLTUwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogLTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAkbmF2LWljb24tc2hhZG93O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1ibHVlO1xuICAgIH1cbiAgfVxufVxuIiwiLyogQXV0aG9yOiBtazMwMyAqL1xuJG5hdi10ZXh0LXN3aXRjaC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbiRuYXYtaWNvbi1zaGFkb3c6IDAgMCA0cHggIzAwMDtcbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR3cmFwcGVyLXBhZGRpbmc6IDQwcHg7XG5cbiV3cmFwcGVyLWJhc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctbGVmdDogJHdyYXBwZXItcGFkZGluZztcbiAgcGFkZGluZy1yaWdodDogJHdyYXBwZXItcGFkZGluZztcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1heC13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IG5vbmU7XG59XG5cbi53aWRlLXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogMTExMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG5cbi5tZWRpdW0td3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiA4MDBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuXG4ubmFycm93LXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogNjAwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_toggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-toggle.service */ "./src/app/services/login-toggle.service.ts");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/login */ "./src/app/models/login.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");

/* Author: mk303, jm114 */







var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginToggleService, loginService, contentService, loginAdapter, messageService) {
        this.loginToggleService = loginToggleService;
        this.loginService = loginService;
        this.contentService = contentService;
        this.loginAdapter = loginAdapter;
        this.messageService = messageService;
        this.loaded = false;
        this.loginPanelOpened = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.getContentById(10)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return _this.loginAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.data = data; });
        this.loginToggleService.toggleLogin.subscribe(function (loginPanelOpened) {
            _this.loginPanelOpened = loginPanelOpened;
            _this.loaded = true;
        });
        this.contentService.getStaticStrings().then(function (data) {
            _this.staticStrings = data;
        });
    };
    /**
     * Toggles the login panel status (opened / closed) by calling the loginToggleService to do so
     */
    LoginComponent.prototype.toggleLoginPanel = function () {
        this.loginToggleService.toggleLoginPanel();
    };
    /**
     * Triggers a login attempt. First check if a username and a password was entered
     * - if so loginService is called to execute login
     * - if not user is asked to provide a username and a password.
     *
     * Depending on response from loginService the user is shown a message.
     * true = success: Login successful, user is greeted
     * false = failed: Username oder password were incorrect
     * *  = undefined: Unknown error due to unknown response
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = this.username.nativeElement.value;
        var password = this.password.nativeElement.value;
        var user;
        // Check if a username and a password was entered
        if (username.length > 3 && password.length > 3) {
            this.loginService.login(username, password).subscribe(function (res) {
                console.log('Response was: ' + JSON.stringify(res));
                if (res == true) {
                    _this.loginService.getUserName().subscribe(function (data) {
                        user = data;
                        console.log("Username:", JSON.stringify(name));
                        // Write out success message
                        _this.messageService.showSuccessMessage(_this.staticStrings.LOGIN_WELCOME_1 + ' ' + user.name + '! ' + _this.staticStrings.LOGIN_WELCOME_2);
                        // closeLogin user login window
                        _this.loginToggleService.closeLogin();
                    });
                }
                else if (res == false) {
                    // Write out info message
                    console.log('Error: Username `' + username + '` or password was incorrect');
                    _this.messageService.showErrorMessage(_this.staticStrings.LOGIN_ERROR_1 + ' \'' + username + '\' ' + _this.staticStrings.LOGIN_ERROR_2);
                }
                else {
                    console.log('Error: Server did not respond with a boolean to verify user login. Response was: ' + JSON.stringify(res));
                    _this.messageService.showErrorMessage(_this.staticStrings.ERROR_DEFAULT);
                }
            }, 
            // Write out error message
            function (err) {
                if (err.error.message == 'blocked') {
                    console.log(JSON.stringify(err.error));
                    console.log('Call: ' + err.message);
                    _this.messageService.showErrorMessage(_this.staticStrings.LOGIN_ERROR_TIMEOUT);
                }
                else {
                    console.log(JSON.stringify(err.error));
                    console.log('Call: ' + err.message);
                    _this.messageService.showErrorMessage(_this.staticStrings.ERROR_DEFAULT);
                }
            });
        }
        // If not both, username and password, were provided, print out a info message so the user can try again
        else {
            this.messageService.showInfoMessage(this.staticStrings.LOGIN_INFO);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('username'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_toggle_service__WEBPACK_IMPORTED_MODULE_2__["LoginToggleService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _services_content_service__WEBPACK_IMPORTED_MODULE_6__["ContentService"],
            _models_login__WEBPACK_IMPORTED_MODULE_3__["LoginAdapter"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<div class=\"login_logout overlay\" [ngClass]=\"{'active': logoutPanelOpened}\" *ngIf=\"loaded && data != null\">\n  <div class=\"narrow-wrapper logout_content\">\n    <h2>{{data.headline}}</h2>\n    <p>{{data.text}}</p>\n    <app-button (click)=\"logout()\" [buttonText]=\"data.buttonText\">Logout</app-button>\n    <div class=\"close-icon\" (click)=\"toggleLogoutPanel();\">\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n  <img src=\"assets/images/logo.svg\" />\n</div>\n"

/***/ }),

/***/ "./src/app/components/logout/logout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303 */\n.overlay {\n  position: fixed;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: black;\n  z-index: 900;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out; }\n.overlay img {\n    display: inline-block;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    z-index: -100;\n    opacity: 0;\n    -webkit-transition: all 1s ease-in-out;\n    transition: all 1s ease-in-out;\n    -webkit-transition-delay: 0.15s;\n            transition-delay: 0.15s; }\n.overlay.active {\n    opacity: 1;\n    visibility: visible; }\n.overlay.active img {\n      opacity: 0.04; }\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n/* Author: mk303 */\n.login_logout > div {\n  position: relative; }\n.close-icon {\n  position: absolute;\n  top: -70px;\n  right: -50px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  z-index: 1000;\n  text-align: center; }\n.close-icon span {\n    position: absolute;\n    top: 15px;\n    left: -5px;\n    display: inline-block;\n    width: 40px;\n    height: 1px;\n    background: #fff;\n    box-shadow: 0 0 4px #000;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out; }\n.close-icon span:first-child {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n.close-icon:hover span {\n    background: #00B6FF; }\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\n.logout_content {\n  text-align: center; }\n.logout_content ::ng-deep button {\n    width: 100% !important;\n    margin-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL190cmFuc2l0aW9ucy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fb3ZlcmxheS5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdGV4dC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19sb2dpbl9sb2dvdXQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3NoYWRvd3Muc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3dyYXBwZXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUNBQSxrQkFBQTtBQ0VBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBNEI7RUFDNUIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RURWbEIseUNBTHNDO0VBUXRDLGlDQVJzQyxFQUFBO0FDQ3hDO0lBa0JJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFVBQVU7SURiWixzQ0FBK0M7SUFHL0MsOEJBQXVDO0lBQ3ZDLCtCQ1VnRDtZRFZoRCx1QkNVZ0QsRUFBQTtBQXpCbEQ7SUE2QkksVUFBVTtJQUNWLG1CQUFtQixFQUFBO0FBOUJ2QjtNQWlDTSxhQUFhLEVBQUE7QUNuQ25CLHlCQUFBO0FDQUEseUJBQUE7QURHQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBMEMsRUFBQTtBQUc1QztFQUNFLHdCQUF3QjtFQUN4Qix5QkFBMkMsRUFBQTtBQUc3QztFQUNFLDBCQUEwQjtFQUMxQiwyQkFBNkMsRUFBQTtBQUcvQztFQUNFLDJCQUEyQjtFQUMzQiw0QkFBOEMsRUFBQTtBQUdoRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNDeEIyQjtFRHlCM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBRW5CO0lBWEY7TUFZSSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBLEVBRXZCO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNDekMyQjtFRDBDM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsY0N0RGtCO0VEdURsQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0NyRXFCO0VEc0VyQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBO0FFNUUzQixrQkFBQTtBRkFBLHlCQUFBO0FDQUEseUJBQUE7QURHQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBMEMsRUFBQTtBQUc1QztFQUNFLHdCQUF3QjtFQUN4Qix5QkFBMkMsRUFBQTtBQUc3QztFQUNFLDBCQUEwQjtFQUMxQiwyQkFBNkMsRUFBQTtBQUcvQztFQUNFLDJCQUEyQjtFQUMzQiw0QkFBOEMsRUFBQTtBQUdoRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNDeEIyQjtFRHlCM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBRW5CO0lBWEY7TUFZSSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBLEVBRXZCO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNDekMyQjtFRDBDM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsY0N0RGtCO0VEdURsQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0NyRXFCO0VEc0VyQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBO0FHNUUzQixrQkFBQTtBTEFBLGtCQUFBO0FJS0E7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQVJwQjtJQVdJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix3QkN6QjBCO0lEMEIxQixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lKdEIxQix5Q0FMc0M7SUFRdEMsaUNBUnNDLEVBQUE7QUlReEM7TUF1QkssaUNBQXlCO2NBQXpCLHlCQUF5QixFQUFBO0FBdkI5QjtJQTZCTSxtQkRyQ2dCLEVBQUE7QUdEdEIsa0JBQUE7QUFHQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBTG9CO0VBTXBCLG1CQU5vQjtFQU9wQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFHcEI7RUFFRSxlQUFlLEVBQUE7QUFHakI7RUFFRSxpQkFBd0MsRUFBQTtBQUcxQztFQUVFLGdCQUF1QyxFQUFBO0FBR3pDO0VBRUUsZ0JBQXVDLEVBQUE7QVB2QnpDO0VBQ0Usa0JBQWtCLEVBQUE7QUFEcEI7SUFJSSxzQkFBc0I7SUFDdEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL292ZXJsYXlcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdGV4dFwiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9sb2dpbl9sb2dvdXRcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvd3JhcHBlcnNcIjtcblxuLmxvZ291dF9jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIDo6bmctZGVlcCBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxuXG59XG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG4kdHJhbnNpdGlvbi1xdWljazogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tbWVkaXVtOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiR0cmFuc2l0aW9uLXF1aWNrLWRlbGF5ZWQ6IGFsbCAwLjE1cyBlYXNlLWluLW91dCAwLjE1cztcblxuQG1peGluIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzKXtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW8tdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG4gIHRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xufVxuXG5AbWl4aW4gZGVsYXllZC10cmFuc2l0aW9uLXRpbWVkKCRwcm9wZXJ0eSwgJHRpbWUsICRkZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XG59XG4iLCJAaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zXCI7XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcbiAgei1pbmRleDogOTAwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIEBpbmNsdWRlIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2l0aW9uLXF1aWNrKTtcblxuICBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTEwMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIEBpbmNsdWRlIGRlbGF5ZWQtdHJhbnNpdGlvbi10aW1lZChhbGwsMXMsMC4xNXMpO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblxuICAgIGltZyB7XG4gICAgICBvcGFjaXR5OiAwLjA0O1xuICAgIH1cbiAgfVxufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XG4gIH1cbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdGV4dFwiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9zaGFkb3dzXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zXCI7XG5cbi5sb2dpbl9sb2dvdXQ+ZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNzBweDtcbiAgcmlnaHQ6IC01MHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IC01cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogJG5hdi1pY29uLXNoYWRvdztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIEBpbmNsdWRlIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2l0aW9uLXF1aWNrKTtcblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktYmx1ZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiRuYXYtdGV4dC1zd2l0Y2gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XG4kbmF2LWljb24tc2hhZG93OiAwIDAgNHB4ICMwMDA7XG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG4kd3JhcHBlci1wYWRkaW5nOiA0MHB4O1xuXG4ld3JhcHBlci1iYXNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6ICR3cmFwcGVyLXBhZGRpbmc7XG4gIHBhZGRpbmctcmlnaHQ6ICR3cmFwcGVyLXBhZGRpbmc7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXgtd3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiBub25lO1xufVxuXG4ud2lkZS13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IDExMTBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuXG4ubWVkaXVtLXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogODAwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cblxuLm5hcnJvdy13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IDYwMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/logout */ "./src/app/models/logout.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_login_toggle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login-toggle.service */ "./src/app/services/login-toggle.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");








var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(contentService, loginToggleService, logoutAdapter, messageService, loginService) {
        this.contentService = contentService;
        this.loginToggleService = loginToggleService;
        this.logoutAdapter = logoutAdapter;
        this.messageService = messageService;
        this.loginService = loginService;
        this.logoutPanelOpened = false;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.getContentById(13)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.logoutAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.data = data; });
        this.loginToggleService.toggleLogout.subscribe(function (logoutPanelOpened) {
            _this.logoutPanelOpened = logoutPanelOpened;
            _this.loaded = true;
        });
        this.contentService.getStaticStrings().then(function (data) {
            _this.staticStrings = data;
        });
    };
    /**
     * Toggles the logout panel status (opened / closed) by calling the loginToggleService to do so
     */
    LogoutComponent.prototype.toggleLogoutPanel = function () {
        this.loginToggleService.toggleLogoutPanel();
    };
    /**
     * Triggers a logout attempt.
     *
     * Depending on response from loginService the user is shown a message.
     * true = success: Logout successful, user is informed
     * false = failed: Something went wrong on server side, inform user
     * *  = undefined: Something went wrong on server side, inform user
     */
    LogoutComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout().subscribe(function (res) {
            console.log('Response was: ' + JSON.stringify(res));
            if (res == true) {
                // Write out success message
                _this.messageService.showSuccessMessage(_this.staticStrings.LOGOUT_SUCCESSFUL);
                // closeLogin user login window
                _this.loginToggleService.closeLogout();
            }
            else {
                console.log('Error: Logout did not work. Response was: ' + JSON.stringify(res));
                _this.messageService.showErrorMessage(_this.staticStrings.ERROR_DEFAULT);
            }
        }, 
        // Write out error message
        function (err) {
            console.log(JSON.stringify(err.error));
            console.log('Call: ' + err.message);
            _this.messageService.showErrorMessage(_this.staticStrings.ERROR_DEFAULT);
        });
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/components/logout/logout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"],
            _services_login_toggle_service__WEBPACK_IMPORTED_MODULE_5__["LoginToggleService"],
            _models_logout__WEBPACK_IMPORTED_MODULE_2__["LogoutAdapter"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<div class=\"top_panel\" *ngIf=\"messageService.message != null\"\n     [@openClose]=\"messageService.show ? 'openState' : 'closedState'\"\n     [ngClass]=\"{\n     'success': messageLevel.Success == messageService.messageLevel,\n     'info':    messageLevel.Info == messageService.messageLevel,\n     'error':   messageLevel.Error == messageService.messageLevel}\">\n  <span>{{messageService.message}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/message/message.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n.top_panel {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  padding: 14px 20px;\n  z-index: 1000; }\n.top_panel.success {\n    background: rgba(0, 206, 130, 0.5);\n    border: 1px solid #00ce82; }\n.top_panel.success span:before {\n      content: url('check.svg'); }\n.top_panel.info {\n    background: rgba(255, 165, 0, 0.5);\n    border: 1px solid #FFA500; }\n.top_panel.info span:before {\n      content: url('info.svg'); }\n.top_panel.error {\n    background: rgba(255, 0, 78, 0.5);\n    border: 1px solid #FF004E; }\n.top_panel.error span:before {\n      content: url('error.svg'); }\n.top_panel span {\n    display: inline-block;\n    width: 100%;\n    font-size: 14px;\n    line-height: 26px;\n    font-family: \"Exo Bold\";\n    color: #fff; }\n.top_panel span:before {\n      content: '';\n      display: inline-block;\n      width: 26px;\n      height: 22px;\n      margin-right: 10px;\n      position: relative;\n      top: 7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RleHQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdHJhbnNpdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0FBLHlCQUFBO0FDQUEseUJBQUE7QURHQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBMEMsRUFBQTtBQUc1QztFQUNFLHdCQUF3QjtFQUN4Qix5QkFBMkMsRUFBQTtBQUc3QztFQUNFLDBCQUEwQjtFQUMxQiwyQkFBNkMsRUFBQTtBQUcvQztFQUNFLDJCQUEyQjtFQUMzQiw0QkFBOEMsRUFBQTtBQUdoRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNDeEIyQjtFRHlCM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBRW5CO0lBWEY7TUFZSSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBLEVBRXZCO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNDekMyQjtFRDBDM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsY0N0RGtCO0VEdURsQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0NyRXFCO0VEc0VyQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBO0FFNUUzQixrQkFBQTtBSElBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVDQUE4QjtFR0M5Qix5Q0FBK0M7RUFHL0MsaUNBQXVDO0VBQ3ZDLDRCSEpnRDtVR0loRCxvQkhKZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtBQVhmO0lBY0ksa0NFWnFCO0lGYXJCLHlCRWJxQixFQUFBO0FGRnpCO01BaUJNLHlCQUFnRCxFQUFBO0FBakJ0RDtJQXNCSSxrQ0VuQnNCO0lGb0J0Qix5QkVwQnNCLEVBQUE7QUZIMUI7TUF5Qk0sd0JBQStDLEVBQUE7QUF6QnJEO0lBOEJJLGlDRTFCbUI7SUYyQm5CLHlCRTNCbUIsRUFBQTtBRkp2QjtNQWlDTSx5QkFBZ0QsRUFBQTtBQWpDdEQ7SUFzQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixXRTNDbUIsRUFBQTtBRkF2QjtNQThDTSxXQUFXO01BQ1gscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEF1dGhvcjogbWszMDMgKi9cbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdGV4dFwiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90cmFuc2l0aW9uc1wiO1xuXG4udG9wX3BhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoIzAwMCwgMC41KTtcbiAgQGluY2x1ZGUgZGVsYXllZC10cmFuc2l0aW9uLXRpbWVkKGFsbCwgMC4yNXMsIDBzKTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuXG4gICYuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkc2Vjb25kYXJ5LWdyZWVuLCAwLjUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktZ3JlZW47XG4gICAgc3BhbjpiZWZvcmUge1xuICAgICAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGVjay5zdmdcIik7XG4gICAgfVxuICB9XG5cbiAgJi5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRzZWNvbmRhcnktb3JhbmdlLCAwLjUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktb3JhbmdlO1xuICAgIHNwYW46YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW5mby5zdmdcIik7XG4gICAgfVxuICB9XG5cbiAgJi5lcnJvciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkc2Vjb25kYXJ5LXJlZCwgMC41KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXJlZDtcbiAgICBzcGFuOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Vycm9yLnN2Z1wiKTtcbiAgICB9XG4gIH1cblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkV4byBCb2xkXCI7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjZweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogN3B4O1xuICAgIH1cbiAgfVxufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XG4gIH1cbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR0cmFuc2l0aW9uLXF1aWNrOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4kdHJhbnNpdGlvbi1tZWRpdW06IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tcXVpY2stZGVsYXllZDogYWxsIDAuMTVzIGVhc2UtaW4tb3V0IDAuMTVzO1xuXG5AbWl4aW4gY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXMpe1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtby10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG59XG5cbkBtaXhpbiBkZWxheWVkLXRyYW5zaXRpb24tdGltZWQoJHByb3BlcnR5LCAkdGltZSwgJGRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _helpers_messageLevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/messageLevel */ "./src/app/helpers/messageLevel.ts");

/* Author: mk303 */




var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
        this.messageLevel = _helpers_messageLevel__WEBPACK_IMPORTED_MODULE_4__["MessageLevel"];
    }
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('openState', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateY(0%)',
                        opacity: '1',
                        visibility: 'visible'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closedState', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateY(-100%)',
                        opacity: '0',
                        visibility: 'hidden'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('openState => closedState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.25s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closedState => openState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.25s')
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/components/message/message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/no-items-added-to-order/no-items-added-to-order.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/no-items-added-to-order/no-items-added-to-order.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<section *ngIf=\"data != null\" class=\"wide-wrapper\">\n  <p>{{data.headline}}</p>\n  <app-button routerLink=\"/products\" [buttonText]=\"data.text\"></app-button>\n</section>\n"

/***/ }),

/***/ "./src/app/components/no-items-added-to-order/no-items-added-to-order.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/no-items-added-to-order/no-items-added-to-order.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\nsection {\n  text-align: center; }\np {\n  color: #FFA500;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL25vLWl0ZW1zLWFkZGVkLXRvLW9yZGVyL25vLWl0ZW1zLWFkZGVkLXRvLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdGV4dC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL193cmFwcGVycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDQUEseUJBQUE7QUNBQSx5QkFBQTtBREdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUEwQyxFQUFBO0FBRzVDO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUEyQyxFQUFBO0FBRzdDO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUE2QyxFQUFBO0FBRy9DO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE4QyxFQUFBO0FBR2hEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0N4QjJCO0VEeUIzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7QUFFbkI7SUFYRjtNQVlJLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUEsRUFFdkI7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0N6QzJCO0VEMEMzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixjQ3REa0I7RUR1RGxCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQ3JFcUI7RURzRXJCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7QUU1RTNCLGtCQUFBO0FBR0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUxvQjtFQU1wQixtQkFOb0I7RUFPcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsZUFBZSxFQUFBO0FBR2pCO0VBRUUsaUJBQXdDLEVBQUE7QUFHMUM7RUFFRSxnQkFBdUMsRUFBQTtBQUd6QztFQUVFLGdCQUF1QyxFQUFBO0FIekJ6QztFQUNFLGtCQUFrQixFQUFBO0FDZ0RwQjtFRDVDRSxjRUZ3QjtFRkd4QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm8taXRlbXMtYWRkZWQtdG8tb3JkZXIvbm8taXRlbXMtYWRkZWQtdG8tb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy93cmFwcGVyc1wiO1xuXG5zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgY29sb3I6ICRzZWNvbmRhcnktb3JhbmdlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XG4gIH1cbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR3cmFwcGVyLXBhZGRpbmc6IDQwcHg7XG5cbiV3cmFwcGVyLWJhc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctbGVmdDogJHdyYXBwZXItcGFkZGluZztcbiAgcGFkZGluZy1yaWdodDogJHdyYXBwZXItcGFkZGluZztcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1heC13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IG5vbmU7XG59XG5cbi53aWRlLXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogMTExMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG5cbi5tZWRpdW0td3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiA4MDBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuXG4ubmFycm93LXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogNjAwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/no-items-added-to-order/no-items-added-to-order.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/no-items-added-to-order/no-items-added-to-order.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NoItemsAddedToOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoItemsAddedToOrderComponent", function() { return NoItemsAddedToOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_headline_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/headline-text */ "./src/app/models/headline-text.ts");

/* Author: mk303 */


var NoItemsAddedToOrderComponent = /** @class */ (function () {
    function NoItemsAddedToOrderComponent() {
    }
    NoItemsAddedToOrderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_headline_text__WEBPACK_IMPORTED_MODULE_2__["HeadlineText"])
    ], NoItemsAddedToOrderComponent.prototype, "data", void 0);
    NoItemsAddedToOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-items-added-to-order',
            template: __webpack_require__(/*! ./no-items-added-to-order.component.html */ "./src/app/components/no-items-added-to-order/no-items-added-to-order.component.html"),
            styles: [__webpack_require__(/*! ./no-items-added-to-order.component.scss */ "./src/app/components/no-items-added-to-order/no-items-added-to-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoItemsAddedToOrderComponent);
    return NoItemsAddedToOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/order-list-item/order-list-item.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/order-list-item/order-list-item.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<div *ngIf=\"data != null && currentCurrency != null && currentLanguage != null\">\n  <div class=\"product_info\">\n    <a routerLink=\"/product/{{data.simpleName}}\"><img src=\"{{data.image}}\"></a>\n    <div>\n      <a routerLink=\"/product/{{data.simpleName}}\"><h3 class=\"title\">{{data.name}}</h3></a>\n      <p>{{data.priceSquareKm | currency : currentCurrency.code : 'symbol' : '1.2-2' : currentLanguage.langCode}} / km²</p>\n      <button class=\"delete\" (click)=\"deleteCartItem(data.simpleName)\">{{staticStrings.SHOPPING_CART_ITEM_DELETE_BUTTON}}</button>\n    </div>\n  </div>\n  <span class=\"userInputNumber\">\n    <input class=\"number\" type=\"number\" placeholder=\"0\"\n           #amountToAddToCart\n           [(ngModel)]=\"currentItemAmount\"\n           (change)=\"updateCartItem(data.simpleName)\"\n           (focus)=\"this.currentItemAmountBeforeChange = amountToAddToCart.value\"\n           numbersOnlyDirective/>\n    km²</span>\n  <span>{{data.totalPrice | currency : currentCurrency.code : 'symbol' : '1.2-2' : currentLanguage.langCode}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/order-list-item/order-list-item.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/order-list-item/order-list-item.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303, jm114 */\ninput.number {\n  background: transparent;\n  width: auto;\n  display: inline-block;\n  padding: 10px;\n  border-bottom: 1px solid #7E7E7E;\n  color: #fff;\n  font-family: \"Exo Bold\";\n  font-size: 20px;\n  line-height: 20px;\n  position: relative;\n  text-align: right; }\ninput.number::-webkit-inner-spin-button,\ninput.number::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\ninput.number:before {\n  content: 'km';\n  display: inline-block; }\ndiv {\n  display: grid;\n  grid-template-columns: 6fr 2fr 2fr; }\ndiv span {\n    align-self: center;\n    font-size: 16px;\n    line-height: 26px;\n    color: #fff;\n    font-family: \"Exo Bold\";\n    -webkit-box-align: center;\n            align-items: center; }\ndiv span:last-child {\n      text-align: right; }\ndiv span.userInputNumber {\n      display: -webkit-inline-box;\n      display: inline-flex; }\n.title {\n  font-size: 30px;\n  line-height: 30px;\n  letter-spacing: 10px; }\n.product_info {\n  display: grid;\n  grid-template-columns: 3fr 7fr;\n  grid-column-gap: 40px; }\n.product_info img {\n    display: inline-block;\n    width: 100%; }\n.product_info div {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: -webkit-max-content -webkit-max-content auto;\n    grid-template-rows: max-content max-content auto; }\n.delete {\n  font-family: 'Roboto Bold';\n  background: transparent;\n  border: none;\n  color: #FF004E;\n  display: inline-block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  font-size: 12px;\n  line-height: 12px;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  opacity: 0.75;\n  cursor: pointer;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  align-self: center; }\n.delete:before {\n    content: '';\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    background: url('delete.svg');\n    background-size: cover;\n    margin: 0 8px -4px 0; }\n.delete:hover {\n    opacity: 1; }\nspan {\n  width: 100%; }\ninput.number {\n  width: 100%;\n  padding-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWxpc3QtaXRlbS9vcmRlci1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL190ZXh0LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RyYW5zaXRpb25zLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19pbnB1dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDQUEseUJBQUE7QUNBQSx5QkFBQTtBREdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUEwQyxFQUFBO0FBRzVDO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUEyQyxFQUFBO0FBRzdDO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUE2QyxFQUFBO0FBRy9DO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE4QyxFQUFBO0FBR2hEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0N4QjJCO0VEeUIzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7QUFFbkI7SUFYRjtNQVlJLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUEsRUFFdkI7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0N6QzJCO0VEMEMzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixjQ3REa0I7RUR1RGxCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQ3JFcUI7RURzRXJCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7QUU1RTNCLGtCQUFBO0FDQUEsa0JBQUE7QUhBQSx5QkFBQTtBQ0FBLHlCQUFBO0FER0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQ3hCMkI7RUR5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQ3pDMkI7RUQwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNDdERrQjtFRHVEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdDckVxQjtFRHNFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBQzVFM0IseUJBQUE7QUVJQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQ0ZQa0I7RUVRbEIsV0ZOcUI7RUVPckIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0FBR25COztFQUVFLHdCQUF3QjtFQUN4QixTQUFTLEVBQUE7QUFHWDtFQUNFLGFBQWE7RUFDYixxQkFBcUIsRUFBQTtBSnJCdkI7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDLEVBQUE7QUFGcEM7SUFLSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXRVRtQjtJRlVuQix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0FBVnZCO01BYU0saUJBQWlCLEVBQUE7QUFidkI7TUFpQk0sMkJBQW9CO01BQXBCLG9CQUFvQixFQUFBO0FBSzFCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCLEVBQUE7QUFIdkI7SUFNSSxxQkFBcUI7SUFDckIsV0FBVyxFQUFBO0FBUGY7SUFXSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGdFQUFnRDtJQUFoRCxnREFBZ0QsRUFBQTtBQUlwRDtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNFOUNxQjtFRitDckIscUJBQXFCO0VBQ3JCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZUFBZ0I7RUd4RGhCLHlDQUxzQztFQVF0QyxpQ0FSc0M7RUgrRHRDLGtCQUFrQixFQUFBO0FBZHBCO0lBaUJJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBZ0Q7SUFDaEQsc0JBQXNCO0lBQ3RCLG9CQUFvQixFQUFBO0FBdkJ4QjtJQTJCSSxVQUFVLEVBQUE7QUFJZDtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1saXN0LWl0ZW0vb3JkZXItbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL2lucHV0XCI7XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDJmciAyZnI7XG5cbiAgc3BhbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiRXhvIEJvbGRcIjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgICYudXNlcklucHV0TnVtYmVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIH1cbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMTBweDtcbn1cblxuLnByb2R1Y3RfaW5mbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA0MHB4O1xuXG4gIGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgYXV0bztcbiAgfVxufVxuXG4uZGVsZXRlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQm9sZCc7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAkc2Vjb25kYXJ5LXJlZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGN1cnNvcjogcG9pbnRlciA7XG4gIEBpbmNsdWRlIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2l0aW9uLXF1aWNrKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9kZWxldGUuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luOiAwIDhweCAtNHB4IDA7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbnNwYW4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXQubnVtYmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuQGltcG9ydCBcImNvbG9yc1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmJyk7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbiRwcmltYXJ5LWJsdWU6ICMwMEI2RkY7XG4kdGV4dC1jb2xvcjogIzdFN0U3RTtcbiR0ZXh0LWNvbG9yLWhlYWRsaW5lOiAjQzhDOEM4O1xuJHRleHQtY29sb3Itd2hpdGU6ICNmZmY7XG4kbWVkaXVtLWdyZXk6ICM1MDRGNEY7XG4kc2Vjb25kYXJ5LWdyZWVuOiAjMDBjZTgyO1xuJHNlY29uZGFyeS1vcmFuZ2U6ICNGRkE1MDA7XG4kc2Vjb25kYXJ5LXJlZDogI0ZGMDA0RTtcblxuIiwiLyogQXV0aG9yOiBtazMwMyAqL1xuJHRyYW5zaXRpb24tcXVpY2s6IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiR0cmFuc2l0aW9uLW1lZGl1bTogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4kdHJhbnNpdGlvbi1xdWljay1kZWxheWVkOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQgMC4xNXM7XG5cbkBtaXhpbiBjdXN0b20tdHJhbnNpdGlvbigkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcyl7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG4gIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG4gIC1vLXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbn1cblxuQG1peGluIGRlbGF5ZWQtdHJhbnNpdGlvbi10aW1lZCgkcHJvcGVydHksICR0aW1lLCAkZGVsYXkpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kZWxheTogJGRlbGF5O1xufVxuIiwiLyogQXV0aG9yOiBtazMwMyAqL1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL2NvbG9yc1wiO1xuXG5pbnB1dC5udW1iZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR0ZXh0LWNvbG9yO1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkV4byBCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlucHV0Lm51bWJlcjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0Lm51bWJlcjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dC5udW1iZXI6YmVmb3JlIHtcbiAgY29udGVudDogJ2ttJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/order-list-item/order-list-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/order-list-item/order-list-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrderListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListItemComponent", function() { return OrderListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/currency.service */ "./src/app/services/currency.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _models_shopping_cart_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/shopping-cart-item */ "./src/app/models/shopping-cart-item.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");

/* Author: mk303 */







var OrderListItemComponent = /** @class */ (function () {
    function OrderListItemComponent(currencyService, languageService, shoppingCartService, messageService, contentService) {
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.shoppingCartService = shoppingCartService;
        this.messageService = messageService;
        this.contentService = contentService;
    }
    OrderListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initial currency - gotten from server
        this.currencyService.getCurrentCurrency()
            .subscribe(function (currency) {
            // highlight correct language
            _this.currentCurrency = currency;
        });
        // Initial language - gotten from server
        this.languageService.getCurrentLanguage()
            .subscribe(function (currency) {
            // highlight correct language
            _this.currentLanguage = currency;
        });
        this.contentService.getStaticStrings().then(function (data) {
            _this.staticStrings = data;
        });
    };
    /**
     * ngAfterViewInit is here needed to make sure the data which is provided via @Input() is available when we need it.
     * OnViewInit data is available (unfortunately not OnInit), so AfterViewInit we can access it.
     */
    OrderListItemComponent.prototype.ngAfterViewInit = function () {
        this.currentItemAmount = this.data.sizeSquareKm;
        this.maxAvailableAmount = this.data.maxAvailableSquareKm;
        this.currentTotalPrice = this.data.totalPrice;
    };
    /**
     * Triggers deletion of a shopping cart item by calling the shoppingCartService to do so
     * @param itemIdentifier = simpleName which identifies the shoppingCartItem
     */
    OrderListItemComponent.prototype.deleteCartItem = function (itemIdentifier) {
        this.shoppingCartService.deleteShoppingCartItem(itemIdentifier);
    };
    /**
     * Triggers shopping cart update. Checks if it is possible to add the desired amount or if there isn't any availability left.
     * If user tries to add too much the amount he wants to add is reset to the original value and the user is informed about it.
     * If user tries to update his shopping cart item to 0 or 'empty' teh amount is reset to the original value and the user is informed about it.
     * Else shoppingCartService is called to to update the shopping cart.
     * @param itemIdentifier which identifies the cart item that should be updated
     */
    OrderListItemComponent.prototype.updateCartItem = function (itemIdentifier) {
        // Make sure user did not try to order more than what is available
        if (this.currentItemAmount > this.maxAvailableAmount) {
            // Reset value and print out a info message
            this.resetItemAmount();
            this.messageService.showInfoMessage(this.staticStrings.PRODUCT_MAX_AMOUNT_INFO_1 + " " + this.maxAvailableAmount + " " + this.staticStrings.PRODUCT_MAX_AMOUNT_INFO_2);
        }
        else if (this.currentItemAmount == 0 || this.currentItemAmount == null) {
            // If new value is 0 we reset the value and inform the user to use the "delete" button to remove an item from the cart
            // Reset value and print out a info message
            this.resetItemAmount();
            this.messageService.showInfoMessage(this.staticStrings.SHOPPING_CART_ITEM_DELETE_INFO);
        }
        else if (this.currentItemAmount != this.currentItemAmountBeforeChange) {
            // Process update
            this.shoppingCartService.updateShoppingCartItem(itemIdentifier, this.currentItemAmount);
        }
    };
    /**
     * Resets the amount of a shopping cart item to the value before it was changed
     */
    OrderListItemComponent.prototype.resetItemAmount = function () {
        this.currentItemAmount = this.currentItemAmountBeforeChange;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_shopping_cart_item__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartItem"])
    ], OrderListItemComponent.prototype, "data", void 0);
    OrderListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-list-item',
            template: __webpack_require__(/*! ./order-list-item.component.html */ "./src/app/components/order-list-item/order-list-item.component.html"),
            styles: [__webpack_require__(/*! ./order-list-item.component.scss */ "./src/app/components/order-list-item/order-list-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _services_content_service__WEBPACK_IMPORTED_MODULE_7__["ContentService"]])
    ], OrderListItemComponent);
    return OrderListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/order-list/order-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-list/order-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<section *ngIf=\"data != null && currentCurrency != null && currentLanguage != null\" class=\"wide-wrapper\">\n  <div class=\"list-head\">\n    <span>{{data.item}}</span>\n    <span>{{data.amount}}</span>\n    <span>{{data.price}}</span>\n  </div>\n  <div class=\"item-list\">\n    <app-order-list-item *ngFor=\"let item of shoppingCartItems\" [data]=\"item\"></app-order-list-item>\n  </div>\n  <div class=\"list-foot\">\n    <div>\n      <span>{{data.totalPrice}}</span>\n      <span class=\"total_price\">{{totalPrice | currency : currentCurrency.code : \"symbol\" : \"1.2-2\" : currentLanguage.langCode}}</span>\n    </div>\n    <app-button [buttonText]=\"data.buttonText\" (click)=\"submitOrder()\"></app-button>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/order-list/order-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-list/order-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\nsection {\n  padding-bottom: 100px; }\nsection span {\n    font-family: 'Roboto Light';\n    font-size: 12px;\n    line-height: 12px;\n    color: #fff;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    -webkit-box-pack: start;\n            justify-content: start; }\nsection span:last-child {\n    justify-self: end; }\nsection .total_price {\n    color: #00B6FF;\n    font-size: 32px;\n    line-height: 32px;\n    font-family: 'Exo Bold';\n    text-align: right; }\n.list-head {\n  display: grid;\n  grid-template-columns: 6fr 2fr 2fr;\n  border-bottom: 1px solid #504F4F;\n  padding-bottom: 11px;\n  margin-bottom: 30px; }\n.item-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 60px; }\n.list-foot {\n  display: grid;\n  grid-template-columns: -webkit-max-content;\n  grid-template-columns: max-content;\n  grid-template-rowa: auto auto;\n  grid-row-gap: 20px;\n  border-top: 1px solid #504F4F;\n  padding-top: 51px;\n  margin-top: 30px;\n  -webkit-box-pack: end;\n          justify-content: end; }\n.list-foot div {\n    text-align: right;\n    display: inline-block;\n    border-bottom: 1px solid #504F4F; }\n.list-foot div span:last-child {\n      margin-left: 40px; }\n.list-foot ::ng-deep button {\n    width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdGV4dC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fd3JhcHBlcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0FBLHlCQUFBO0FDQUEseUJBQUE7QURBQSx5QkFBQTtBQ0dBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUEwQyxFQUFBO0FBRzVDO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUEyQyxFQUFBO0FBRzdDO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUE2QyxFQUFBO0FBRy9DO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE4QyxFQUFBO0FBR2hEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0R4QjJCO0VDeUIzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7QUFFbkI7SUFYRjtNQVlJLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUEsRUFFdkI7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0R6QzJCO0VDMEMzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixjRHREa0I7RUN1RGxCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXRHJFcUI7RUNzRXJCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7QUM1RTNCLGtCQUFBO0FBR0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUxvQjtFQU1wQixtQkFOb0I7RUFPcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBRUUsZUFBZSxFQUFBO0FBR2pCO0VBRUUsaUJBQXdDLEVBQUE7QUFHMUM7RUFFRSxnQkFBdUMsRUFBQTtBQUd6QztFQUVFLGdCQUF1QyxFQUFBO0FIeEJ6QztFQUNFLHFCQUFxQixFQUFBO0FBRHZCO0lBSUksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0NSbUI7SURTbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix1QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUE7QUFWMUI7SUFjSSxpQkFBaUIsRUFBQTtBQWRyQjtJQWtCSSxjQ3RCa0I7SUR1QmxCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQixFQUFBO0FBSXJCO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxnQ0M3Qm1CO0VEOEJuQixvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsYUFBYTtFQUNiLDBDQUFrQztFQUFsQyxrQ0FBa0M7RUFDbEMsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQiw2QkM3Q21CO0VEOENuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTtBQVJ0QjtJQVdJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0NDckRpQixFQUFBO0FEd0NyQjtNQWdCTSxpQkFBaUIsRUFBQTtBQWhCdkI7SUFxQkksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEF1dGhvcjogbWszMDMgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbG9yc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdGV4dFwiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvd3JhcHBlcnNcIjtcblxuc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcblxuICBzcGFuIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgfVxuXG4gIHNwYW46bGFzdC1jaGlsZCB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIH1cblxuICAudG90YWxfcHJpY2Uge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1ibHVlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4ubGlzdC1oZWFkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMmZyIDJmcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRtZWRpdW0tZ3JleTtcbiAgcGFkZGluZy1ib3R0b206IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5pdGVtLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC1yb3ctZ2FwOiA2MHB4O1xufVxuXG4ubGlzdC1mb290IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dhOiBhdXRvIGF1dG87XG4gIGdyaWQtcm93LWdhcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRtZWRpdW0tZ3JleTtcbiAgcGFkZGluZy10b3A6IDUxcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuXG4gIGRpdiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbWVkaXVtLWdyZXk7XG5cbiAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbiRwcmltYXJ5LWJsdWU6ICMwMEI2RkY7XG4kdGV4dC1jb2xvcjogIzdFN0U3RTtcbiR0ZXh0LWNvbG9yLWhlYWRsaW5lOiAjQzhDOEM4O1xuJHRleHQtY29sb3Itd2hpdGU6ICNmZmY7XG4kbWVkaXVtLWdyZXk6ICM1MDRGNEY7XG4kc2Vjb25kYXJ5LWdyZWVuOiAjMDBjZTgyO1xuJHNlY29uZGFyeS1vcmFuZ2U6ICNGRkE1MDA7XG4kc2Vjb25kYXJ5LXJlZDogI0ZGMDA0RTtcblxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XG4gIH1cbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR3cmFwcGVyLXBhZGRpbmc6IDQwcHg7XG5cbiV3cmFwcGVyLWJhc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctbGVmdDogJHdyYXBwZXItcGFkZGluZztcbiAgcGFkZGluZy1yaWdodDogJHdyYXBwZXItcGFkZGluZztcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1heC13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IG5vbmU7XG59XG5cbi53aWRlLXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogMTExMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG5cbi5tZWRpdW0td3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiA4MDBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuXG4ubmFycm93LXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogNjAwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/order-list/order-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order-list/order-list.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/currency.service */ "./src/app/services/currency.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _services_planets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/planets.service */ "./src/app/services/planets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_login_toggle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/login-toggle.service */ "./src/app/services/login-toggle.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");

/* Author: mk303, jm114 */











var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(currencyService, languageService, shoppingCartService, planetsService, router, messageService, loginToggleService, orderService, loginService, contentService) {
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.shoppingCartService = shoppingCartService;
        this.planetsService = planetsService;
        this.router = router;
        this.messageService = messageService;
        this.loginToggleService = loginToggleService;
        this.orderService = orderService;
        this.loginService = loginService;
        this.contentService = contentService;
        this.totalPrice = 0;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initial currency - gotten from server
        this.currencyService.getCurrentCurrency()
            .subscribe(function (currency) {
            // highlight correct language
            _this.currentCurrency = currency;
        });
        // Initial language - gotten from server
        this.languageService.getCurrentLanguage()
            .subscribe(function (currency) {
            // highlight correct language
            _this.currentLanguage = currency;
        });
        this.shoppingCartService.shoppingCartTotalPriceEmitter.subscribe(function (data) {
            console.log("Received emitted shoppingCartTotalPrice: " + data);
            _this.totalPrice = data;
        });
        this.shoppingCartService.shoppingCartItemsEmitter.subscribe(function (data) {
            console.log("Received emitted shoppingCartItems: " + data);
            _this.shoppingCartItems = data;
        });
        this.contentService.getStaticStrings().then(function (data) {
            _this.staticStrings = data;
        });
        this.totalPrice = this.shoppingCartService.getShoppingCartTotalPrice();
        this.shoppingCartItems = this.shoppingCartService.getCurrentShoppingCartItems();
    };
    /**
     * Triggers attempt to submit a order and calls orderService to do so. If user is not logged in, he is asked to do so first.
     *
     * Depending on response from orderService the user is shown a message or he is redirected.
     * true = success: Submit successful, redirect user to orders page
     * false = failed: Something went wrong on server side, inform user
     * *  = undefined: Something went wrong on server side, inform user
     */
    OrderListComponent.prototype.submitOrder = function () {
        var _this = this;
        // First check if user is logged or first needs to log in
        this.loginService.isLoggedIn().subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                _this.orderService.submitOrder().subscribe(function (res) {
                    // Log successful order submit
                    console.log('Response to POST ATTEMPT: ' + JSON.stringify(res));
                    if (res == true) {
                        // redirect user to login orders page
                        _this.router.navigate(['/orders']);
                    }
                    else if (res == false) {
                        // Write out info message
                        console.log('Error: Order could not be processed because response was: ', res);
                        _this.messageService.showErrorMessage(_this.staticStrings.ERROR_DEFAULT);
                    }
                    else {
                        console.log('Error: Server did not respond with a boolean to verify submit. Response was: ' + JSON.stringify(res));
                        _this.messageService.showErrorMessage(_this.staticStrings.ERROR_DEFAULT);
                    }
                    // Update shopping cart
                    _this.shoppingCartService.updateShoppingCart();
                }, function (err) {
                    console.log('Error: ' + JSON.stringify(err.error));
                    console.log('Message: ' + err.message);
                });
            }
            else {
                _this.messageService.showInfoMessage(_this.staticStrings.SUBMIT_LOGIN_INFO);
                _this.loginToggleService.toggleLoginPanel();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderListComponent.prototype, "data", void 0);
    OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-overview',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/components/order-list/order-list.component.html"),
            styles: [__webpack_require__(/*! ./order-list.component.scss */ "./src/app/components/order-list/order-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"],
            _services_planets_service__WEBPACK_IMPORTED_MODULE_5__["PlanetsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _services_login_toggle_service__WEBPACK_IMPORTED_MODULE_8__["LoginToggleService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
            _services_content_service__WEBPACK_IMPORTED_MODULE_11__["ContentService"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/components/product-list-item/product-list-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product-list-item/product-list-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303, jm114 -->\n<div class=\"item\" *ngIf=\"planet != null && currentCurrency != null && currentLanguage != null\">\n  <a routerLink=\"/product/{{planet.simpleName}}\">\n  <div class=\"container\">\n    <h1 class=\"title\">{{planet.name}}</h1>\n    <p>{{planet.priceSquareKm | currency : currentCurrency.code : 'symbol' : '1.2-2' : currentLanguage.langCode}} / km²</p>\n    <span *ngIf=\"staticStrings != null\">{{staticStrings.PRODUCT_HOVER_FIND_OUT_MORE}}</span>\n  </div>\n  <div class=\"hover_overlay\"></div>\n  <img src=\"{{planet.image}}\">\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product-list-item/product-list-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product-list-item/product-list-item.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n.item {\n  position: relative;\n  cursor: pointer;\n  overflow: hidden; }\n.item img {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out; }\n.item:hover .hover_overlay {\n    opacity: 1;\n    text-shadow: 0 0 20px #000; }\n.item:hover h1 {\n    opacity: 1; }\n.item:hover span {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n.item:hover img {\n    -webkit-filter: grayscale(100%) brightness(50%);\n            filter: grayscale(100%) brightness(50%);\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n:host-context(.flipped) .container {\n  left: 20px;\n  padding-left: 50px; }\n:host-context(.flipped) .container h1 {\n    text-align: left; }\n:host-context(.flipped) .container p {\n    text-align: left; }\n:host-context(.flipped) .container span {\n    text-align: left;\n    left: 50px; }\n:host-context(.flipped) img {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\"; }\n:host-context(.flipped) .item:hover img {\n  -webkit-transform: scale(-1.1, 1.1);\n          transform: scale(-1.1, 1.1); }\n.container {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 20px;\n  z-index: 300;\n  padding-right: 50px;\n  text-shadow: 0 0 10px #383838;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out; }\n.container h1 {\n    text-align: right;\n    margin-bottom: 10px;\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out; }\n.container p {\n    text-align: right;\n    color: #fff;\n    font-family: \"Roboto Bold\"; }\n.container span {\n    display: inline-block;\n    font-family: \"Roboto Bold\";\n    width: 100%;\n    font-size: 20px;\n    line-height: 20px;\n    letter-spacing: 5px;\n    margin-right: -5px;\n    text-align: right;\n    text-transform: uppercase;\n    position: absolute;\n    top: calc(100% + 40px);\n    right: 50px;\n    color: #00B6FF;\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    -webkit-transition: all 0.15s ease-in-out 0.15s;\n    transition: all 0.15s ease-in-out 0.15s; }\n.hover_overlay {\n  display: inline-block;\n  z-index: 200;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  border: 1px solid #00B6FF;\n  background: rgba(0, 182, 255, 0.3);\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC1pdGVtL3Byb2R1Y3QtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdGV4dC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL190cmFuc2l0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FDQUEseUJBQUE7QUNBQSx5QkFBQTtBREdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUEwQyxFQUFBO0FBRzVDO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUEyQyxFQUFBO0FBRzdDO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUE2QyxFQUFBO0FBRy9DO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE4QyxFQUFBO0FBR2hEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0N4QjJCO0VEeUIzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7QUFFbkI7SUFYRjtNQVlJLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUEsRUFFdkI7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0N6QzJCO0VEMEMzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixjQ3REa0I7RUR1RGxCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQ3JFcUI7RURzRXJCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7QUU1RTNCLGtCQUFBO0FITUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBSGxCO0lBTUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUdWZCx5Q0FMc0M7SUFRdEMsaUNBUnNDLEVBQUE7QUhLeEM7SUFpQk0sVUFBVTtJQUNWLDBCQUEwQixFQUFBO0FBbEJoQztJQXNCTSxVQUFVLEVBQUE7QUF0QmhCO0lBMEJNLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0FBNUJoQztJQWdDTSwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTtBQUszQjtFQUdJLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtBQUp0QjtJQU9NLGdCQUFnQixFQUFBO0FBUHRCO0lBV00sZ0JBQWdCLEVBQUE7QUFYdEI7SUFlTSxnQkFBZ0I7SUFDaEIsVUF4RGtCLEVBQUE7QUF3Q3hCO0VBdUJJLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIscUJBQWE7VUFBYixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7QUExQnZCO0VBK0JNLG1DQUEwQjtVQUExQiwyQkFBMEIsRUFBQTtBQUtoQztFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQWxGc0I7RUFtRnRCLDZCQUE2QjtFR2pGN0IseUNBTHNDO0VBUXRDLGlDQVJzQyxFQUFBO0FIK0V4QztJQVdJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUd0RnJCLHlDQUxzQztJQVF0QyxpQ0FSc0MsRUFBQTtBSCtFeEM7SUFpQkksaUJBQWlCO0lBQ2pCLFdFOUZtQjtJRitGbkIsMEJBQTBCLEVBQUE7QUFuQjlCO0lBdUJJLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0E5R29CO0lBK0dwQixjRWxIa0I7SUZtSGxCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJR2hIN0IsK0NBSG9EO0lBTXBELHVDQU5vRCxFQUFBO0FId0h0RDtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YseUJFbklvQjtFRm9JcEIsa0NFcElvQjtFQ0twQix5Q0FMc0M7RUFRdEMsaUNBUnNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC1pdGVtL3Byb2R1Y3QtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdGV4dFwiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy90cmFuc2l0aW9uc1wiO1xuXG4kY29udGFpbmVyX3BhZGRpbmc6IDUwcHg7XG5cbi5pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBAaW5jbHVkZSBjdXN0b20tdHJhbnNpdGlvbigkdHJhbnNpdGlvbi1xdWljayk7XG4gIH1cblxuICAmOmhvdmVyIHtcblxuICAgIC5ob3Zlcl9vdmVybGF5IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggIzAwMDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcyg1MCUpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5mbGlwcGVkKSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG5cbiAgICBoMSB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBsZWZ0OiAkY29udGFpbmVyX3BhZGRpbmc7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIGZpbHRlcjogRmxpcEg7XG4gICAgLW1zLWZpbHRlcjogXCJGbGlwSFwiO1xuICB9XG5cbiAgLml0ZW06aG92ZXIge1xuICAgIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLjEsMS4xKTtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDMwMDtcbiAgcGFkZGluZy1yaWdodDogJGNvbnRhaW5lcl9wYWRkaW5nO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzM4MzgzODtcbiAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xuXG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIEBpbmNsdWRlIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2l0aW9uLXF1aWNrKTtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQm9sZFwiO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBCb2xkXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYygxMDAlICsgNDBweCk7XG4gICAgcmlnaHQ6ICRjb250YWluZXJfcGFkZGluZztcbiAgICBjb2xvcjogJHByaW1hcnktYmx1ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2stZGVsYXllZCk7XG4gIH1cbn1cblxuLmhvdmVyX292ZXJsYXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHotaW5kZXg6IDIwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWJsdWU7XG4gIGJhY2tncm91bmQ6IHJnYmEoJHByaW1hcnktYmx1ZSwgMC4zKTtcbiAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xufVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XG4gIH1cbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR0cmFuc2l0aW9uLXF1aWNrOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4kdHJhbnNpdGlvbi1tZWRpdW06IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tcXVpY2stZGVsYXllZDogYWxsIDAuMTVzIGVhc2UtaW4tb3V0IDAuMTVzO1xuXG5AbWl4aW4gY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXMpe1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtby10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG59XG5cbkBtaXhpbiBkZWxheWVkLXRyYW5zaXRpb24tdGltZWQoJHByb3BlcnR5LCAkdGltZSwgJGRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/product-list-item/product-list-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product-list-item/product-list-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListItemComponent", function() { return ProductListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/currency.service */ "./src/app/services/currency.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");

/* Author: mk303 */




var ProductListItemComponent = /** @class */ (function () {
    function ProductListItemComponent(currencyService, languageService, contentService) {
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.contentService = contentService;
    }
    ProductListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Current Currency - gotten from Server
        this.currencyService.getCurrentCurrency().subscribe(function (currency) { return _this.currentCurrency = currency; });
        // Current Language - gotten from Server
        this.languageService.getCurrentLanguage().subscribe(function (language) { return _this.currentLanguage = language; });
        this.contentService.getStaticStrings().then(function (data) {
            _this.staticStrings = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductListItemComponent.prototype, "planet", void 0);
    ProductListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list-item',
            template: __webpack_require__(/*! ./product-list-item.component.html */ "./src/app/components/product-list-item/product-list-item.component.html"),
            styles: [__webpack_require__(/*! ./product-list-item.component.scss */ "./src/app/components/product-list-item/product-list-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
            _services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"]])
    ], ProductListItemComponent);
    return ProductListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/product-list/product-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303, jm114 -->\n<div *ngIf=\"planets != null\">\n  <app-product-list-item *ngFor=\"let planet of planets index as i; even as isEven\" [class.flipped]=\"isEven\" [planet]=\"planet\"></app-product-list-item>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\ndiv {\n  display: grid;\n  grid-template-columns: 1fr 1fr; }\n@media screen and (max-width: 800px) {\n    div {\n      grid-template-columns: 1fr; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTtBQUU5QjtJQUpGO01BS0ksMEJBQTBCLEVBQUEsRUFFN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG5kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303, jm114 */

var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductListComponent.prototype, "planets", void 0);
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/components/product-list/product-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart-icon/shopping-cart-icon.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/shopping-cart-icon/shopping-cart-icon.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"shopping-cart\" class=\"header-icon\">\n  <span *ngIf=\"currentCartSize > 0\" class=\"shoppingCartSizeIndicator\">{{currentCartSize}}</span>\n  <svg routerLink=\"/shopping_cart\" version=\"1.1\"xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 33.63 29.22\" style=\"enable-background:new 0 0 33.63 29.22;\" xml:space=\"preserve\">\n      <g>\n        <path d=\"M14.71,23.31c-1.65,0-3,1.33-3,2.96s1.34,2.96,3,2.96c1.65,0,3-1.33,3-2.96S16.36,23.31,14.71,23.31z M14.71,27.67\n          c-0.79,0-1.43-0.63-1.43-1.41s0.64-1.41,1.43-1.41c0.79,0,1.43,0.63,1.43,1.41S15.5,27.67,14.71,27.67z\"></path>\n        <path d=\"M26.37,23.31c-1.65,0-3,1.33-3,2.96s1.34,2.96,3,2.96s3-1.33,3-2.96S28.02,23.31,26.37,23.31z M26.37,27.67\n          c-0.79,0-1.43-0.63-1.43-1.41s0.64-1.41,1.43-1.41c0.79,0,1.43,0.63,1.43,1.41S27.16,27.67,26.37,27.67z\"></path>\n        <path d=\"M33.03,5.11c-0.42-0.1-0.85,0.15-0.95,0.57l-2.7,10.86H11.4L8.04,3.25C7.75,2.04,6.77,0,4.93,0H0.78C0.35,0,0,0.35,0,0.77\n          C0,1.2,0.35,1.55,0.78,1.55h4.14c0.88,0,1.45,1.52,1.59,2.06l3.65,14.44c0.87,3.49,3.24,3.79,3.34,3.8c0.03,0,0.06,0.01,0.09,0.01\n          h15.47c0.43,0,0.78-0.35,0.78-0.77c0-0.43-0.35-0.77-0.78-0.77h-15.4c-0.21-0.05-1.25-0.39-1.84-2.22h18.18\n          c0.36,0,0.67-0.24,0.76-0.59L33.6,6.05C33.71,5.63,33.45,5.21,33.03,5.11z\"></path>\n      </g>\n    </svg>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shopping-cart-icon/shopping-cart-icon.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/shopping-cart-icon/shopping-cart-icon.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n.header-icon {\n  text-align: center;\n  position: relative; }\n.header-icon svg {\n    width: 34px;\n    cursor: pointer;\n    -webkit-filter: drop-shadow(0 0 4px #000);\n            filter: drop-shadow(0 0 4px #000);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n    fill: #fff; }\n.header-icon svg:hover {\n      fill: #00B6FF; }\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303, jm114 */\n#shopping-cart {\n  margin-left: -7px; }\n#shopping-cart svg {\n    position: relative;\n    width: 34px;\n    z-index: 200; }\n.shoppingCartSizeIndicator {\n  font-family: \"Exo Light\";\n  font-size: 12px;\n  line-height: 19px;\n  display: inline-block;\n  width: 19px;\n  height: 19px;\n  background: rgba(0, 182, 255, 0.25);\n  border: 1px solid #00B6FF;\n  position: absolute;\n  top: -5px;\n  right: 4px;\n  z-index: 100;\n  border-radius: 10px;\n  z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3Nob3BwaW5nLWNhcnQtaWNvbi9zaG9wcGluZy1jYXJ0LWljb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19oZWFkZXItaWNvbi5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fc2hhZG93cy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdHJhbnNpdGlvbnMuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fdGV4dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDQUEsa0JBQUE7QUNBQSxrQkFBQTtBQ0FBLGtCQUFBO0FDQUEseUJBQUE7QUhLQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUZwQjtJQUtJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUNBQXFDO1lBQXJDLGlDQUFxQztJRU52Qyx5Q0FMc0M7SUFRdEMsaUNBUnNDO0lGYXBDLFVHVm1CLEVBQUE7QUhDdkI7TUFZTSxhR2hCZ0IsRUFBQTtBQ0R0Qix5QkFBQTtBREFBLHlCQUFBO0FDR0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjRHhCMkI7RUN5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjRHpDMkI7RUMwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNEdERrQjtFQ3VEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdEckVxQjtFQ3NFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBRDVFM0IseUJBQUE7QUpLQTtFQUNFLGlCQUFpQixFQUFBO0FBRG5CO0lBR0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFJaEI7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0lwQm9CO0VKcUJwQix5QklyQm9CO0VKc0JwQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC1pY29uL3Nob3BwaW5nLWNhcnQtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEF1dGhvcjogbWszMDMgKi9cbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvaGVhZGVyLWljb25cIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdGV4dFwiO1xuQGltcG9ydCBcIn5zcmMvYXNzZXRzL3N0eWxlcy9jb2xvcnNcIjtcblxuI3Nob3BwaW5nLWNhcnQge1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgei1pbmRleDogMjAwO1xuICB9XG59XG5cbi5zaG9wcGluZ0NhcnRTaXplSW5kaWNhdG9yIHtcbiAgZm9udC1mYW1pbHk6IFwiRXhvIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgkcHJpbWFyeS1ibHVlLDAuMjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1ibHVlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgcmlnaHQ6IDRweDtcbiAgei1pbmRleDogMTAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3NoYWRvd3NcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvdHJhbnNpdGlvbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XG5cbi5oZWFkZXItaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coJG5hdi1pY29uLXNoYWRvdyk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zaXRpb24tcXVpY2spO1xuICAgIGZpbGw6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBmaWxsOiAkcHJpbWFyeS1ibHVlO1xuICAgIH1cbiAgfVxufVxuIiwiLyogQXV0aG9yOiBtazMwMyAqL1xuJG5hdi10ZXh0LXN3aXRjaC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbiRuYXYtaWNvbi1zaGFkb3c6IDAgMCA0cHggIzAwMDtcbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbiR0cmFuc2l0aW9uLXF1aWNrOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4kdHJhbnNpdGlvbi1tZWRpdW06IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tcXVpY2stZGVsYXllZDogYWxsIDAuMTVzIGVhc2UtaW4tb3V0IDAuMTVzO1xuXG5AbWl4aW4gY3VzdG9tLXRyYW5zaXRpb24oJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXMpe1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xuICAtby10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG59XG5cbkBtaXhpbiBkZWxheWVkLXRyYW5zaXRpb24tdGltZWQoJHByb3BlcnR5LCAkdGltZSwgJGRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG5AaW1wb3J0IFwiY29sb3JzXCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUxpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYnKTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLWhlYWRsaW5lO1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxMnB4O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLWhlYWRsaW5lO1xuICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/shopping-cart-icon/shopping-cart-icon.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/shopping-cart-icon/shopping-cart-icon.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ShoppingCartIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartIconComponent", function() { return ShoppingCartIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");

/* Author: mk303 */


var ShoppingCartIconComponent = /** @class */ (function () {
    function ShoppingCartIconComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.currentCartSize = 0;
    }
    ShoppingCartIconComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingCartService.currentCartItemSizeEmitter.subscribe(function (data) {
            console.log("Received emitted shoppingCartSize: " + data);
            _this.currentCartSize = data;
        });
        this.currentCartSize = this.shoppingCartService.getCurrentShoppingCartSize();
    };
    ShoppingCartIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart-icon',
            template: __webpack_require__(/*! ./shopping-cart-icon.component.html */ "./src/app/components/shopping-cart-icon/shopping-cart-icon.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-icon.component.scss */ "./src/app/components/shopping-cart-icon/shopping-cart-icon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], ShoppingCartIconComponent);
    return ShoppingCartIconComponent;
}());



/***/ }),

/***/ "./src/app/components/teaser-bg-image/teaser-bg-image.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/teaser-bg-image/teaser-bg-image.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<div class=\"bg\">\n  <div class=\"kenburns-top\" [style.background-image]=\"'url('+data?.image+')'\"></div>\n  <span></span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/teaser-bg-image/teaser-bg-image.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/teaser-bg-image/teaser-bg-image.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n.bg {\n  width: 100%;\n  height: 50vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -100;\n  overflow: hidden; }\n.bg > div {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: top; }\n.bg span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: -webkit-gradient(linear, left bottom, left top, from(#0d0d0d), to(rgba(13, 13, 13, 0.65)));\n    background: linear-gradient(0deg, #0d0d0d 0%, rgba(13, 13, 13, 0.65) 100%); }\n/* ----------------------------------------------\n * Generated by Animista on 2019-4-16 11:11:28\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n@-webkit-keyframes kenburns-top {\n  0% {\n    -webkit-transform: scale(1) translateY(0);\n    transform: scale(1) translateY(0);\n    -webkit-transform-origin: 50% 16%;\n    transform-origin: 50% 16%; }\n  100% {\n    -webkit-transform: scale(1.25) translateY(-15px);\n    transform: scale(1.25) translateY(-15px);\n    -webkit-transform-origin: top;\n    transform-origin: top; } }\n@keyframes kenburns-top {\n  0% {\n    -webkit-transform: scale(1) translateY(0);\n    transform: scale(1) translateY(0);\n    -webkit-transform-origin: 50% 16%;\n    transform-origin: 50% 16%; }\n  100% {\n    -webkit-transform: scale(1.25) translateY(-15px);\n    transform: scale(1.25) translateY(-15px);\n    -webkit-transform-origin: top;\n    transform-origin: top; } }\n.kenburns-top {\n  -webkit-animation: kenburns-top 15s ease-out both;\n  animation: kenburns-top 15s ease-out both; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3RlYXNlci1iZy1pbWFnZS90ZWFzZXItYmctaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGVhc2VyLWJnLWltYWdlL3RlYXNlci1iZy1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7QUFQbEI7SUFVSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix3QkFBd0IsRUFBQTtBQWI1QjtJQWlCSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNHQUFnRjtJQUFoRiwwRUFBZ0YsRUFBQTtBQUlwRjs7O21EQ0ZtRDtBRE9uRDtFQUFnQztJQUFHLHlDQUF3QztJQUFDLGlDQUFnQztJQUFDLGlDQUFnQztJQUFDLHlCQUF3QixFQUFBO0VBQUM7SUFBSyxnREFBK0M7SUFBQyx3Q0FBdUM7SUFBQyw2QkFBNEI7SUFBQyxxQkFBb0IsRUFBQSxFQUFBO0FBQUU7RUFBd0I7SUFBRyx5Q0FBd0M7SUFBQyxpQ0FBZ0M7SUFBQyxpQ0FBZ0M7SUFBQyx5QkFBd0IsRUFBQTtFQUFDO0lBQUssZ0RBQStDO0lBQUMsd0NBQXVDO0lBQUMsNkJBQTRCO0lBQUMscUJBQW9CLEVBQUEsRUFBQTtBQUNwbUI7RUFBYyxpREFBZ0Q7RUFBQyx5Q0FBd0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhc2VyLWJnLWltYWdlL3RlYXNlci1iZy1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEF1dGhvcjogbWszMDMgKi9cbi5iZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY+ZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIH1cblxuICBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEzLDEzLDEzLDEpIDAlLCByZ2JhKDEzLDEzLDEzLDAuNjUpIDEwMCUpO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE5LTQtMTYgMTE6MTE6MjhcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5ALXdlYmtpdC1rZXlmcmFtZXMga2VuYnVybnMtdG9wezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxNiU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTYlfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7dHJhbnNmb3JtOnNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3A7dHJhbnNmb3JtLW9yaWdpbjp0b3B9fUBrZXlmcmFtZXMga2VuYnVybnMtdG9wezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxNiU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTYlfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7dHJhbnNmb3JtOnNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3A7dHJhbnNmb3JtLW9yaWdpbjp0b3B9fVxuLmtlbmJ1cm5zLXRvcHstd2Via2l0LWFuaW1hdGlvbjprZW5idXJucy10b3AgMTVzIGVhc2Utb3V0IGJvdGg7YW5pbWF0aW9uOmtlbmJ1cm5zLXRvcCAxNXMgZWFzZS1vdXQgYm90aH1cbiIsIi8qIEF1dGhvcjogbWszMDMgKi9cbi5iZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTAwO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC5iZyA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wOyB9XG4gIC5iZyBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMGQwZDBkIDAlLCByZ2JhKDEzLCAxMywgMTMsIDAuNjUpIDEwMCUpOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE5LTQtMTYgMTE6MTE6MjhcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGtlbmJ1cm5zLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTYlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxNiU7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wOyB9IH1cblxuQGtleWZyYW1lcyBrZW5idXJucy10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDE2JTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTYlOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDsgfSB9XG5cbi5rZW5idXJucy10b3Age1xuICAtd2Via2l0LWFuaW1hdGlvbjoga2VuYnVybnMtdG9wIDE1cyBlYXNlLW91dCBib3RoO1xuICBhbmltYXRpb246IGtlbmJ1cm5zLXRvcCAxNXMgZWFzZS1vdXQgYm90aDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/teaser-bg-image/teaser-bg-image.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/teaser-bg-image/teaser-bg-image.component.ts ***!
  \*************************************************************************/
/*! exports provided: TeaserBgImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeaserBgImageComponent", function() { return TeaserBgImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

var TeaserBgImageComponent = /** @class */ (function () {
    function TeaserBgImageComponent() {
    }
    TeaserBgImageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeaserBgImageComponent.prototype, "data", void 0);
    TeaserBgImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teaser-bg-image',
            template: __webpack_require__(/*! ./teaser-bg-image.component.html */ "./src/app/components/teaser-bg-image/teaser-bg-image.component.html"),
            styles: [__webpack_require__(/*! ./teaser-bg-image.component.scss */ "./src/app/components/teaser-bg-image/teaser-bg-image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeaserBgImageComponent);
    return TeaserBgImageComponent;
}());



/***/ }),

/***/ "./src/app/components/teaser/teaser.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/teaser/teaser.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: jm114 -->\n<div *ngIf=\"data != null\" class=\"teaser\" [ngStyle]=\"{ 'background-image': 'url(' + data.image + ')'}\">\n  <div class=\"middle\" appParallax [ratio]=\"0.25\">\n    <img class=\"logo\" src=\"{{data.logo}}\">\n    <h2>{{data.headline}}</h2>\n  </div>\n  <div class=\"arrow shake-vertical\">\n    <svg width=\"9px\" height=\"102px\" viewBox=\"0 0 9 102\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <g id=\"Pages\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"homepage\" transform=\"translate(-716.000000, -549.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\">\n          <g id=\"Teaser\">\n            <path id=\"Line\" d=\"M720,641.5 L720,549.5 L721,549.5 L721,641.5 L725,641.5 L720.5,650.5 L716,641.5 L720,641.5 Z\"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/teaser/teaser.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/teaser/teaser.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: jm114, mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n.teaser {\n  position: relative;\n  width: 100%;\n  display: table;\n  height: 600px;\n  background-size: cover;\n  background-position: center; }\n.teaser > * {\n    position: relative;\n    z-index: 200; }\n.teaser:after {\n    content: '';\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 100; }\n.teaser .arrow {\n    position: absolute;\n    bottom: 0;\n    right: 50%;\n    margin-bottom: -50px; }\n.middle {\n  display: table-cell;\n  vertical-align: middle; }\n.logo {\n  width: 100%;\n  height: 101px;\n  margin-bottom: 50px;\n  -webkit-filter: drop-shadow(0px 3px 2px #000);\n  filter: drop-shadow(0px 3px 2px #000); }\n.teaser h2 {\n  font-family: \"Exo Light\";\n  text-align: center;\n  color: #fff;\n  text-shadow: 0 5px 5px #000;\n  font-size: 20px;\n  letter-spacing: 20px;\n  padding: 0 40px; }\n/* ----------------------------------------------\n * Generated by Animista on 2019-6-20 12:24:55\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n.shake-vertical {\n  -webkit-animation: shake-vertical 15s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite alternate both;\n  animation: shake-vertical 15s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite alternate both; }\n@-webkit-keyframes shake-vertical {\n  0%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  10%, 30%, 50%, 70% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px); }\n  20%, 40%, 60% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px); }\n  80% {\n    -webkit-transform: translateY(6.4px);\n    transform: translateY(6.4px); }\n  90% {\n    -webkit-transform: translateY(-6.4px);\n    transform: translateY(-6.4px); } }\n@keyframes shake-vertical {\n  0%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  10%, 30%, 50%, 70% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px); }\n  20%, 40%, 60% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px); }\n  80% {\n    -webkit-transform: translateY(6.4px);\n    transform: translateY(6.4px); }\n  90% {\n    -webkit-transform: translateY(-6.4px);\n    transform: translateY(-6.4px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3RlYXNlci90ZWFzZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL190ZXh0LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZWFzZXIvdGVhc2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FDQUEseUJBQUE7QUNBQSx5QkFBQTtBREdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUEwQyxFQUFBO0FBRzVDO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUEyQyxFQUFBO0FBRzdDO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUE2QyxFQUFBO0FBRy9DO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE4QyxFQUFBO0FBR2hEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0N4QjJCO0VEeUIzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7QUFFbkI7SUFYRjtNQVlJLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUEsRUFFdkI7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0N6QzJCO0VEMEMzQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixjQ3REa0I7RUR1RGxCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQ3JFcUI7RURzRXJCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7QUR6RTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUViLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQVA3QjtJQVVJLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7QUFYaEI7SUFlSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsOEJBQTJCO0lBQzNCLFlBQVksRUFBQTtBQXZCaEI7SUEyQkksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CLEVBQUE7QUFJeEI7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0MscUNBQXFDLEVBQUE7QUFHdkM7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFdFakRxQjtFRmtEckIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZSxFQUFBO0FBSWpCOzs7bURHd0RtRDtBSHBEbkQ7RUFBZ0IscUdBQTZGO0VBQUMsNkZBQXFGLEVBQUE7QUFDbk07RUFBa0M7SUFBUSxnQ0FBK0I7SUFBQyx3QkFBdUIsRUFBQTtFQUFDO0lBQWdCLG1DQUFrQztJQUFDLDJCQUEwQixFQUFBO0VBQUM7SUFBWSxrQ0FBaUM7SUFBQywwQkFBeUIsRUFBQTtFQUFDO0lBQUksb0NBQW1DO0lBQUMsNEJBQTJCLEVBQUE7RUFBQztJQUFJLHFDQUFvQztJQUFDLDZCQUE0QixFQUFBLEVBQUE7QUFBRTtFQUEwQjtJQUFRLGdDQUErQjtJQUFDLHdCQUF1QixFQUFBO0VBQUM7SUFBZ0IsbUNBQWtDO0lBQUMsMkJBQTBCLEVBQUE7RUFBQztJQUFZLGtDQUFpQztJQUFDLDBCQUF5QixFQUFBO0VBQUM7SUFBSSxvQ0FBbUM7SUFBQyw0QkFBMkIsRUFBQTtFQUFDO0lBQUkscUNBQW9DO0lBQUMsNkJBQTRCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhc2VyL3RlYXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEF1dGhvcjogam0xMTQsIG1rMzAzICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5cbi50ZWFzZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiA2MDBweDtcblxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgJj4qIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjAwO1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuXG4gIC5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogNTAlO1xuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xuICB9XG59XG5cbi5taWRkbGUge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCAycHggIzAwMCk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCAycHggIzAwMCk7XG59XG5cbi50ZWFzZXIgaDIge1xuICBmb250LWZhbWlseTogXCJFeG8gTGlnaHRcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwIDVweCA1cHggIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMjBweDtcbiAgcGFkZGluZzogMCA0MHB4O1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE5LTYtMjAgMTI6MjQ6NTVcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnNoYWtlLXZlcnRpY2Fsey13ZWJraXQtYW5pbWF0aW9uOnNoYWtlLXZlcnRpY2FsIDE1cyBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KSBpbmZpbml0ZSBhbHRlcm5hdGUgYm90aDthbmltYXRpb246c2hha2UtdmVydGljYWwgMTVzIGN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpIGluZmluaXRlIGFsdGVybmF0ZSBib3RofVxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlLXZlcnRpY2FsezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX0xMCUsMzAlLDUwJSw3MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtOHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtOHB4KX0yMCUsNDAlLDYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDhweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoOHB4KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg2LjRweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNi40cHgpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC02LjRweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTYuNHB4KX19QGtleWZyYW1lcyBzaGFrZS12ZXJ0aWNhbHswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9MTAlLDMwJSw1MCUsNzAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLThweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLThweCl9MjAlLDQwJSw2MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg4cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDhweCl9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNi40cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDYuNHB4KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNi40cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC02LjRweCl9fVxuIiwiLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XG4gIH1cbn1cblxuaDIge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogJHRleHQtY29sb3ItaGVhZGxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG4kcHJpbWFyeS1ibHVlOiAjMDBCNkZGO1xuJHRleHQtY29sb3I6ICM3RTdFN0U7XG4kdGV4dC1jb2xvci1oZWFkbGluZTogI0M4QzhDODtcbiR0ZXh0LWNvbG9yLXdoaXRlOiAjZmZmO1xuJG1lZGl1bS1ncmV5OiAjNTA0RjRGO1xuJHNlY29uZGFyeS1ncmVlbjogIzAwY2U4MjtcbiRzZWNvbmRhcnktb3JhbmdlOiAjRkZBNTAwO1xuJHNlY29uZGFyeS1yZWQ6ICNGRjAwNEU7XG5cbiIsIi8qIEF1dGhvcjogam0xMTQsIG1rMzAzICovXG4vKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuLyogQXV0aG9yOiBtazMwMywgam0xMTQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgc3JjOiB1cmwoXCJ+c3JjL2Fzc2V0cy9mb250cy9FeG8tQm9sZC50dGZcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIExpZ2h0JztcbiAgc3JjOiB1cmwoXCJ+c3JjL2Fzc2V0cy9mb250cy9FeG8tTGlnaHQudHRmXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgc3JjOiB1cmwoXCJ+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGZcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcbiAgc3JjOiB1cmwoXCJ+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmXCIpOyB9XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAjQzhDOEM4O1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMTJweDsgfSB9XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNDOEM4Qzg7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG5cbnAge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM3RTdFN0U7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4OyB9XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4udGVhc2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIGhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAudGVhc2VyID4gKiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDIwMDsgfVxuICAudGVhc2VyOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogMTAwOyB9XG4gIC50ZWFzZXIgLmFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogLTUwcHg7IH1cblxuLm1pZGRsZSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDFweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggMnB4ICMwMDApO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggMnB4ICMwMDApOyB9XG5cbi50ZWFzZXIgaDIge1xuICBmb250LWZhbWlseTogXCJFeG8gTGlnaHRcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgNXB4IDVweCAjMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAyMHB4O1xuICBwYWRkaW5nOiAwIDQwcHg7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktNi0yMCAxMjoyNDo1NVxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uc2hha2UtdmVydGljYWwge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2hha2UtdmVydGljYWwgMTVzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSBpbmZpbml0ZSBhbHRlcm5hdGUgYm90aDtcbiAgYW5pbWF0aW9uOiBzaGFrZS12ZXJ0aWNhbCAxNXMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIGluZmluaXRlIGFsdGVybmF0ZSBib3RoOyB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZS12ZXJ0aWNhbCB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgMTAlLCAzMCUsIDUwJSwgNzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7IH1cbiAgMjAlLCA0MCUsIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTsgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYuNHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNi40cHgpOyB9XG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuNHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuNHB4KTsgfSB9XG5cbkBrZXlmcmFtZXMgc2hha2UtdmVydGljYWwge1xuICAwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDEwJSwgMzAlLCA1MCUsIDcwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpOyB9XG4gIDIwJSwgNDAlLCA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7IH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg2LjRweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYuNHB4KTsgfVxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02LjRweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02LjRweCk7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/teaser/teaser.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/teaser/teaser.component.ts ***!
  \*******************************************************/
/*! exports provided: TeaserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeaserComponent", function() { return TeaserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: jm114 */

var TeaserComponent = /** @class */ (function () {
    function TeaserComponent() {
    }
    TeaserComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeaserComponent.prototype, "data", void 0);
    TeaserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teaser',
            template: __webpack_require__(/*! ./teaser.component.html */ "./src/app/components/teaser/teaser.component.html"),
            styles: [__webpack_require__(/*! ./teaser.component.scss */ "./src/app/components/teaser/teaser.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeaserComponent);
    return TeaserComponent;
}());



/***/ }),

/***/ "./src/app/helpers/PageTransition.animation.ts":
/*!*****************************************************!*\
  !*** ./src/app/helpers/PageTransition.animation.ts ***!
  \*****************************************************/
/*! exports provided: PageTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTransition", function() { return PageTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var PageTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('pageTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            left: 0,
            right: 0,
            opacity: 1,
            transform: 'translateY(0)'
        }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            left: 0,
            right: 0,
            opacity: 0,
            transform: 'translateY(3%)'
        }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-3%)' })), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0%)' })), { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/helpers/messageLevel.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/messageLevel.ts ***!
  \*****************************************/
/*! exports provided: MessageLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageLevel", function() { return MessageLevel; });
/* Author: mk303 */
/**
 * Represents the three different message levels provided
 * - Success
 * - Info
 * - Error
 */
var MessageLevel;
(function (MessageLevel) {
    MessageLevel[MessageLevel["Success"] = 0] = "Success";
    MessageLevel[MessageLevel["Info"] = 1] = "Info";
    MessageLevel[MessageLevel["Error"] = 2] = "Error";
})(MessageLevel || (MessageLevel = {}));


/***/ }),

/***/ "./src/app/helpers/numbers-only.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/helpers/numbers-only.directive.ts ***!
  \***************************************************/
/*! exports provided: NumbersOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbersOnlyDirective", function() { return NumbersOnlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

/**
 * Directive which checks any user input digit.
 * If is not an allowed value it is removed.
 * This directive assures:
 *
 * - numbers only [0-9]
 * - not negative values
 * - no separators (.,)
 * - allows some keyboard shortcuts
 * - allows copy/paste and drag/drop of values
 */
var NumbersOnlyDirective = /** @class */ (function () {
    function NumbersOnlyDirective(el) {
        this.el = el;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.inputElement = el.nativeElement;
    }
    NumbersOnlyDirective.prototype.onKeyDown = function (e) {
        if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) // Allow: Cmd+X (Mac)
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if (isNaN(Number(e.key))) {
            e.preventDefault();
        }
    };
    NumbersOnlyDirective.prototype.onPaste = function (event) {
        event.preventDefault();
        var pastedInput = event.clipboardData
            .getData('text/plain')
            .replace(/\D/g, ''); // get a digit-only string
        document.execCommand('insertText', false, pastedInput);
    };
    NumbersOnlyDirective.prototype.onDrop = function (event) {
        event.preventDefault();
        var textData = event.dataTransfer.getData('text').replace(/\D/g, '');
        this.inputElement.focus();
        document.execCommand('insertText', false, textData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NumbersOnlyDirective.prototype, "onKeyDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('paste', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClipboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NumbersOnlyDirective.prototype, "onPaste", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DragEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NumbersOnlyDirective.prototype, "onDrop", null);
    NumbersOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[numbersOnlyDirective]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NumbersOnlyDirective);
    return NumbersOnlyDirective;
}());



/***/ }),

/***/ "./src/app/helpers/parallax.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/helpers/parallax.directive.ts ***!
  \***********************************************/
/*! exports provided: ParallaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function() { return ParallaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Directive for a simple parallax effect
 */
var ParallaxDirective = /** @class */ (function () {
    function ParallaxDirective(eleRef) {
        this.eleRef = eleRef;
        this.parallaxRatio = 1;
        this.initialTop = 0;
        this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    }
    ParallaxDirective.prototype.onWindowScroll = function (event) {
        this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ratio'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ParallaxDirective.prototype, "parallaxRatio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ParallaxDirective.prototype, "onWindowScroll", null);
    ParallaxDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appParallax]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ParallaxDirective);
    return ParallaxDirective;
}());



/***/ }),

/***/ "./src/app/models/cart-item-list.ts":
/*!******************************************!*\
  !*** ./src/app/models/cart-item-list.ts ***!
  \******************************************/
/*! exports provided: CartItemList, CartItemListAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemList", function() { return CartItemList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemListAdapter", function() { return CartItemListAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

/**
 * CartItemList model
 */
var CartItemList = /** @class */ (function () {
    function CartItemList(contentId, item, amount, price, totalPrice, buttonText) {
        this.contentId = contentId;
        this.item = item;
        this.amount = amount;
        this.price = price;
        this.totalPrice = totalPrice;
        this.buttonText = buttonText;
    }
    return CartItemList;
}());

var CartItemListAdapter = /** @class */ (function () {
    /**
     * CartItemList Adapter. Adapts any provided item to a CartItemList if possible
     */
    function CartItemListAdapter() {
    }
    CartItemListAdapter.prototype.adapt = function (item) {
        return new CartItemList(item.contentId, item.texts.item, item.texts.amount, item.texts.price, item.texts.total_price, item.texts.button);
    };
    CartItemListAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * CartItemList Adapter. Adapts any provided item to a CartItemList if possible
         */
    ], CartItemListAdapter);
    return CartItemListAdapter;
}());



/***/ }),

/***/ "./src/app/models/currency.ts":
/*!************************************!*\
  !*** ./src/app/models/currency.ts ***!
  \************************************/
/*! exports provided: Currency, CurrencyAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyAdapter", function() { return CurrencyAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: jm114 */

var Currency = /** @class */ (function () {
    function Currency(code) {
        this.code = code;
    }
    return Currency;
}());

var CurrencyAdapter = /** @class */ (function () {
    function CurrencyAdapter() {
    }
    CurrencyAdapter.prototype.adapt = function (item) {
        return new Currency(item.code);
    };
    CurrencyAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CurrencyAdapter);
    return CurrencyAdapter;
}());



/***/ }),

/***/ "./src/app/models/description.ts":
/*!***************************************!*\
  !*** ./src/app/models/description.ts ***!
  \***************************************/
/*! exports provided: Description, DescriptionAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionAdapter", function() { return DescriptionAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

var Description = /** @class */ (function () {
    function Description(contentId, headline, text, button, buttonLink, image) {
        this.contentId = contentId;
        this.headline = headline;
        this.text = text;
        this.button = button;
        this.buttonLink = buttonLink;
        this.image = image;
    }
    return Description;
}());

var DescriptionAdapter = /** @class */ (function () {
    function DescriptionAdapter() {
    }
    DescriptionAdapter.prototype.adapt = function (item) {
        return new Description(item.contentId, item.texts.headline, item.texts.text, item.texts.button, item.texts.buttonLink, item.images.background_image);
    };
    DescriptionAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DescriptionAdapter);
    return DescriptionAdapter;
}());



/***/ }),

/***/ "./src/app/models/headline-text.ts":
/*!*****************************************!*\
  !*** ./src/app/models/headline-text.ts ***!
  \*****************************************/
/*! exports provided: HeadlineText, HeadlineTextAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineText", function() { return HeadlineText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineTextAdapter", function() { return HeadlineTextAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

/**
 * HeadlineText model
 */
var HeadlineText = /** @class */ (function () {
    function HeadlineText(contentId, headline, text) {
        this.contentId = contentId;
        this.headline = headline;
        this.text = text;
    }
    return HeadlineText;
}());

var HeadlineTextAdapter = /** @class */ (function () {
    function HeadlineTextAdapter() {
    }
    HeadlineTextAdapter.prototype.adapt = function (item) {
        return new HeadlineText(item.contentId, item.texts.headline, item.texts.text);
    };
    HeadlineTextAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HeadlineTextAdapter);
    return HeadlineTextAdapter;
}());



/***/ }),

/***/ "./src/app/models/image.ts":
/*!*********************************!*\
  !*** ./src/app/models/image.ts ***!
  \*********************************/
/*! exports provided: Image, ImageAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageAdapter", function() { return ImageAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

var Image = /** @class */ (function () {
    function Image(contentId, image) {
        this.contentId = contentId;
        this.image = image;
    }
    return Image;
}());

var ImageAdapter = /** @class */ (function () {
    function ImageAdapter() {
    }
    ImageAdapter.prototype.adapt = function (item) {
        return new Image(item.contentId, item.images.background_image);
    };
    ImageAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ImageAdapter);
    return ImageAdapter;
}());



/***/ }),

/***/ "./src/app/models/language.ts":
/*!************************************!*\
  !*** ./src/app/models/language.ts ***!
  \************************************/
/*! exports provided: Language, LanguageAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageAdapter", function() { return LanguageAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

/**
 * Language model
 */
var Language = /** @class */ (function () {
    function Language(langCode) {
        this.langCode = langCode;
    }
    return Language;
}());

var LanguageAdapter = /** @class */ (function () {
    /**
     * Language Adapter. Adapts any provided item to a Language if possible
     */
    function LanguageAdapter() {
    }
    LanguageAdapter.prototype.adapt = function (item) {
        return new Language(item.langCode);
    };
    LanguageAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Language Adapter. Adapts any provided item to a Language if possible
         */
    ], LanguageAdapter);
    return LanguageAdapter;
}());



/***/ }),

/***/ "./src/app/models/login.ts":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: Login, LoginAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdapter", function() { return LoginAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303, jm114 */

/**
 * Login model
 */
var Login = /** @class */ (function () {
    function Login(contentId, headline, username, password, buttonText) {
        this.contentId = contentId;
        this.headline = headline;
        this.username = username;
        this.password = password;
        this.buttonText = buttonText;
    }
    return Login;
}());

var LoginAdapter = /** @class */ (function () {
    /**
     * Login Adapter. Adapts any provided item to a Login if possible
     */
    function LoginAdapter() {
    }
    LoginAdapter.prototype.adapt = function (item) {
        return new Login(item.contentId, item.texts.headline, item.texts.username, item.texts.password, item.texts.buttonText);
    };
    LoginAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Login Adapter. Adapts any provided item to a Login if possible
         */
    ], LoginAdapter);
    return LoginAdapter;
}());



/***/ }),

/***/ "./src/app/models/logout.ts":
/*!**********************************!*\
  !*** ./src/app/models/logout.ts ***!
  \**********************************/
/*! exports provided: Logout, LogoutAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutAdapter", function() { return LogoutAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

var Logout = /** @class */ (function () {
    function Logout(contentId, headline, text, buttonText) {
        this.contentId = contentId;
        this.headline = headline;
        this.text = text;
        this.buttonText = buttonText;
    }
    return Logout;
}());

var LogoutAdapter = /** @class */ (function () {
    /**
     * Logout Adapter. Adapts any provided item to a Logout if possible
     */
    function LogoutAdapter() {
    }
    LogoutAdapter.prototype.adapt = function (item) {
        return new Logout(item.contentId, item.texts.headline, item.texts.text, item.texts.buttonText);
    };
    LogoutAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Logout Adapter. Adapts any provided item to a Logout if possible
         */
    ], LogoutAdapter);
    return LogoutAdapter;
}());



/***/ }),

/***/ "./src/app/models/order-item.ts":
/*!**************************************!*\
  !*** ./src/app/models/order-item.ts ***!
  \**************************************/
/*! exports provided: OrderItem, OrderItemAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemAdapter", function() { return OrderItemAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* Author: jm114 */


/**
 * OrderItem model
 */
var OrderItem = /** @class */ (function () {
    function OrderItem(orderId, items, totalPrice, currency) {
        this.orderId = orderId;
        this.items = items;
        this.totalPrice = totalPrice;
        this.currency = currency;
    }
    return OrderItem;
}());

var OrderItemAdapter = /** @class */ (function () {
    /**
     * OrderItem Adapter. Adapts any provided item to a OrderItem if possible
     */
    function OrderItemAdapter() {
    }
    OrderItemAdapter.prototype.adapt = function (item) {
        return new OrderItem(item.orderId, item.orderItemList, item.totalPrice, item.currency);
    };
    OrderItemAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * OrderItem Adapter. Adapts any provided item to a OrderItem if possible
         */
    ], OrderItemAdapter);
    return OrderItemAdapter;
}());



/***/ }),

/***/ "./src/app/models/page.ts":
/*!********************************!*\
  !*** ./src/app/models/page.ts ***!
  \********************************/
/*! exports provided: Page, PageAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdapter", function() { return PageAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303, jm114 */

/**
 * Page model
 */
var Page = /** @class */ (function () {
    function Page(pageId, path, title) {
        this.pageId = pageId;
        this.path = path;
        this.title = title;
    }
    return Page;
}());

var PageAdapter = /** @class */ (function () {
    /**
     * Page Adapter. Adapts any provided item to a Page if possible
     */
    function PageAdapter() {
    }
    PageAdapter.prototype.adapt = function (item) {
        return new Page(item.pageId, item.path, item.texts.title);
    };
    PageAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Page Adapter. Adapts any provided item to a Page if possible
         */
    ], PageAdapter);
    return PageAdapter;
}());



/***/ }),

/***/ "./src/app/models/planet.ts":
/*!**********************************!*\
  !*** ./src/app/models/planet.ts ***!
  \**********************************/
/*! exports provided: Planet, PlanetAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planet", function() { return Planet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetAdapter", function() { return PlanetAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* Author: mk303 */


/**
 * Planet model
 */
var Planet = /** @class */ (function () {
    function Planet(simpleName, name, description, totalSize, soldSizeSquareKm, priceSquareKm, maxAvailableSquareKm, image) {
        this.simpleName = simpleName;
        this.name = name;
        this.description = description;
        this.totalSize = totalSize;
        this.soldSizeSquareKm = soldSizeSquareKm;
        this.priceSquareKm = priceSquareKm;
        this.maxAvailableSquareKm = maxAvailableSquareKm;
        this.image = image;
    }
    return Planet;
}());

var PlanetAdapter = /** @class */ (function () {
    /**
     * Planet Adapter. Adapts any provided item to a Planet if possible
     */
    function PlanetAdapter() {
    }
    PlanetAdapter.prototype.adapt = function (item) {
        return new Planet(item.simpleName, item.texts.name, item.texts.description, item.totalSize, item.soldSizeSquareKm, item.priceSquareKm, (item.totalSize - item.soldSizeSquareKm), item.image);
    };
    PlanetAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Planet Adapter. Adapts any provided item to a Planet if possible
         */
    ], PlanetAdapter);
    return PlanetAdapter;
}());



/***/ }),

/***/ "./src/app/models/planet_info.ts":
/*!***************************************!*\
  !*** ./src/app/models/planet_info.ts ***!
  \***************************************/
/*! exports provided: PlanetInfo, PlanetInfoAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetInfo", function() { return PlanetInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetInfoAdapter", function() { return PlanetInfoAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

/**
 * PlanetInfo model
 */
var PlanetInfo = /** @class */ (function () {
    function PlanetInfo(contentId, headline, priceSquareKm, availableSizeSquareKm, amount, button, soldOut) {
        this.contentId = contentId;
        this.headline = headline;
        this.priceSquareKm = priceSquareKm;
        this.availableSizeSquareKm = availableSizeSquareKm;
        this.amount = amount;
        this.button = button;
        this.soldOut = soldOut;
    }
    return PlanetInfo;
}());

var PlanetInfoAdapter = /** @class */ (function () {
    /**
     * PlanetInfo Adapter. Adapts any provided item to a PlanetInfo if possible
     */
    function PlanetInfoAdapter() {
    }
    PlanetInfoAdapter.prototype.adapt = function (item) {
        return new PlanetInfo(item.simpleName, item.texts.headline, item.texts.priceSquareKm, item.texts.availableSizeSquareKm, item.texts.amount, item.texts.button, item.texts.soldOut);
    };
    PlanetInfoAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * PlanetInfo Adapter. Adapts any provided item to a PlanetInfo if possible
         */
    ], PlanetInfoAdapter);
    return PlanetInfoAdapter;
}());



/***/ }),

/***/ "./src/app/models/shopping-cart-item.ts":
/*!**********************************************!*\
  !*** ./src/app/models/shopping-cart-item.ts ***!
  \**********************************************/
/*! exports provided: ShoppingCartItem, ShoppingCartItemAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItem", function() { return ShoppingCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItemAdapter", function() { return ShoppingCartItemAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* Author: mk303 */


/**
 * ShoppingCartItem model
 */
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(simpleName, name, priceSquareKm, image, sizeSquareKm, maxAvailableSquareKm, totalPrice) {
        this.simpleName = simpleName;
        this.name = name;
        this.priceSquareKm = priceSquareKm;
        this.image = image;
        this.sizeSquareKm = sizeSquareKm;
        this.maxAvailableSquareKm = maxAvailableSquareKm;
        this.totalPrice = totalPrice;
    }
    return ShoppingCartItem;
}());

var ShoppingCartItemAdapter = /** @class */ (function () {
    /**
     * ShoppingCartItem Adapter. Adapts any provided item to a ShoppingCartItem if possible
     */
    function ShoppingCartItemAdapter() {
    }
    ShoppingCartItemAdapter.prototype.adapt = function (item) {
        return new ShoppingCartItem(item.simpleName, item.name, item.priceSquareKm, item.image, item.sizeSquareKm, item.maxAvailableSquareKm, item.totalPrice);
    };
    ShoppingCartItemAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * ShoppingCartItem Adapter. Adapts any provided item to a ShoppingCartItem if possible
         */
    ], ShoppingCartItemAdapter);
    return ShoppingCartItemAdapter;
}());



/***/ }),

/***/ "./src/app/models/static-strings.ts":
/*!******************************************!*\
  !*** ./src/app/models/static-strings.ts ***!
  \******************************************/
/*! exports provided: StaticStrings, StaticStringsAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticStrings", function() { return StaticStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticStringsAdapter", function() { return StaticStringsAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

/**
 * StaticStrings model
 */
var StaticStrings = /** @class */ (function () {
    function StaticStrings(contentId, PRODUCT_HOVER_FIND_OUT_MORE, LOGIN_WELCOME_1, LOGIN_WELCOME_2, LOGIN_ERROR_1, LOGIN_ERROR_2, ERROR_DEFAULT, LOGIN_ERROR_TIMEOUT, LOGIN_INFO, SHOPPING_CART_UPDATE_SUCCESSFUL, SHOPPING_CART_UPDATE_FAILED, SUBMIT_LOGIN_INFO, SHOPPING_CART_ITEM_DELETE_INFO, SHOPPING_CART_ITEM_DELETE_BUTTON, PRODUCT_AVAILABILITY_ERROR_1, PRODUCT_AVAILABILITY_ERROR_2, PRODUCT_MIN_AMOUNT_INFO, PRODUCT_MAX_AMOUNT_INFO_1, PRODUCT_MAX_AMOUNT_INFO_2, PRODUCT_ADDED_SUCCESSFUL_1, PRODUCT_ADDED_SUCCESSFUL_2, LOGOUT_SUCCESSFUL) {
        this.contentId = contentId;
        this.PRODUCT_HOVER_FIND_OUT_MORE = PRODUCT_HOVER_FIND_OUT_MORE;
        this.LOGIN_WELCOME_1 = LOGIN_WELCOME_1;
        this.LOGIN_WELCOME_2 = LOGIN_WELCOME_2;
        this.LOGIN_ERROR_1 = LOGIN_ERROR_1;
        this.LOGIN_ERROR_2 = LOGIN_ERROR_2;
        this.ERROR_DEFAULT = ERROR_DEFAULT;
        this.LOGIN_ERROR_TIMEOUT = LOGIN_ERROR_TIMEOUT;
        this.LOGIN_INFO = LOGIN_INFO;
        this.SHOPPING_CART_UPDATE_SUCCESSFUL = SHOPPING_CART_UPDATE_SUCCESSFUL;
        this.SHOPPING_CART_UPDATE_FAILED = SHOPPING_CART_UPDATE_FAILED;
        this.SUBMIT_LOGIN_INFO = SUBMIT_LOGIN_INFO;
        this.SHOPPING_CART_ITEM_DELETE_INFO = SHOPPING_CART_ITEM_DELETE_INFO;
        this.SHOPPING_CART_ITEM_DELETE_BUTTON = SHOPPING_CART_ITEM_DELETE_BUTTON;
        this.PRODUCT_AVAILABILITY_ERROR_1 = PRODUCT_AVAILABILITY_ERROR_1;
        this.PRODUCT_AVAILABILITY_ERROR_2 = PRODUCT_AVAILABILITY_ERROR_2;
        this.PRODUCT_MIN_AMOUNT_INFO = PRODUCT_MIN_AMOUNT_INFO;
        this.PRODUCT_MAX_AMOUNT_INFO_1 = PRODUCT_MAX_AMOUNT_INFO_1;
        this.PRODUCT_MAX_AMOUNT_INFO_2 = PRODUCT_MAX_AMOUNT_INFO_2;
        this.PRODUCT_ADDED_SUCCESSFUL_1 = PRODUCT_ADDED_SUCCESSFUL_1;
        this.PRODUCT_ADDED_SUCCESSFUL_2 = PRODUCT_ADDED_SUCCESSFUL_2;
        this.LOGOUT_SUCCESSFUL = LOGOUT_SUCCESSFUL;
    }
    return StaticStrings;
}());

var StaticStringsAdapter = /** @class */ (function () {
    /**
     * StaticStrings Adapter. Adapts any provided item to a StaticStrings if possible
     */
    function StaticStringsAdapter() {
    }
    StaticStringsAdapter.prototype.adapt = function (item) {
        return new StaticStrings(item.contentId, item.texts.product_hover_find_out_more, item.texts.login_welcome_1, item.texts.login_welcome_2, item.texts.login_error_1, item.texts.login_error_2, item.texts.error_default, item.texts.login_error_timeout, item.texts.login_info, item.texts.shopping_cart_update_successful, item.texts.shopping_cart_update_failed, item.texts.submit_login_info, item.texts.shopping_cart_item_delete_info, item.texts.shopping_cart_item_delete_button, item.texts.product_availability_error_1, item.texts.product_availability_error_2, item.texts.product_min_amount_info, item.texts.product_max_amount_info_1, item.texts.product_max_amount_info_2, item.texts.product_added_sccuessful_1, item.texts.product_added_sccuessful_2, item.texts.logout_successful);
    };
    StaticStringsAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * StaticStrings Adapter. Adapts any provided item to a StaticStrings if possible
         */
    ], StaticStringsAdapter);
    return StaticStringsAdapter;
}());



/***/ }),

/***/ "./src/app/models/teaser.ts":
/*!**********************************!*\
  !*** ./src/app/models/teaser.ts ***!
  \**********************************/
/*! exports provided: Teaser, TeaserAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teaser", function() { return Teaser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeaserAdapter", function() { return TeaserAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: jm114, mk303 */

/**
 * Teaser model
 */
var Teaser = /** @class */ (function () {
    function Teaser(contentId, image, logo, headline) {
        this.contentId = contentId;
        this.image = image;
        this.logo = logo;
        this.headline = headline;
    }
    return Teaser;
}());

var TeaserAdapter = /** @class */ (function () {
    /**
     * Teaser Adapter. Adapts any provided item to a Teaser if possible
     */
    function TeaserAdapter() {
    }
    TeaserAdapter.prototype.adapt = function (item) {
        return new Teaser(item.contentId, item.images.background_image, item.images.logo, item.texts.headline);
    };
    TeaserAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Teaser Adapter. Adapts any provided item to a Teaser if possible
         */
    ], TeaserAdapter);
    return TeaserAdapter;
}());



/***/ }),

/***/ "./src/app/pages/greeting/greeting.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/greeting/greeting.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<main>\n  <div style=\"width: 100%; max-width: 1000px; padding: 100px;box-sizing: border-box;\">\n    <svg width=\"100%\" viewBox=\"0 0 181 73\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <g id=\"Page-1\" fill=\"none\">\n        <g id=\"A4\" transform=\"translate(-57.000000, -30.000000)\" stroke-width=\"0.1\">\n          <g id=\"ASTRO\" transform=\"translate(57.000000, 30.000000)\">\n            <path class=\"slogan\" stroke=\"#49A1EB\" d=\"M7.508,61.258457 L7.508,59.8454336 C7.03379521,59.7523399 6.47285054,59.6688958 5.82536363,59.5951981 C5.13286839,59.5163775 4.49439063,59.477 3.91,59.477 C2.64509282,59.477 1.69855094,59.7466544 1.06666896,60.2804857 C0.440319392,60.8096431 0.125,61.6414339 0.125,62.786 L0.125,63.432 C0.125,64.5663434 0.41042995,65.3764208 0.974876448,65.8709834 C1.54412943,66.3697574 2.40778601,66.622 3.57,66.622 L4.743,66.622 C5.260045,66.622 5.65917103,66.7509484 5.93430947,67.0135806 C6.21027486,67.2770021 6.347,67.6498888 6.347,68.124 L6.347,68.719 C6.347,69.3283317 6.12997407,69.7623835 5.69580075,70.0014935 C5.28329657,70.2286697 4.68855829,70.34 3.91,70.34 C2.46545524,70.34 1.24358408,70.2984376 0.244,70.2152168 L0.244,71.6280518 C0.709542857,71.7298603 1.28948294,71.8124375 1.98331697,71.8755133 C2.72772849,71.9431871 3.40398601,71.977 4.012,71.977 C5.34904357,71.977 6.3679394,71.7361197 7.06973334,71.2591192 C7.75616379,70.792561 8.103,69.9335994 8.103,68.668 L8.103,67.869 C8.103,66.9592198 7.83951293,66.2339512 7.31334442,65.6860851 C6.78935696,65.1404899 6.0202418,64.866 4.998,64.866 L3.689,64.866 C3.09603558,64.866 2.6466849,64.7453689 2.34345294,64.4978327 C2.03331893,64.244662 1.881,63.8405506 1.881,63.296 L1.881,62.871 C1.881,62.2090536 2.07621077,61.7411674 2.47331801,61.4827326 C2.85388771,61.2350602 3.41194578,61.114 4.148,61.114 C4.92139566,61.114 6.04110007,61.1621662 7.508,61.258457 Z M16.376,59.579 L16.376,71.875 L18.217,71.875 L18.217,67.716 L18.3607257,67.5924106 C18.7314717,67.6485842 19.2559296,67.7049775 19.9333807,67.7614318 C20.6102241,67.8178354 21.1228198,67.846 21.47,67.846 C23.6947078,67.846 24.796,66.4680285 24.796,63.653 C24.796,62.0309299 24.4769903,60.9501471 23.8529173,60.4067732 C23.2193126,59.8551001 22.4156152,59.579 21.436,59.579 L16.376,59.579 Z M21.164,66.192 L18.342,66.192 L18.217,66.067 L18.217,61.341 L18.342,61.216 L21.232,61.216 C22.3676158,61.216 22.938,62.0562435 22.938,63.67 C22.938,64.5450909 22.7875237,65.1824022 22.4784106,65.5824309 C22.1650277,65.9879853 21.7229958,66.192 21.164,66.192 Z M35.1597933,59.579 L31.1610941,71.875 L33.056756,71.875 L33.980947,68.986903 L34.1,68.9 L38.639,68.9 L38.7578543,68.9862875 L39.6987492,71.875 L41.6289059,71.875 L37.6302067,59.579 L35.1597933,59.579 Z M38.2487092,67.102018 L38.129,67.263 L34.593,67.263 L34.4732908,67.102018 L36.361,60.8217547 L38.2487092,67.102018 Z M57.094,71.5491279 L57.094,70.1694439 C56.1459393,70.2831924 55.0543569,70.34 53.819,70.34 C53.0276691,70.34 52.422859,70.2166892 52.003688,69.9651866 C51.5761124,69.7086412 51.2750047,69.2449354 51.0972565,68.581342 C50.9238739,67.9340471 50.838,66.9779841 50.838,65.71 C50.838,64.4413847 50.9296601,63.484683 51.1148095,62.8366599 C51.304371,62.1731945 51.6144336,61.7126162 52.0479907,61.4622522 C52.4721117,61.2173373 53.0679279,61.097 53.836,61.097 C54.4970442,61.097 55.1439454,61.1254979 55.7767158,61.1825042 C56.3233031,61.2317463 56.7621401,61.2853249 57.094,61.3434761 L57.094,59.9723393 C56.6305148,59.8378517 56.0791324,59.7203293 55.4401095,59.6199869 C54.7608212,59.5133218 54.0844767,59.46 53.411,59.46 C52.3877239,59.46 51.5578809,59.634267 50.9206574,59.9803453 C50.2922405,60.3216407 49.8124857,60.9376895 49.4823052,61.8346798 C49.1482004,62.7423312 48.98,64.0234574 48.98,65.676 C48.98,67.4195134 49.1455208,68.749291 49.4741201,69.6626855 C49.7986413,70.5647445 50.2639689,71.1715753 50.868259,71.4899066 C51.4828357,71.8136569 52.3133939,71.977 53.36,71.977 C54.8456913,71.977 56.0905513,71.8340679 57.094,71.5491279 Z M67.8422978,71.96 C69.8028928,71.9379586 71.4841938,71.8676954 72.886,71.7492752 L72.886,70.238 L68.251,70.238 C67.3651822,70.238 66.902,69.7619516 66.902,68.855 L66.902,66.696 L67.0241506,66.5710325 L72.121,66.4548177 L72.121,65.0501823 L67.0241506,64.9339675 L66.902,64.809 L66.902,62.582 C66.902,62.1528578 67.0217913,61.8218555 67.2653155,61.5975569 C67.5059135,61.3759534 67.8421127,61.267 68.268,61.267 L72.886,61.267 L72.886,59.7591223 C71.937265,59.705589 71.0930952,59.6625081 70.3534907,59.6298785 C69.5848226,59.5959667 68.6686206,59.579 67.605,59.579 C66.8967378,59.579 66.2959977,59.7846588 65.7976102,60.1963702 C65.3083716,60.6005238 65.061,61.2619739 65.061,62.191 L65.061,69.433 C65.061,70.4591091 65.3306651,71.1265969 65.8598944,71.4514703 C66.4114566,71.7900531 67.0714238,71.9598969 67.8422978,71.96 Z M94.2612978,71.96 C96.2218928,71.9379586 97.9031938,71.8676954 99.305,71.7492752 L99.305,70.238 L94.67,70.238 C93.7841822,70.238 93.321,69.7619516 93.321,68.855 L93.321,66.696 L93.4431506,66.5710325 L98.54,66.4548177 L98.54,65.0501823 L93.4431506,64.9339675 L93.321,64.809 L93.321,62.582 C93.321,62.1528578 93.4407913,61.8218555 93.6843155,61.5975569 C93.9249135,61.3759534 94.2611127,61.267 94.687,61.267 L99.305,61.267 L99.305,59.7591223 C98.356265,59.705589 97.5120952,59.6625081 96.7724907,59.6298785 C96.0038226,59.5959667 95.0876206,59.579 94.024,59.579 C93.3157378,59.579 92.7149977,59.7846588 92.2166102,60.1963702 C91.7273716,60.6005238 91.48,61.2619739 91.48,62.191 L91.48,69.433 C91.48,70.4591091 91.7496651,71.1265969 92.2788944,71.4514703 C92.8304566,71.7900531 93.4904238,71.9598969 94.2612978,71.96 Z M114.655,61.258457 L114.655,59.8454336 C114.180795,59.7523399 113.619851,59.6688958 112.972364,59.5951981 C112.279868,59.5163775 111.641391,59.477 111.057,59.477 C109.792093,59.477 108.845551,59.7466544 108.213669,60.2804857 C107.587319,60.8096431 107.272,61.6414339 107.272,62.786 L107.272,63.432 C107.272,64.5663434 107.55743,65.3764208 108.121876,65.8709834 C108.691129,66.3697574 109.554786,66.622 110.717,66.622 L111.89,66.622 C112.407045,66.622 112.806171,66.7509484 113.081309,67.0135806 C113.357275,67.2770021 113.494,67.6498888 113.494,68.124 L113.494,68.719 C113.494,69.3283317 113.276974,69.7623835 112.842801,70.0014935 C112.430297,70.2286697 111.835558,70.34 111.057,70.34 C109.612455,70.34 108.390584,70.2984376 107.391,70.2152168 L107.391,71.6280518 C107.856543,71.7298603 108.436483,71.8124375 109.130317,71.8755133 C109.874728,71.9431871 110.550986,71.977 111.159,71.977 C112.496044,71.977 113.514939,71.7361197 114.216733,71.2591192 C114.903164,70.792561 115.25,69.9335994 115.25,68.668 L115.25,67.869 C115.25,66.9592198 114.986513,66.2339512 114.460344,65.6860851 C113.936357,65.1404899 113.167242,64.866 112.145,64.866 L110.836,64.866 C110.243036,64.866 109.793685,64.7453689 109.490453,64.4978327 C109.180319,64.244662 109.028,63.8405506 109.028,63.296 L109.028,62.871 C109.028,62.2090536 109.223211,61.7411674 109.620318,61.4827326 C110.000888,61.2350602 110.558946,61.114 111.295,61.114 C112.068396,61.114 113.1881,61.1621662 114.655,61.258457 Z M126.226,71.875 L128.084,71.875 L128.084,61.341 L128.209,61.216 L131.671,61.216 L131.671,59.579 L122.622,59.579 L122.622,61.216 L126.101,61.216 L126.226,61.341 L126.226,71.875 Z M141.779793,59.579 L137.781094,71.875 L139.676756,71.875 L140.600947,68.986903 L140.72,68.9 L145.259,68.9 L145.377854,68.9862875 L146.318749,71.875 L148.248906,71.875 L144.250207,59.579 L141.779793,59.579 Z M144.868709,67.102018 L144.749,67.263 L141.213,67.263 L141.093291,67.102018 L142.981,60.8217547 L144.868709,67.102018 Z M157.946,71.875 L159.804,71.875 L159.804,61.341 L159.929,61.216 L163.391,61.216 L163.391,59.579 L154.342,59.579 L154.342,61.216 L157.821,61.216 L157.946,61.341 L157.946,71.875 Z M173.867298,71.96 C175.827893,71.9379586 177.509194,71.8676954 178.911,71.7492752 L178.911,70.238 L174.276,70.238 C173.390182,70.238 172.927,69.7619516 172.927,68.855 L172.927,66.696 L173.049151,66.5710325 L178.146,66.4548177 L178.146,65.0501823 L173.049151,64.9339675 L172.927,64.809 L172.927,62.582 C172.927,62.1528578 173.046791,61.8218555 173.290316,61.5975569 C173.530914,61.3759534 173.867113,61.267 174.293,61.267 L178.911,61.267 L178.911,59.7591223 C177.962265,59.705589 177.118095,59.6625081 176.378491,59.6298785 C175.609823,59.5959667 174.693621,59.579 173.63,59.579 C172.921738,59.579 172.320998,59.7846588 171.82261,60.1963702 C171.333372,60.6005238 171.086,61.2619739 171.086,62.191 L171.086,69.433 C171.086,70.4591091 171.355665,71.1265969 171.884894,71.4514703 C172.436457,71.7900531 173.096424,71.9598969 173.867298,71.96 Z\" id=\"SPACEESTATE\" fill-rule=\"nonzero\"></path>\n            <path class=\"astro\" stroke=\"rgba(68,68,68, .8)\" d=\"M30.8086171,45.6892665 L40.0608725,45.6892665 L25.8018048,0.125 L14.4291636,0.125 L0.170095943,45.6892665 L9.29860537,45.6892665 L20.0224373,7.40048494 L30.8086171,45.6892665 Z M72.3340022,26.9836313 L72.3340022,23.5970668 C71.3737166,23.3999753 70.2978102,23.2268028 69.1063391,23.0775979 C67.8754155,22.9234525 66.6858312,22.8463997 65.5375453,22.8463997 C60.679738,22.8463997 58.277598,24.9407691 58.277598,29.1601615 L58.277598,30.2745626 C58.277598,32.4912326 58.8271378,34.0771912 59.919315,35.040859 C61.0161484,36.0086352 62.6814991,36.4954576 64.9195581,36.4954576 L66.8662178,36.4954576 C67.6364831,36.4954576 68.2377976,36.6854063 68.6647052,37.0692256 C69.0946847,37.4558067 69.3086699,38.0109821 69.3086699,38.7254374 L69.3086699,39.5612382 C69.3086699,40.4718343 68.9664139,41.1188799 68.2846041,41.482439 C67.6248253,41.8342506 66.6583171,42.0079071 65.3830485,42.0079071 C62.6471591,42.0079071 60.3715618,41.9194357 58.5556922,41.742348 L58.5556922,45.1277104 C59.4589168,45.342864 60.5548127,45.5200486 61.8430302,45.6590321 C63.1776975,45.803027 64.429805,45.875 65.599344,45.875 C67.297328,45.875 68.7167248,45.6959738 69.8570091,45.3389866 C70.9836243,44.9862787 71.8560108,44.3433554 72.4785353,43.4078695 C73.101762,42.4713285 73.4154799,41.1482741 73.4154799,39.4374159 L73.4154799,38.1372813 C73.4154799,36.4141175 72.9067914,35.0265545 71.8898958,33.9674622 C70.8752243,32.9106862 69.3990524,32.3807201 67.4533057,32.3807201 L65.1976523,32.3807201 C64.2650003,32.3807201 63.5632211,32.1928806 63.094749,31.8108723 C62.619731,31.4235262 62.3844079,30.8149589 62.3844079,29.9959623 L62.3844079,29.3768506 C62.3844079,28.3666428 62.701722,27.6596083 63.3408202,27.2732439 C63.9608734,26.898393 64.8678764,26.7134926 66.0628345,26.7134926 C67.485297,26.7134926 69.5753591,26.8035525 72.3340022,26.9836313 Z M97.2725919,45.6892665 L101.595697,45.6892665 L101.595697,27.0242261 L101.720697,26.8992261 L107.899167,26.8992261 L107.899167,23.0321332 L91.0000216,23.0321332 L91.0000216,26.8992261 L97.1475919,26.8992261 L97.2725919,27.0242261 L97.2725919,45.6892665 Z M126.070797,23.0321332 L126.070797,45.6892665 L130.393902,45.6892665 L130.393902,37.2705249 L130.522379,37.1455733 C132.004484,37.1868178 133.239336,37.2074361 134.226825,37.2074361 L134.341512,37.2827173 L137.9859,45.6892665 L142.373888,45.6892665 L138.192144,36.6730514 L138.256483,36.5054868 C139.347716,36.0398566 140.209715,35.3530426 140.844971,34.4438825 C141.476751,33.5396974 141.795766,32.1395645 141.795766,30.243607 C141.795766,27.5508739 141.22368,25.6793337 140.089782,24.6237946 C138.950724,23.5634519 137.389969,23.0321332 135.401001,23.0321332 L126.070797,23.0321332 Z M134.597618,33.7737214 L130.518902,33.7737214 L130.393902,33.6487214 L130.393902,27.0242261 L130.518902,26.8992261 L134.597618,26.8992261 C135.513932,26.8992261 136.225195,27.1421434 136.724469,27.631452 C137.227138,28.124089 137.472661,28.9956759 137.472661,30.243607 C137.472661,31.5311876 137.227977,32.4424277 136.728187,32.9757813 C136.228945,33.5085504 135.515904,33.7737214 134.597618,33.7737214 Z M169.606594,45.875 C171.835681,45.875 173.605844,45.5785842 174.916297,44.9883162 C176.213791,44.4038854 177.196204,43.2935045 177.86453,41.650085 C178.537176,39.9960386 178.875,37.5756923 178.875,34.3916555 C178.875,31.2075386 178.537164,28.7819745 177.864429,27.1174999 C177.195883,25.4633887 176.212972,24.337297 174.914838,23.7324152 C173.604805,23.1219887 171.835176,22.8154441 169.606594,22.8154441 C167.398527,22.8154441 165.633985,23.121991 164.313465,23.7325704 C163.004937,24.3376055 162.011787,25.4638765 161.333062,27.118108 C160.650214,28.7823888 160.307289,31.2077398 160.307289,34.3916555 C160.307289,37.5756923 160.645113,39.9960386 161.317759,41.650085 C161.986024,43.2933566 162.973421,44.4036751 164.281113,44.9881686 C165.602002,45.5785606 167.377407,45.875 169.606594,45.875 Z M169.606594,42.0079071 C168.26843,42.0079071 167.254378,41.8131496 166.562884,41.4188135 C165.861413,41.0187883 165.363912,40.2738587 165.067429,39.1918493 C164.775487,38.1264106 164.630394,36.5274858 164.630394,34.3916555 C164.630394,32.2140599 164.78588,30.5836841 165.098765,29.4970416 C165.416177,28.3946789 165.924029,27.6449032 166.625958,27.2554353 C167.316928,26.8720475 168.310052,26.682537 169.606594,26.682537 C170.923719,26.682537 171.92706,26.8719924 172.61813,27.2554353 C173.320585,27.6451951 173.818406,28.3906038 174.114941,29.4834156 C174.406837,30.5591287 174.551895,32.1939983 174.551895,34.3916555 C174.551895,36.5067473 174.406801,38.1004928 174.114941,39.1760729 C173.818517,40.2684723 173.321073,41.0186759 172.619405,41.4188135 C171.928011,41.8130928 170.924174,42.0079071 169.606594,42.0079071 Z\" fill-rule=\"nonzero\"></path>\n            <path class=\"horizon\" stroke=\"#444444\" d=\"M165.674861,5.48456422 C92.2661616,-5.89187872 23.2845623,11.092075 0.232886953,45.6892665 L9.37878575,45.6892665 C30.335968,13.8863398 102.111196,-2.73248154 165.674884,5.4845672 Z\" id=\"Oval\"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/greeting/greeting.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/greeting/greeting.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: none; }\nhtml, body {\n  width: 100%;\n  height: 100%;\n  background: #0d0d0d; }\nmain {\n  position: relative;\n  z-index: 300;\n  min-height: calc(100vh - 60px); }\ninput {\n  -webkit-appearance: none;\n  outline: none;\n  border: none;\n  background: transparent;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  text-align: center; }\nem {\n  font-style: normal; }\nmain {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: calc(100vh - 60px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9wYWdlcy9ncmVldGluZy9ncmVldGluZy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDQUEseUJBQUE7QUFJQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWEsRUFBQTtBQUdmO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQTJDLEVBQUE7QUFHN0M7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTtBRGhDcEI7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDBCQUF1QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JlZXRpbmcvZ3JlZXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWxcIjtcblxubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGZvb3Rlci1oZWlnaHR9KTtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG5cbiRmb290ZXItaGVpZ2h0OiA2MHB4O1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5odG1sLCBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzBkMGQwZDtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMzAwO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skZm9vdGVyLWhlaWdodH0pO1xufVxuXG5pbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmVtIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/greeting/greeting.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/greeting/greeting.component.ts ***!
  \******************************************************/
/*! exports provided: GreetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingComponent", function() { return GreetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs/lib/anime.es */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GreetingComponent = /** @class */ (function () {
    function GreetingComponent(router) {
        this.router = router;
    }
    GreetingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
            duration: 7000
        }).add({
            targets: '.astro',
            strokeDashoffset: [animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_2__["default"].setDashoffset, 0],
            easing: 'easeInSine',
            duration: 2000,
        }).add({
            targets: '.astro',
            easing: 'easeInSine',
            duration: 3000,
            fill: 'rgba(68,68,68, .8)',
        }, '-=2000').add({
            targets: '.horizon',
            strokeDashoffset: [animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_2__["default"].setDashoffset, 0],
            easing: 'easeOutSine',
            duration: 2000,
        }, '-=2500').add({
            targets: '.horizon',
            easing: 'easeOutSine',
            duration: 1000,
            fill: 'rgba(68,68,68, 1)',
        }, '-=500').add({
            targets: '.slogan',
            strokeDashoffset: [animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_2__["default"].setDashoffset, 0],
            easing: 'easeInSine',
            duration: 4000,
        }, '-=2000').add({
            targets: '.slogan',
            easing: 'easeInSine',
            duration: 1000,
            fill: '#49A1EB',
        }, '-=3000');
        setTimeout(function () {
            _this.router.navigate(['/home']);
        }, 5000);
    };
    GreetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-greeting',
            template: __webpack_require__(/*! ./greeting.component.html */ "./src/app/pages/greeting/greeting.component.html"),
            styles: [__webpack_require__(/*! ./greeting.component.scss */ "./src/app/pages/greeting/greeting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GreetingComponent);
    return GreetingComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303, jm114 -->\n<main>\n  <app-teaser [data]=\"teaser_0\"></app-teaser>\n  <app-description [data]=\"description_1\"></app-description>\n  <app-h2-text [data]=\"headlineText_2\"></app-h2-text>\n  <app-product-list [planets]=\"planets\"></app-product-list>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_planets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/planets.service */ "./src/app/services/planets.service.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_headline_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/headline-text */ "./src/app/models/headline-text.ts");
/* harmony import */ var _models_description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/description */ "./src/app/models/description.ts");
/* harmony import */ var _models_teaser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/teaser */ "./src/app/models/teaser.ts");

/* Author: mk303, jm114 */







var HomeComponent = /** @class */ (function () {
    function HomeComponent(planetsService, contentService, headlineTextAdapter, descriptionAdapter, teaserAdapter) {
        this.planetsService = planetsService;
        this.contentService = contentService;
        this.headlineTextAdapter = headlineTextAdapter;
        this.descriptionAdapter = descriptionAdapter;
        this.teaserAdapter = teaserAdapter;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Teaser Content
        this.contentService.getContentById(0)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.teaserAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.teaser_0 = data; });
        // Get Description Content
        this.contentService.getContentById(1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.descriptionAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.description_1 = data; });
        // Get Bestseller Content
        this.contentService.getContentById(2)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.headlineTextAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.headlineText_2 = data; });
        // Get 2 Promo Planets from Database, selected randomly
        this.planetsService.getPromoPlanets()
            .subscribe(function (planets) { return _this.planets = planets; });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_planets_service__WEBPACK_IMPORTED_MODULE_2__["PlanetsService"],
            _services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"],
            _models_headline_text__WEBPACK_IMPORTED_MODULE_5__["HeadlineTextAdapter"],
            _models_description__WEBPACK_IMPORTED_MODULE_6__["DescriptionAdapter"],
            _models_teaser__WEBPACK_IMPORTED_MODULE_7__["TeaserAdapter"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/imprint/imprint.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/imprint/imprint.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<main>\n  <app-h1-text [data]=\"headlineText_7\"></app-h1-text>\n  <app-teaser-bg-image [data]=\"image_9\"></app-teaser-bg-image>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/imprint/imprint.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/imprint/imprint.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9wYWdlcy9pbXByaW50L2ltcHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbXByaW50L2ltcHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/imprint/imprint.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/imprint/imprint.component.ts ***!
  \****************************************************/
/*! exports provided: ImprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprintComponent", function() { return ImprintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var _models_headline_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/headline-text */ "./src/app/models/headline-text.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/image */ "./src/app/models/image.ts");

/* Author: mk303 */





var ImprintComponent = /** @class */ (function () {
    function ImprintComponent(contentService, headlineTextAdapter, imageAdapter) {
        this.contentService = contentService;
        this.headlineTextAdapter = headlineTextAdapter;
        this.imageAdapter = imageAdapter;
    }
    ImprintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.getContentById(7)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.headlineTextAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.headlineText_7 = data; });
        this.contentService.getContentById(9)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.imageAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.image_9 = data; });
    };
    ImprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-imprint',
            template: __webpack_require__(/*! ./imprint.component.html */ "./src/app/pages/imprint/imprint.component.html"),
            styles: [__webpack_require__(/*! ./imprint.component.scss */ "./src/app/pages/imprint/imprint.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"],
            _models_headline_text__WEBPACK_IMPORTED_MODULE_3__["HeadlineTextAdapter"],
            _models_image__WEBPACK_IMPORTED_MODULE_5__["ImageAdapter"]])
    ], ImprintComponent);
    return ImprintComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/orders/orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: jm114 -->\n<main *ngIf=\"orders != null && currentCurrency != null && currentLanguage != null\">\n  <app-h1-text [data]=\"headlineText_11\"></app-h1-text>\n  <app-teaser-bg-image [data]=\"image_12\"></app-teaser-bg-image>\n\n  <section class=\"wide-wrapper\" *ngFor=\"let order of orders\">\n    <div class=\"list-head\">\n      <span>ID: <em>{{order.orderId}}</em></span>\n      <span>Menge</span>\n      <span>Preis</span>\n    </div>\n    <div class=\"item-list\" *ngFor=\"let item of order.items\">\n      <span>{{item.simpleName}}</span>\n      <span>{{item.sizeSquareKm}} KM²</span>\n      <span>{{item.totalPrice | currency : order.currency : 'symbol' : '1.2-2' : currentLanguage.langCode}}</span>\n    </div>\n    <div class=\"list-foot\">\n      <span class=\"total_price\">{{order.totalPrice | currency : order.currency : 'symbol' : '1.2-2' : currentLanguage.langCode}}</span>\n    </div>\n  </section>\n  <app-no-items-added-to-order *ngIf=\"orders.length <= 0\" [data]=\"headlineText_17\"></app-no-items-added-to-order>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/orders/orders.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/orders/orders.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: jm114, mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n.max-wrapper, .wide-wrapper, .medium-wrapper, .narrow-wrapper {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 1440px;\n  position: relative; }\n.max-wrapper {\n  max-width: none; }\n.wide-wrapper {\n  max-width: 1190px; }\n.medium-wrapper {\n  max-width: 880px; }\n.narrow-wrapper {\n  max-width: 680px; }\nsection {\n  padding-bottom: 60px; }\nsection span {\n    font-family: 'Roboto Light';\n    font-size: 12px;\n    line-height: 12px;\n    color: #fff;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    -webkit-box-pack: start;\n            justify-content: start; }\nsection span em {\n      font-family: 'Roboto Bold';\n      color: #00B6FF; }\nsection .item-list {\n    padding: 4px 0; }\nsection span:last-child {\n    justify-self: end; }\nsection .total_price {\n    color: #00B6FF;\n    font-family: \"Exo Bold\";\n    font-size: 20px;\n    line-height: 20px;\n    text-align: right; }\n.list-head {\n  display: grid;\n  grid-template-columns: 6fr 2fr 3fr;\n  border-bottom: 1px solid #504F4F;\n  padding-bottom: 11px;\n  margin-bottom: 30px; }\n.item-list {\n  display: grid;\n  grid-template-columns: 6fr 2fr 3fr;\n  grid-row-gap: 10px; }\n.list-foot {\n  display: grid;\n  grid-template-columns: -webkit-max-content;\n  grid-template-columns: max-content;\n  grid-template-rowa: auto auto;\n  grid-row-gap: 20px;\n  border-top: 1px solid #504F4F;\n  padding-top: 20px;\n  margin-top: 30px;\n  -webkit-box-pack: end;\n          justify-content: end; }\n.list-foot div {\n    text-align: right;\n    display: inline-block;\n    border-bottom: 1px solid #504F4F; }\n.list-foot div span:last-child {\n      margin-left: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL190ZXh0LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL193cmFwcGVycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FDQUEseUJBQUE7QUNBQSx5QkFBQTtBREFBLHlCQUFBO0FDR0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjRHhCMkI7RUN5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjRHpDMkI7RUMwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNEdERrQjtFQ3VEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdEckVxQjtFQ3NFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBQzVFM0Isa0JBQUE7QUFHQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBTG9CO0VBTXBCLG1CQU5vQjtFQU9wQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFHcEI7RUFFRSxlQUFlLEVBQUE7QUFHakI7RUFFRSxpQkFBd0MsRUFBQTtBQUcxQztFQUVFLGdCQUF1QyxFQUFBO0FBR3pDO0VBRUUsZ0JBQXVDLEVBQUE7QUh4QnpDO0VBQ0Usb0JBQW9CLEVBQUE7QUFEdEI7SUFJSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQ1JtQjtJRFNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHVCQUFzQjtZQUF0QixzQkFBc0IsRUFBQTtBQVYxQjtNQWFNLDBCQUEwQjtNQUMxQixjQ2xCZ0IsRUFBQTtBREl0QjtJQW1CSSxjQUFjLEVBQUE7QUFuQmxCO0lBdUJJLGlCQUFpQixFQUFBO0FBdkJyQjtJQTJCSSxjQy9Ca0I7SURnQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0FBSXJCO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxnQ0N0Q21CO0VEdUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsYUFBYTtFQUNiLDBDQUFrQztFQUFsQyxrQ0FBa0M7RUFDbEMsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQiw2QkN0RG1CO0VEdURuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTtBQVJ0QjtJQVdJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0NDOURpQixFQUFBO0FEaURyQjtNQWdCTSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IGptMTE0LCBtazMwMyAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy90ZXh0XCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy93cmFwcGVyc1wiO1xuXG5zZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG5cbiAgc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTGlnaHQnO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbiAgICBlbSB7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1ibHVlO1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLWxpc3Qge1xuICAgIHBhZGRpbmc6IDRweCAwO1xuICB9XG5cbiAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgfVxuXG4gIC50b3RhbF9wcmljZSB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWJsdWU7XG4gICAgZm9udC1mYW1pbHk6IFwiRXhvIEJvbGRcIjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cblxuLmxpc3QtaGVhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDJmciAzZnI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbWVkaXVtLWdyZXk7XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaXRlbS1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMmZyIDNmcjtcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xufVxuXG4ubGlzdC1mb290IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dhOiBhdXRvIGF1dG87XG4gIGdyaWQtcm93LWdhcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRtZWRpdW0tZ3JleTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuXG4gIGRpdiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbWVkaXVtLWdyZXk7XG5cbiAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuICB9XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuJHByaW1hcnktYmx1ZTogIzAwQjZGRjtcbiR0ZXh0LWNvbG9yOiAjN0U3RTdFO1xuJHRleHQtY29sb3ItaGVhZGxpbmU6ICNDOEM4Qzg7XG4kdGV4dC1jb2xvci13aGl0ZTogI2ZmZjtcbiRtZWRpdW0tZ3JleTogIzUwNEY0RjtcbiRzZWNvbmRhcnktZ3JlZW46ICMwMGNlODI7XG4kc2Vjb25kYXJ5LW9yYW5nZTogI0ZGQTUwMDtcbiRzZWNvbmRhcnktcmVkOiAjRkYwMDRFO1xuXG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuQGltcG9ydCBcImNvbG9yc1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9FeG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmJyk7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci1oZWFkbGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIiwiLyogQXV0aG9yOiBtazMwMyAqL1xuJHdyYXBwZXItcGFkZGluZzogNDBweDtcblxuJXdyYXBwZXItYmFzZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAkd3JhcHBlci1wYWRkaW5nO1xuICBwYWRkaW5nLXJpZ2h0OiAkd3JhcHBlci1wYWRkaW5nO1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF4LXdyYXBwZXIge1xuICBAZXh0ZW5kICV3cmFwcGVyLWJhc2U7XG4gIG1heC13aWR0aDogbm9uZTtcbn1cblxuLndpZGUtd3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiAxMTEwcHggKyAoMiokd3JhcHBlci1wYWRkaW5nKTtcbn1cblxuLm1lZGl1bS13cmFwcGVyIHtcbiAgQGV4dGVuZCAld3JhcHBlci1iYXNlO1xuICBtYXgtd2lkdGg6IDgwMHB4ICsgKDIqJHdyYXBwZXItcGFkZGluZyk7XG59XG5cbi5uYXJyb3ctd3JhcHBlciB7XG4gIEBleHRlbmQgJXdyYXBwZXItYmFzZTtcbiAgbWF4LXdpZHRoOiA2MDBweCArICgyKiR3cmFwcGVyLXBhZGRpbmcpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/orders/orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_headline_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/headline-text */ "./src/app/models/headline-text.ts");
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/image */ "./src/app/models/image.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/currency.service */ "./src/app/services/currency.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");

/* Author: jm114, mk303 */








var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(contentService, headlineTextAdapter, imageAdapter, orderService, currencyService, languageService) {
        this.contentService = contentService;
        this.headlineTextAdapter = headlineTextAdapter;
        this.imageAdapter = imageAdapter;
        this.orderService = orderService;
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.orders = [];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initial currency - gotten from server
        this.currencyService.getCurrentCurrency()
            .subscribe(function (currency) {
            // highlight correct language
            _this.currentCurrency = currency;
        });
        // Initial language - gotten from server
        this.languageService.getCurrentLanguage()
            .subscribe(function (currency) {
            // highlight correct language
            _this.currentLanguage = currency;
        });
        // Get Headline Text
        this.contentService.getContentById(11)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return _this.headlineTextAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.headlineText_11 = data; });
        // Get Background-Image
        this.contentService.getContentById(12)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return _this.imageAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.image_12 = data; });
        // Get Background-Image
        this.contentService.getContentById(17)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return _this.headlineTextAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.headlineText_17 = data; });
        // Get Array of Orders from Backend (already mapped)
        this.orderService.getOrderOverview().subscribe(function (o) {
            _this.orders = o;
            console.log('### Order Array from Backend ###');
            console.log(_this.orders);
        });
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/pages/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.scss */ "./src/app/pages/orders/orders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"],
            _models_headline_text__WEBPACK_IMPORTED_MODULE_2__["HeadlineTextAdapter"],
            _models_image__WEBPACK_IMPORTED_MODULE_3__["ImageAdapter"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"],
            _services_currency_service__WEBPACK_IMPORTED_MODULE_7__["CurrencyService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<main>\n  <app-h1-text [data]=\"headlineText_18\"></app-h1-text>\n  <app-teaser-bg-image [data]=\"image_19\"></app-teaser-bg-image>\n  <app-button [buttonText]=\"'Homepage'\" routerLink=\"/home\"></app-button>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: none; }\nhtml, body {\n  width: 100%;\n  height: 100%;\n  background: #0d0d0d; }\nmain {\n  position: relative;\n  z-index: 300;\n  min-height: calc(100vh - 60px); }\ninput {\n  -webkit-appearance: none;\n  outline: none;\n  border: none;\n  background: transparent;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  text-align: center; }\nem {\n  font-style: normal; }\nmain {\n  text-align: center; }\nmain ::ng-deep .bg {\n    height: calc(100vh - 60px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9wYWdlcy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDQUEseUJBQUE7QUFJQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWEsRUFBQTtBQUdmO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQTJDLEVBQUE7QUFHN0M7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTtBRGpDcEI7RUFDRSxrQkFBa0IsRUFBQTtBQURwQjtJQUlJLDBCQUF1QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWxcIjtcbm1haW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgOjpuZy1kZWVwIC5iZyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skZm9vdGVyLWhlaWdodH0pO1xuICB9XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuXG4kZm9vdGVyLWhlaWdodDogNjBweDtcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwZDBkMGQ7XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDMwMDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JGZvb3Rlci1oZWlnaHR9KTtcbn1cblxuaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5lbSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_headline_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/headline-text */ "./src/app/models/headline-text.ts");
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/image */ "./src/app/models/image.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");






var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(contentService, headlineTextAdapter, imageAdapter) {
        this.contentService = contentService;
        this.headlineTextAdapter = headlineTextAdapter;
        this.imageAdapter = imageAdapter;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.getContentById(18)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.headlineTextAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.headlineText_18 = data; });
        this.contentService.getContentById(19)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.imageAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.image_19 = data; });
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"],
            _models_headline_text__WEBPACK_IMPORTED_MODULE_2__["HeadlineTextAdapter"],
            _models_image__WEBPACK_IMPORTED_MODULE_3__["ImageAdapter"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<div *ngIf=\"currentPlanet != null && planetInfo_4 != null\" id=\"product_detail\" class=\"flipped\" [ngStyle]=\"{ 'background-image': 'url(' + currentPlanet.image + ')'}\">\n  <div class=\"product_description\">\n    <h1 class=\"title\">{{currentPlanet.name}}</h1>\n    <p>{{currentPlanet.description}}</p>\n  </div>\n  <div class=\"form\">\n    <div>\n      <h2>{{planetInfo_4.headline}} {{currentPlanet.name}}</h2>\n      <form *ngIf=\"planetInfo_4 != null && currentCurrency != null && currentPlanet != null && currentLanguage != null\" (ngSubmit)=\"onSubmit(amountToAddToCart.value)\">\n        <dl>\n          <dt>{{planetInfo_4.priceSquareKm}}</dt>\n          <dd class=\"price\">{{currentPlanet.priceSquareKm | currency : currentCurrency.code : 'symbol' : '1.2-2' : currentLanguage.langCode}}</dd>\n          <dt>{{planetInfo_4.availableSizeSquareKm}}</dt>\n          <dd>{{maxAvailableAmount}} / {{currentPlanet.totalSize}} km²</dd>\n          <dt>{{planetInfo_4.amount}}</dt>\n          <dd [class.hidden]=\"maxAvailableAmount <= 0\"><input [(ngModel)]=\"currentAmountToAddToCart\" [ngModelOptions]=\"{standalone: true}\" class=\"number\" #amountToAddToCart placeholder=\"0\" numbersOnlyDirective/> km²</dd>\n          <dd *ngIf=\"maxAvailableAmount <= 0\" class=\"sold_out\">{{planetInfo_4.soldOut}}</dd>\n        </dl>\n        <app-button *ngIf=\"maxAvailableAmount > 0\" type=\"submit\" class=\"full_width\" [buttonText]=\"planetInfo_4.button\"></app-button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product/product.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n/* Author: mk303, jm114 */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: none; }\nhtml, body {\n  width: 100%;\n  height: 100%;\n  background: #0d0d0d; }\nmain {\n  position: relative;\n  z-index: 300;\n  min-height: calc(100vh - 60px); }\ninput {\n  -webkit-appearance: none;\n  outline: none;\n  border: none;\n  background: transparent;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  text-align: center; }\nem {\n  font-style: normal; }\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303 */\n/* Author: mk303, jm114 */\n/* Author: mk303, jm114 */\n@font-face {\n  font-family: 'Exo Bold';\n  src: url('Exo-Bold.ttf'); }\n@font-face {\n  font-family: 'Exo Light';\n  src: url('Exo-Light.ttf'); }\n@font-face {\n  font-family: 'Roboto Bold';\n  src: url('Roboto-Bold.ttf'); }\n@font-face {\n  font-family: 'Roboto Light';\n  src: url('Roboto-Light.ttf'); }\nh1 {\n  font-family: 'Exo Bold';\n  font-size: 32px;\n  line-height: 44px;\n  color: #C8C8C8;\n  letter-spacing: 16px;\n  margin-right: -16px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 25px; }\n@media screen and (max-width: 600px) {\n    h1 {\n      font-size: 24px;\n      line-height: 33px;\n      letter-spacing: 12px; } }\nh2 {\n  font-family: 'Exo Bold';\n  font-size: 20px;\n  color: #C8C8C8;\n  letter-spacing: 10px;\n  margin-right: -10px;\n  text-align: center;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin-bottom: 25px; }\np {\n  font-family: 'Roboto Light';\n  font-size: 16px;\n  color: #7E7E7E;\n  line-height: 26px; }\na {\n  text-decoration: none; }\nli {\n  list-style: none; }\n.title {\n  font-family: 'Exo Bold';\n  font-size: 50px;\n  line-height: 50px;\n  letter-spacing: 16px;\n  color: #fff;\n  opacity: 0.75;\n  display: inline-block;\n  text-transform: uppercase; }\n/* Author: mk303, jm114 */\ninput.number {\n  background: transparent;\n  width: auto;\n  display: inline-block;\n  padding: 10px;\n  border-bottom: 1px solid #7E7E7E;\n  color: #fff;\n  font-family: \"Exo Bold\";\n  font-size: 20px;\n  line-height: 20px;\n  position: relative;\n  text-align: right; }\ninput.number::-webkit-inner-spin-button,\ninput.number::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\ninput.number:before {\n  content: 'km';\n  display: inline-block; }\n/* Author: mk303, jm114 */\n/* Author: mk303 */\n#product_detail {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 60px);\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid-template-columns: 7fr 5fr; }\n.product_description {\n  width: 100%;\n  height: auto;\n  align-self: center;\n  padding-left: 110px;\n  padding-right: 100px;\n  text-shadow: 0 0 10px #000;\n  margin-top: 25%; }\n.product_description p {\n    color: #fff;\n    font-family: \"Roboto Bold\";\n    max-width: 500px; }\n.form {\n  width: 100%;\n  height: 100%;\n  padding: 0 50px;\n  background: rgba(0, 0, 0, 0.65);\n  display: grid; }\n.form div {\n    align-self: center; }\n.form div h2 {\n      text-align: left; }\n.form div dl {\n      width: 100%;\n      display: grid;\n      grid-template-columns: auto -webkit-max-content;\n      grid-template-columns: auto max-content;\n      grid-column-gap: 80px;\n      grid-row-gap: 10px; }\n.form div dl > * {\n        display: inline-block;\n        font-family: 'Roboto Light';\n        font-size: 16px;\n        color: #7E7E7E;\n        line-height: 26px;\n        max-width: -webkit-max-content;\n        max-width: -moz-max-content;\n        max-width: max-content; }\n.form div dl dd {\n        font-family: 'Exo Bold';\n        text-align: right;\n        color: #fff;\n        justify-self: end; }\n.form div dl dd.price {\n        font-size: 30px;\n        line-height: 30px; }\n.form div dl dd.sold_out {\n        color: #FF004E;\n        text-transform: uppercase;\n        font-size: 12px;\n        line-height: 30px;\n        letter-spacing: 3px; }\n.form div dl dd.hidden {\n        display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4aW1pbGlhbmthaXNlci9Eb2N1bWVudHMvSGRNL0RvY3VtZW50cy9NSTctNC9TcGV6aWVsbGUgVGhlbWVuIGZ1zIhyIFdlYi1BbndlbmR1bmdlbiAoMTEzNDIwYSkvc3BhY2UtZXN0YXRlL3dlYnNob3AvZnJvbnRlbmQvY2xpZW50L3NyYy9hc3NldHMvc3R5bGVzL19nbG9iYWwuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RleHQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL21heGltaWxpYW5rYWlzZXIvRG9jdW1lbnRzL0hkTS9Eb2N1bWVudHMvTUk3LTQvU3BlemllbGxlIFRoZW1lbiBmdcyIciBXZWItQW53ZW5kdW5nZW4gKDExMzQyMGEpL3NwYWNlLWVzdGF0ZS93ZWJzaG9wL2Zyb250ZW5kL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlcy9faW5wdXQuc2NzcyIsIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZXMvX3RyYW5zaXRpb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUNBQSx5QkFBQTtBQUlBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYSxFQUFBO0FBR2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw4QkFBMkMsRUFBQTtBQUc3QztFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQixFQUFBO0FDbkNwQix5QkFBQTtBQ0FBLHlCQUFBO0FER0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQ3hCMkI7RUR5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQ3pDMkI7RUQwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNDdERrQjtFRHVEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdDckVxQjtFRHNFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBRTVFM0Isa0JBQUE7QUZBQSx5QkFBQTtBQ0FBLHlCQUFBO0FER0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQTBDLEVBQUE7QUFHNUM7RUFDRSx3QkFBd0I7RUFDeEIseUJBQTJDLEVBQUE7QUFHN0M7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTZDLEVBQUE7QUFHL0M7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQThDLEVBQUE7QUFHaEQ7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQ3hCMkI7RUR5QjNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUVuQjtJQVhGO01BWUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQSxFQUV2QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQ3pDMkI7RUQwQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGNDdERrQjtFRHVEbEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdDckVxQjtFRHNFckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBQzVFM0IseUJBQUE7QUNJQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQ0RQa0I7RUNRbEIsV0ROcUI7RUNPckIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0FBR25COztFQUVFLHdCQUF3QjtFQUN4QixTQUFTLEVBQUE7QUFHWDtFQUNFLGFBQWE7RUFDYixxQkFBcUIsRUFBQTtBRDFCdkIseUJBQUE7QUVBQSxrQkFBQTtBTE9BO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwwQkFBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFFM0IsYUFBYTtFQUNiLDhCQUE4QixFQUFBO0FBR2hDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsZUFBZSxFQUFBO0FBUGpCO0lBVUksV0d6Qm1CO0lIMEJuQiwwQkFBMEI7SUFDMUIsZ0JBQWdCLEVBQUE7QUFJcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZiwrQkFBNEI7RUFDNUIsYUFBYSxFQUFBO0FBTGY7SUFRSSxrQkFBa0IsRUFBQTtBQVJ0QjtNQVdNLGdCQUFnQixFQUFBO0FBWHRCO01BZU0sV0FBVztNQUNYLGFBQWE7TUFDYiwrQ0FBdUM7TUFBdkMsdUNBQXVDO01BQ3ZDLHFCQUFxQjtNQUNyQixrQkFBa0IsRUFBQTtBQW5CeEI7UUFzQlEscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsY0cxRFk7UUgyRFosaUJBQWlCO1FBQ2pCLDhCQUFzQjtRQUF0QiwyQkFBc0I7UUFBdEIsc0JBQXNCLEVBQUE7QUEzQjlCO1FBK0JRLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsV0doRWU7UUhpRWYsaUJBQWlCLEVBQUE7QUFsQ3pCO1FBc0NRLGVBQWU7UUFDZixpQkFBaUIsRUFBQTtBQXZDekI7UUEyQ1EsY0d0RWU7UUh1RWYseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CLEVBQUE7QUEvQzNCO1FBbURRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEF1dGhvcjogbWszMDMgKi9cbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RleHRcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvaW5wdXRcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RyYW5zaXRpb25zXCI7XG5cbiNwcm9kdWN0X2RldGFpbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGZvb3Rlci1oZWlnaHR9KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDVmcjtcbn1cblxuLnByb2R1Y3RfZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzAwMDtcbiAgbWFyZ2luLXRvcDogMjUlO1xuXG4gIHAge1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQm9sZFwiO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cbn1cblxuLmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42NSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgZGl2IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICBoMiB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIGRsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtYXgtY29udGVudDtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogODBweDtcbiAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcblxuICAgICAgJj4qIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgIH1cblxuICAgICAgZGQge1xuICAgICAgICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICB9XG5cbiAgICAgIGRkLnByaWNlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIH1cblxuICAgICAgZGQuc29sZF9vdXQge1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1yZWQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICB9XG5cbiAgICAgIGRkLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuXG4kZm9vdGVyLWhlaWdodDogNjBweDtcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwZDBkMGQ7XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDMwMDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JGZvb3Rlci1oZWlnaHR9KTtcbn1cblxuaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5lbSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiIsIi8qIEF1dGhvcjogbWszMDMsIGptMTE0ICovXG5AaW1wb3J0IFwiY29sb3JzXCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL0V4by1Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gTGlnaHQnO1xuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvRXhvLUxpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQm9sZCc7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYnKTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogJ0V4byBCb2xkJztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLWhlYWRsaW5lO1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxMnB4O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6ICdFeG8gQm9sZCc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLWhlYWRsaW5lO1xuICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnRXhvIEJvbGQnO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yLXdoaXRlO1xuICBvcGFjaXR5OiAwLjc1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzLCBqbTExNCAqL1xuJHByaW1hcnktYmx1ZTogIzAwQjZGRjtcbiR0ZXh0LWNvbG9yOiAjN0U3RTdFO1xuJHRleHQtY29sb3ItaGVhZGxpbmU6ICNDOEM4Qzg7XG4kdGV4dC1jb2xvci13aGl0ZTogI2ZmZjtcbiRtZWRpdW0tZ3JleTogIzUwNEY0RjtcbiRzZWNvbmRhcnktZ3JlZW46ICMwMGNlODI7XG4kc2Vjb25kYXJ5LW9yYW5nZTogI0ZGQTUwMDtcbiRzZWNvbmRhcnktcmVkOiAjRkYwMDRFO1xuXG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG5AaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3RleHRcIjtcbkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvY29sb3JzXCI7XG5cbmlucHV0Lm51bWJlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHRleHQtY29sb3I7XG4gIGNvbG9yOiAkdGV4dC1jb2xvci13aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRXhvIEJvbGRcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQubnVtYmVyOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXQubnVtYmVyOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0Lm51bWJlcjpiZWZvcmUge1xuICBjb250ZW50OiAna20nO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iLCIvKiBBdXRob3I6IG1rMzAzICovXG4kdHJhbnNpdGlvbi1xdWljazogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuJHRyYW5zaXRpb24tbWVkaXVtOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiR0cmFuc2l0aW9uLXF1aWNrLWRlbGF5ZWQ6IGFsbCAwLjE1cyBlYXNlLWluLW91dCAwLjE1cztcblxuQG1peGluIGN1c3RvbS10cmFuc2l0aW9uKCR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzKXtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNmb3JtYXRpb24tcHJvcGVydGllcztcbiAgLW8tdHJhbnNpdGlvbjogJHRyYW5zZm9ybWF0aW9uLXByb3BlcnRpZXM7XG4gIHRyYW5zaXRpb246ICR0cmFuc2Zvcm1hdGlvbi1wcm9wZXJ0aWVzO1xufVxuXG5AbWl4aW4gZGVsYXllZC10cmFuc2l0aW9uLXRpbWVkKCRwcm9wZXJ0eSwgJHRpbWUsICRkZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkdGltZSBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICR0aW1lIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_planets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/planets.service */ "./src/app/services/planets.service.ts");
/* harmony import */ var _models_planet_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/planet_info */ "./src/app/models/planet_info.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/currency.service */ "./src/app/services/currency.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");

/* Author: mk303 */












var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, planetsService, contentService, planetInfoAdapter, formBuilder, http, currencyService, languageService, shoppingCartService, messageService, router) {
        this.route = route;
        this.planetsService = planetsService;
        this.contentService = contentService;
        this.planetInfoAdapter = planetInfoAdapter;
        this.formBuilder = formBuilder;
        this.http = http;
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.shoppingCartService = shoppingCartService;
        this.messageService = messageService;
        this.router = router;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initial currency - gotten from server
        this.currencyService.getCurrentCurrency()
            .subscribe(function (currency) {
            // highlight correct language
            _this.currentCurrency = currency;
        });
        // Initial language - gotten from server
        this.languageService.getCurrentLanguage()
            .subscribe(function (currency) {
            // highlight correct language
            _this.currentLanguage = currency;
        });
        this.getPlanet();
        this.contentService.getContentById(4)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (item) { return _this.planetInfoAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.planetInfo_4 = data; });
        this.shoppingCartService.shoppingCartItemsEmitter.subscribe(function () {
            // When shopping cart is updated we net to check if the current planet is amount the already added ShoppingCartItems.
            // When planet is loaded we need to check if this planet exists in the shopping cart.
            // If so we need to subtract the already added amount from the current available amount,
            // so that a user can't add more to his shopping cart than what is available.
            _this.setMaxAvailableAmount();
        });
        this.contentService.getStaticStrings().then(function (data) {
            _this.staticStrings = data;
        });
    };
    /**
     * Attempt to add a item with a desired amount to the shopping cart
     * Checks if amount to add to cart is between 1 and the maximum available amount.
     * If not shows user a message respectively.
     * If so calls shoppingCartService to process submit
     * @param amount to add to shopping cart
     */
    ProductComponent.prototype.onSubmit = function (amount) {
        // Check if user added ad least 1km but not more than what is left
        if (amount > this.maxAvailableAmount) {
            this.messageService.showInfoMessage(this.staticStrings.PRODUCT_AVAILABILITY_ERROR_1 + " " + this.maxAvailableAmount + " " + this.staticStrings.PRODUCT_AVAILABILITY_ERROR_2);
            this.currentAmountToAddToCart = this.maxAvailableAmount;
        }
        else if (amount == 0 || amount == null) {
            this.messageService.showInfoMessage(this.staticStrings.PRODUCT_MIN_AMOUNT_INFO);
            this.currentAmountToAddToCart = 1;
        }
        else {
            // Make post
            this.shoppingCartService.addItemToShoppingCart(this.currentPlanet.simpleName, amount);
        }
    };
    /**
     * Loads the current planet via planetsService.
     * If this fails, user is redirected to products page since we can not provide any relevant data without the planet.
     */
    ProductComponent.prototype.getPlanet = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.planetsService.getPlanet(id).subscribe(function (planet) {
            _this.currentPlanet = planet;
            console.log("Planet fetched: " + _this.currentPlanet.name);
            // When planet is loaded we need to check if this planet exists in the shopping cart.
            // If so we need to subtract the already added amount from the current available amount,
            // so that a user can't add more to his shopping cart than what is available.
            _this.setMaxAvailableAmount();
        }, function (err) {
            console.log("Planet could not be fetched:", err);
            // Since we can not display any relevant data without the planet data, we redirect user to products overview page.
            _this.router.navigate(['/products']);
        });
    };
    /**
     * Sets the maximum available amount that could be added to the shopping cart
     */
    ProductComponent.prototype.setMaxAvailableAmount = function () {
        console.log("Calc maxAvailableAmount of " + this.currentPlanet.simpleName);
        // First check if user already has the current planet in his shopping cart.
        // If so, get the amount and subtract is from what is available.
        var currentPlanetInShoppingCart = this.shoppingCartService.getShoppingCartItem(this.currentPlanet.simpleName);
        if (null != currentPlanetInShoppingCart) {
            console.log("Planet found in shopping cart.");
            this.amountAlreadyAddedToShoppingCart = currentPlanetInShoppingCart.sizeSquareKm;
        }
        else {
            this.amountAlreadyAddedToShoppingCart = 0;
            console.log("Planet not found in shopping cart.");
        }
        this.maxAvailableAmount = this.currentPlanet.totalSize - this.currentPlanet.soldSizeSquareKm - this.amountAlreadyAddedToShoppingCart;
        console.log("User has " + this.amountAlreadyAddedToShoppingCart + " km² of " + this.currentPlanet.simpleName + " in his cart.");
        console.log("Setting maxAvailableAmount of " + this.currentPlanet.simpleName + " to " + this.maxAvailableAmount + " km².");
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_planets_service__WEBPACK_IMPORTED_MODULE_3__["PlanetsService"],
            _services_content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"],
            _models_planet_info__WEBPACK_IMPORTED_MODULE_4__["PlanetInfoAdapter"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            _services_currency_service__WEBPACK_IMPORTED_MODULE_9__["CurrencyService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/products-overview/products-overview.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/products-overview/products-overview.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<main>\n  <app-h1-text [data]=\"headlineText_3\"></app-h1-text>\n  <app-teaser-bg-image [data]=\"image_16\"></app-teaser-bg-image>\n  <app-product-list [planets]=\"planets\"></app-product-list>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/products-overview/products-overview.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/products-overview/products-overview.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy1vdmVydmlldy9wcm9kdWN0cy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzLW92ZXJ2aWV3L3Byb2R1Y3RzLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXV0aG9yOiBtazMwMyAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/pages/products-overview/products-overview.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/products-overview/products-overview.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsOverviewComponent", function() { return ProductsOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_planets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/planets.service */ "./src/app/services/planets.service.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var _models_headline_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/headline-text */ "./src/app/models/headline-text.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/image */ "./src/app/models/image.ts");

/* Author: mk303, jm114 */






var ProductsOverviewComponent = /** @class */ (function () {
    function ProductsOverviewComponent(planetsService, contentService, headlineTextAdapter, imageAdapter) {
        this.planetsService = planetsService;
        this.contentService = contentService;
        this.headlineTextAdapter = headlineTextAdapter;
        this.imageAdapter = imageAdapter;
    }
    ProductsOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.planetsService.getPlanets().subscribe(function (planets) {
            _this.planets = planets;
        });
        this.contentService.getContentById(3)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return _this.headlineTextAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.headlineText_3 = data; });
        this.contentService.getContentById(16)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return _this.imageAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.image_16 = data; });
    };
    ProductsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planets-list',
            template: __webpack_require__(/*! ./products-overview.component.html */ "./src/app/pages/products-overview/products-overview.component.html"),
            styles: [__webpack_require__(/*! ./products-overview.component.scss */ "./src/app/pages/products-overview/products-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_planets_service__WEBPACK_IMPORTED_MODULE_2__["PlanetsService"],
            _services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"],
            _models_headline_text__WEBPACK_IMPORTED_MODULE_4__["HeadlineTextAdapter"],
            _models_image__WEBPACK_IMPORTED_MODULE_6__["ImageAdapter"]])
    ], ProductsOverviewComponent);
    return ProductsOverviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Author: mk303 -->\n<main>\n  <app-h1-text [data]=\"headlineText_5\"></app-h1-text>\n  <app-teaser-bg-image [data]=\"image_8\"></app-teaser-bg-image>\n  <app-order-overview *ngIf=\"shoppingCartSize >= 1\" [data]=\"cartItemList_6\"></app-order-overview>\n  <app-no-items-added-to-order *ngIf=\"shoppingCartSize <= 0\" [data]=\"headlineText_14\"></app-no-items-added-to-order>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Author: mk303 */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhpbWlsaWFua2Fpc2VyL0RvY3VtZW50cy9IZE0vRG9jdW1lbnRzL01JNy00L1NwZXppZWxsZSBUaGVtZW4gZnXMiHIgV2ViLUFud2VuZHVuZ2VuICgxMTM0MjBhKS9zcGFjZS1lc3RhdGUvd2Vic2hvcC9mcm9udGVuZC9jbGllbnQvc3JjL2FwcC9wYWdlcy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdXRob3I6IG1rMzAzICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/shopping-cart/shopping-cart.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/shopping-cart/shopping-cart.component.ts ***!
  \****************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var _models_headline_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/headline-text */ "./src/app/models/headline-text.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_cart_item_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/cart-item-list */ "./src/app/models/cart-item-list.ts");
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/image */ "./src/app/models/image.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");

/* Author: mk303 */







var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(contentService, headlineTextAdapter, cartItemListAdapter, imageAdapter, shoppingCartService) {
        this.contentService = contentService;
        this.headlineTextAdapter = headlineTextAdapter;
        this.cartItemListAdapter = cartItemListAdapter;
        this.imageAdapter = imageAdapter;
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.getContentById(5)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.headlineTextAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.headlineText_5 = data; });
        this.contentService.getContentById(6)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.cartItemListAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.cartItemList_6 = data; });
        this.contentService.getContentById(8)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.imageAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.image_8 = data; });
        this.contentService.getContentById(14)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.headlineTextAdapter.adapt(item); }))
            .subscribe(function (data) { return _this.headlineText_14 = data; });
        this.shoppingCartService.currentCartItemSizeEmitter.subscribe(function (data) {
            console.log("Received emitted shoppingCartSize: " + data);
            _this.shoppingCartSize = data;
        });
        this.shoppingCartSize = this.shoppingCartService.getCurrentShoppingCartSize();
    };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/pages/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/pages/shopping-cart/shopping-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"],
            _models_headline_text__WEBPACK_IMPORTED_MODULE_3__["HeadlineTextAdapter"],
            _models_cart_item_list__WEBPACK_IMPORTED_MODULE_5__["CartItemListAdapter"],
            _models_image__WEBPACK_IMPORTED_MODULE_6__["ImageAdapter"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/services/content.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_static_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/static-strings */ "./src/app/models/static-strings.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* Author: mk303 */




var ContentService = /** @class */ (function () {
    function ContentService(http, staticStringsAdapter) {
        this.http = http;
        this.staticStringsAdapter = staticStringsAdapter;
        this.baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/content';
    }
    ContentService_1 = ContentService;
    /**
     * Get content data by id
     * @return Observable object of any type
     */
    ContentService.prototype.getContentById = function (id) {
        var url = this.baseUrl + "/" + id;
        var res = this.http.get(url);
        console.log('Call to: ' + (this.baseUrl + "/") + id + "\n" + "Result was: " + JSON.stringify(res));
        return res;
    };
    /**
     * Returns the static strings field. If is is not initialises yet, a get call is made to get the data.
     * To make sure nothing is returned before data is available, the get call is wrapped into a Promise which is returned.
     * @return Promise of the StaticStrings object
     */
    ContentService.prototype.getStaticStrings = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (ContentService_1.staticStrings == null) {
                console.log("ContentService.staticStrings was null");
                _this.getContentById(15)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.staticStringsAdapter.adapt(item); })).subscribe(function (data) {
                    ContentService_1.staticStrings = data;
                    console.log("Init ContentService.staticStrings:", data);
                    resolve(ContentService_1.staticStrings);
                });
            }
            else {
                resolve(ContentService_1.staticStrings);
            }
        });
    };
    var ContentService_1;
    ContentService.staticStrings = null;
    ContentService = ContentService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _models_static_strings__WEBPACK_IMPORTED_MODULE_3__["StaticStringsAdapter"]])
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "./src/app/services/currency.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/currency.service.ts ***!
  \**********************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/currency */ "./src/app/models/currency.ts");

/* Author: jm114, mk303 */




var CurrencyService = /** @class */ (function () {
    function CurrencyService(http, currencyAdapter) {
        this.http = http;
        this.currencyAdapter = currencyAdapter;
        this.baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/currency';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    /**
     * Get all currencies from db
     */
    CurrencyService.prototype.getCurrencies = function () {
        var _this = this;
        var url = this.baseUrl + "/";
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.map(function (item) { return _this.currencyAdapter.adapt(item); }); }));
    };
    /**
     * Get current languages from db
     */
    CurrencyService.prototype.getCurrentCurrency = function () {
        var _this = this;
        var url = this.baseUrl + "/currentCurrency";
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) { return _this.currencyAdapter.adapt(item); }));
    };
    /**
     * Switch currencie
     */
    CurrencyService.prototype.switchCurrency = function (id) {
        var url = this.baseUrl + "/";
        return this.http.post(url, { code: id }, this.httpOptions);
    };
    CurrencyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _models_currency__WEBPACK_IMPORTED_MODULE_4__["CurrencyAdapter"]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/language */ "./src/app/models/language.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* Author: mk303 */




var LanguageService = /** @class */ (function () {
    function LanguageService(http, languageAdapter) {
        this.http = http;
        this.languageAdapter = languageAdapter;
        this.baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/language';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    /**
     * Get all languages provided from db
     * @return Observable array of Languages
     */
    LanguageService.prototype.getLanguages = function () {
        var _this = this;
        var url = this.baseUrl + "/";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.map(function (item) { return _this.languageAdapter.adapt(item); }); }));
    };
    /**
     * Init call to server to initialise languages and to get a initial language.
     * * @return Observable initial Language
     */
    LanguageService.prototype.initLanguage = function () {
        var _this = this;
        var url = this.baseUrl + "/init";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.languageAdapter.adapt(item); }));
    };
    /**
     * Get current languages from db
     * @return Observable current Language
     */
    LanguageService.prototype.getCurrentLanguage = function () {
        var _this = this;
        var url = this.baseUrl + "/currentLanguage";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.languageAdapter.adapt(item); }));
    };
    /**
     * Switch language depending on provided language code
     * @param language_code of desired language
     * @return Observable object of any type
     */
    LanguageService.prototype.switchLanguage = function (language_code) {
        var url = this.baseUrl + "/";
        return this.http.post(url, { 'langCode': language_code }, this.httpOptions);
    };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _models_language__WEBPACK_IMPORTED_MODULE_2__["LanguageAdapter"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/services/login-toggle.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/login-toggle.service.ts ***!
  \**************************************************/
/*! exports provided: LoginToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginToggleService", function() { return LoginToggleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* Author: mk303 */

var LoginToggleService = /** @class */ (function () {
    function LoginToggleService() {
        this.loginPanelOpened = false;
        this.logoutPanelOpened = false;
        this.toggleLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * Toggle the login window status and inform other components about it
     */
    LoginToggleService.prototype.toggleLoginPanel = function () {
        console.log("Toggle login.");
        this.loginPanelOpened = !this.loginPanelOpened;
        this.toggleLogin.emit(this.loginPanelOpened);
    };
    /**
     * Toggle the logout window status and inform other components about it
     */
    LoginToggleService.prototype.toggleLogoutPanel = function () {
        console.log("Toggle logout.");
        this.logoutPanelOpened = !this.logoutPanelOpened;
        this.toggleLogout.emit(this.logoutPanelOpened);
    };
    /**
     * Close the login window status and inform other components about it
     */
    LoginToggleService.prototype.closeLogin = function () {
        if (this.loginPanelOpened) {
            console.log("Close login.");
            this.loginPanelOpened = false;
            this.toggleLogin.emit(this.loginPanelOpened);
        }
    };
    /**
     * Close the login window status and inform other components about it
     */
    LoginToggleService.prototype.closeLogout = function () {
        if (this.logoutPanelOpened) {
            console.log("Close logout.");
            this.logoutPanelOpened = false;
            this.toggleLogout.emit(this.logoutPanelOpened);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginToggleService.prototype, "toggleLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginToggleService.prototype, "toggleLogout", void 0);
    LoginToggleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginToggleService);
    return LoginToggleService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

/* Author: jm114, mk303 */


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/user';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    /**
     * Post call to the server trying to authenticate the user by username and password
     * @param user Username
     * @param pass Password
     * @return Observable object of any type
     */
    LoginService.prototype.login = function (user, pass) {
        var url = this.baseUrl + "/";
        return this.http.post(url, { "email": user, "password": pass }, this.httpOptions);
    };
    /**
     * Get call to the server requesting if current user is logged in
     * @return Observable string - true if is logged in - false if not
     */
    LoginService.prototype.isLoggedIn = function () {
        var url = this.baseUrl + "/loggedin";
        return this.http.get(url, this.httpOptions);
    };
    /**
     * Post call to the server to log out the current user
     * @return Observable object  of any type
     */
    LoginService.prototype.logout = function () {
        var url = this.baseUrl + "/logout";
        return this.http.post(url, this.httpOptions);
    };
    /**
     * Get call to loads the name of the current user
     * @return Observable object of any type
     */
    LoginService.prototype.getUserName = function () {
        var url = this.baseUrl + "/name";
        return this.http.get(url, this.httpOptions);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_messageLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/messageLevel */ "./src/app/helpers/messageLevel.ts");

/* Author: mk303 */


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageLevel = _helpers_messageLevel__WEBPACK_IMPORTED_MODULE_2__["MessageLevel"].Info;
    }
    /**
     * Calls showMessage to show the provided string as message.
     * Sets the current message level to Success.
     * @param message to show
     */
    MessageService.prototype.showSuccessMessage = function (message) {
        // Set message level to success and show message
        this.messageLevel = _helpers_messageLevel__WEBPACK_IMPORTED_MODULE_2__["MessageLevel"].Success;
        this.showMessage(message);
    };
    /**
     * Calls showMessage to show the provided string as message.
     * Sets the current message level to Info.
     * @param message to show
     */
    MessageService.prototype.showInfoMessage = function (message) {
        // Set message level to info and show message
        this.messageLevel = _helpers_messageLevel__WEBPACK_IMPORTED_MODULE_2__["MessageLevel"].Info;
        this.showMessage(message);
    };
    /**
     * Calls showMessage to show the provided string as message.
     * Sets the current message level to Error.
     * @param message to show
     */
    MessageService.prototype.showErrorMessage = function (message) {
        // Set message level to error and show message
        this.messageLevel = _helpers_messageLevel__WEBPACK_IMPORTED_MODULE_2__["MessageLevel"].Error;
        this.showMessage(message);
    };
    /**
     * Sets the provided message as the current message and trigger the animation to show the message.
     * @param message to show
     */
    MessageService.prototype.showMessage = function (message) {
        var _this = this;
        console.log('Show message: ' + message);
        // Set message
        this.message = message;
        // Trigger animation and show message
        this.show = true;
        // Trigger animation and hide message after 5s
        setTimeout(function () {
            _this.show = false;
            console.log('Hide message');
        }, 5000);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_order_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/order-item */ "./src/app/models/order-item.ts");

/* Author: jm114, mk303 */




var OrderService = /** @class */ (function () {
    function OrderService(http, orderItemAdapter) {
        this.http = http;
        this.orderItemAdapter = orderItemAdapter;
        this.baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/order';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    /**
     * Submit the current shopping cart
     * @return Observable object of any type
     */
    OrderService.prototype.submitOrder = function () {
        // Log post attempt and what should be added to the cart
        console.log('POST ATTEMPT: Trying to submit the current order.');
        // Post call to server
        return this.http.post(this.baseUrl, this.httpOptions);
    };
    /**
     *  Get Array with all orders from Database.
     *  Map the Orders-Array in the service and
     *  @return adapted order Array with Item Array inside.
     */
    OrderService.prototype.getOrderOverview = function () {
        var _this = this;
        var url = "" + this.baseUrl;
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.map(function (item) { return _this.orderItemAdapter.adapt(item); }); }));
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _models_order_item__WEBPACK_IMPORTED_MODULE_4__["OrderItemAdapter"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/page.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/page.service.ts ***!
  \******************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/page */ "./src/app/models/page.ts");





var PageService = /** @class */ (function () {
    function PageService(http, pageAdapter) {
        this.http = http;
        this.pageAdapter = pageAdapter;
        this.baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/page';
    }
    /**
     * Returns a list of Pages, which then can be displayed in navigation
     * @return Observable array of Pages
     */
    PageService.prototype.getPageList = function () {
        var _this = this;
        return this.http.get(this.baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.map(function (item) { return _this.pageAdapter.adapt(item); }); }));
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _models_page__WEBPACK_IMPORTED_MODULE_4__["PageAdapter"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/planets.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/planets.service.ts ***!
  \*********************************************/
/*! exports provided: PlanetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsService", function() { return PlanetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_planet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/planet */ "./src/app/models/planet.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* Author: mk303 */




var PlanetsService = /** @class */ (function () {
    function PlanetsService(http, planetAdapter) {
        this.http = http;
        this.planetAdapter = planetAdapter;
        this.baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/planet';
    }
    /**
     * Get all available planets from db
     * @return Observable array of Planets
     */
    PlanetsService.prototype.getPlanets = function () {
        var url = this.baseUrl + "/";
        return this.getPlanetList(url);
    };
    /**
     * Get all planets which are promoted currently - server side defined subset of all available planets.
     * @return Observable array of Planets
     */
    PlanetsService.prototype.getPromoPlanets = function () {
        var url = this.baseUrl + "/promoplanet";
        return this.getPlanetList(url);
    };
    /**
     * Load a specific planet from DB by its id
     * @param id Planets simple Name e.g. 'mars'
     * @return Observable Planet
     */
    PlanetsService.prototype.getPlanet = function (id) {
        var _this = this;
        var url = this.baseUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this.planetAdapter.adapt(item); }));
    };
    /**
     * Returns a list of Planets, depending on the input url
     * @param target ULR of the call
     * @return Observable array of Planets
     */
    PlanetsService.prototype.getPlanetList = function (url) {
        var _this = this;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.map(function (item) { return _this.planetAdapter.adapt(item); }); }));
    };
    PlanetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _models_planet__WEBPACK_IMPORTED_MODULE_3__["PlanetAdapter"]])
    ], PlanetsService);
    return PlanetsService;
}());



/***/ }),

/***/ "./src/app/services/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_shopping_cart_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/shopping-cart-item */ "./src/app/models/shopping-cart-item.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_planet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/planet */ "./src/app/models/planet.ts");
/* harmony import */ var _planets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planets.service */ "./src/app/services/planets.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content.service */ "./src/app/services/content.service.ts");

/* Author: mk303 */









var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(http, planetsService, planetAdapter, messageService, contentService) {
        var _this = this;
        this.http = http;
        this.planetsService = planetsService;
        this.planetAdapter = planetAdapter;
        this.messageService = messageService;
        this.contentService = contentService;
        this.baseUrl = 'https://webspec65.mi.hdm-stuttgart.de/api/cart';
        this.currentCartItemSize = 0;
        this.shoppingCartTotalPrice = 0;
        this.shoppingCartItemsEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.currentCartItemSizeEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.shoppingCartTotalPriceEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.contentService.getStaticStrings().then(function (data) {
            _this.staticStrings = data;
        });
    }
    ShoppingCartService_1 = ShoppingCartService;
    /**
     * Get all shopping cart items of current cart
     * @return current shopping cart as array of ShoppingCartItem
     */
    ShoppingCartService.prototype.getCurrentShoppingCartItems = function () {
        return this.shoppingCartItems;
    };
    /**
     * Get current shopping cart size
     * @return number of shopping cart items in the current shopping cart
     */
    ShoppingCartService.prototype.getCurrentShoppingCartSize = function () {
        return this.currentCartItemSize;
    };
    /**
     * Get current shopping cart total price
     * @return total price of all shopping cart items in the current shopping cart
     */
    ShoppingCartService.prototype.getShoppingCartTotalPrice = function () {
        return this.shoppingCartTotalPrice;
    };
    /**
     * Return a ShoppingCartItem if it exists in the current shopping cart - if not return null
     * @param id of desired ShoppingCartItem
     * @return ShoppingCartItem
     */
    ShoppingCartService.prototype.getShoppingCartItem = function (id) {
        if (this.shoppingCartItems != null) {
            for (var i = 0; i < this.shoppingCartItems.length; i++) {
                if (this.shoppingCartItems[i].simpleName == id) {
                    return this.shoppingCartItems[i];
                }
            }
        }
        else {
            return null;
        }
    };
    ///// CRUD ACTIONS /////
    /**
     * Add an item to the current shopping cart
     */
    ShoppingCartService.prototype.addItemToShoppingCart = function (simpleName, amount) {
        var _this = this;
        // Prepare payload
        var payload = {
            "simpleName": simpleName,
            "sizeSquareKm": amount
        };
        // Log post attempt and what should be added to the cart
        console.log('POST ATTEMPT: Adding: ' + amount + 'km² of `' + simpleName + '` to cart.\nPayload is:');
        console.log(payload);
        // Post call to server
        return this.http.post(this.baseUrl, payload, this.httpOptions).subscribe(
        // --- RESPONSE --- //
        function (res) {
            // Log response
            console.log('POST SUCCESSFUL: Added: ' + amount + 'km² of `' + simpleName + '` to cart.');
            console.log('Response was: ' + JSON.stringify(res));
        }, 
        // --- ERROR --- //
        function (err) {
            // Log error
            console.log('Error was: ' + JSON.stringify(err));
        }, 
        // --- COMPLETE --- //
        function () {
            // Tell the user adding the item was successful
            _this.messageService.showSuccessMessage(_this.staticStrings.PRODUCT_ADDED_SUCCESSFUL_1 + ' ' + amount + ' km² ' + simpleName + ' ' + _this.staticStrings.PRODUCT_ADDED_SUCCESSFUL_2);
            // Cart changed - reload cart
            _this.updateShoppingCart();
        });
    };
    /**
     * Update an item of the current shopping cart
     */
    ShoppingCartService.prototype.updateShoppingCartItem = function (simpleName, newAmount) {
        var _this = this;
        // Prepare payload
        var payload = {
            "simpleName": simpleName,
            "sizeSquareKm": newAmount
        };
        // Log post attempt and what should be added to the cart
        console.log('PATCH ATTEMPT: Updating: ' + simpleName + ' to `' + newAmount + '` km².\nPayload is:');
        console.log(payload);
        // Post call to server
        return this.http.patch(this.baseUrl, payload, this.httpOptions).subscribe(function (res) {
            if (res != null) {
                // Log successful patch attempt
                console.log('PATCH SUCCESSFUL: Updating: `' + simpleName + '` to `' + newAmount + '` km².\nResponse is:');
                console.log(res);
                _this.messageService.showSuccessMessage(_this.staticStrings.SHOPPING_CART_UPDATE_SUCCESSFUL);
            }
            else {
                // Since update failed we need to restore the original value
                //this.resetItemAmount();
                _this.messageService.showErrorMessage(_this.staticStrings.SHOPPING_CART_UPDATE_FAILED);
            }
        }, function (err) {
            console.log('Error: ' + err.error);
            console.log('Name: ' + err.name);
            console.log('Message: ' + err.message);
            console.log('Status: ' + err.status);
            _this.messageService.showErrorMessage(_this.staticStrings.ERROR_DEFAULT);
            // Since update failed we need to restore the original value
            //this.resetItemAmount();
        }, function () {
            // Cart changed - reload cart
            _this.updateShoppingCart();
        });
    };
    /**
     * Delete an item from the current shopping cart
     */
    ShoppingCartService.prototype.deleteShoppingCartItem = function (itemIdentifier) {
        var _this = this;
        var url = "" + this.baseUrl;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            body: { "simpleName": itemIdentifier },
        };
        // Log delete attempt and what should be delete
        console.log('DELETE ATTEMPT: Cart item `' + itemIdentifier + '` should be deleted');
        return this.http.delete(url, httpOptions).subscribe(function (res) {
            // Log successful deletion
            console.log('DELETE ATTEMPT: Cart item `' + itemIdentifier + '` is deleted');
            console.log(JSON.stringify(res));
        }, function (err) {
            console.log('Error: ' + err.error);
            console.log('Name: ' + err.name);
            console.log('Message: ' + err.message);
            console.log('Status: ' + err.status);
        }, function () {
            // Cart changed - reload cart
            _this.updateShoppingCart();
        });
    };
    ///// CRUD ACTIONS /////
    ///// UPDATE SHOPPING CART /////
    /**
     * Take all steps to update the shopping cart:
     *
     * 1) updateShoppingCartTotalPrice
     * 2) updateShoppingCartTotalPrice
     * 3) updateCurrentShoppingCartSize
     *
     */
    ShoppingCartService.prototype.updateShoppingCart = function () {
        var _this = this;
        console.log("Updating entire shopping cart.");
        console.log("### 1) updateShoppingCart #####################");
        this.getRawCartItems().then(function (rawCartItems) {
            // Go on when raw cart items are loaded
            console.log("Loaded rawCartItems:", rawCartItems);
            _this.getAllPlanets().then(function (planets) {
                // Go on when planets are loaded
                console.log("Loaded planets:", planets);
                _this.updateCart(rawCartItems, planets).then(function (newShoppingCart) {
                    // Go on when new shopping cart is set
                    console.log("Updated shopping card:", newShoppingCart);
                    _this.shoppingCartItems = newShoppingCart;
                    // Emit the updated cart
                    _this.shoppingCartItemsEmitter.next(_this.shoppingCartItems);
                    // Proceed update and set ShoppingCartTotalPrice and CurrentShoppingCartSize
                    _this.proceedUpdate();
                });
            });
        }, function (error) {
            console.log("Callback error:", error);
            console.log("Updating shopping cart was stopped");
            // Proceed update and set ShoppingCartTotalPrice and CurrentShoppingCartSize
            _this.proceedUpdate();
        }).catch(function (error) {
            console.log("Catch error:", error);
            // Proceed update and set ShoppingCartTotalPrice and CurrentShoppingCartSize
            _this.proceedUpdate();
        });
    };
    /**
     * Load raw cart items
     */
    ShoppingCartService.prototype.getRawCartItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log("Loading rawCartItems...");
                        var res = _this.http.get(_this.baseUrl);
                        res.subscribe(function (result) {
                            if (result) {
                                // Only proceed if response is not null
                                res.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data['cartItemList']; })).subscribe(function (data) {
                                    res = data;
                                    resolve(res);
                                });
                            }
                            else {
                                // Empty shopping cart.
                                _this.shoppingCartItems = null;
                                reject("Loading rawCartItems failed. Response was null.");
                            }
                        }, function (error) {
                            // Empty shopping cart.
                            _this.shoppingCartItems = null;
                            reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * Load all planets
     * TODO: Due to problems with asynchronous calls within a for-each loop we load all planets in one call. Replace this function with one that only loads the necessary planets.
     */
    ShoppingCartService.prototype.getAllPlanets = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log("Loading planets...");
                        var planets;
                        _this.planetsService.getPlanets().subscribe(function (data) {
                            planets = data;
                            resolve(planets);
                        });
                    })];
            });
        });
    };
    /**
     * For each rawCartItem take the corresponding planet, build a ShoppingCartItem and push it into a cart which is returned
     */
    ShoppingCartService.prototype.updateCart = function (rawCartItems, planets) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var newCart = [];
                        console.log("Building ShoppingCartItems...");
                        for (var i = 0; i < rawCartItems.length; i++) {
                            for (var j = 0; j < planets.length; j++) {
                                if (rawCartItems[i].simpleName == planets[j].simpleName) {
                                    newCart.push(ShoppingCartService_1.mergePlanetAndShoppingCartItem(planets[j], rawCartItems[i]));
                                }
                            }
                        }
                        resolve(newCart);
                    })];
            });
        });
    };
    /**
     * Proceed update of shopping cart
     */
    ShoppingCartService.prototype.proceedUpdate = function () {
        console.log("### 2) updateCurrentShoppingCartSize ##########");
        this.updateShoppingCartTotalPrice();
        console.log("### 3) updateShoppingCartTotalPrice ###########");
        this.updateCurrentShoppingCartSize();
    };
    /**
     * Update shopping cart total price
     */
    ShoppingCartService.prototype.updateShoppingCartTotalPrice = function () {
        var items = this.shoppingCartItems;
        // Reset total price to 0
        var newValue = 0;
        if (null != items) {
            // Calc new total price
            for (var i = 0; i < this.shoppingCartItems.length; i++) {
                newValue += this.shoppingCartItems[i].totalPrice;
            }
            // Set new value
            this.shoppingCartTotalPrice = newValue;
            // Inform subscribers
            console.log("Emit shoppingCartTotalPrice: " + this.shoppingCartTotalPrice);
        }
        else {
            console.log("shoppingCartTotalPrice was not updated since 'shoppingCartItems.length' was null or 0. Therefore shoppingCartTotalPrice was set to 0.");
            // Set new value
            this.shoppingCartTotalPrice = 0;
        }
        this.shoppingCartTotalPriceEmitter.next(this.shoppingCartTotalPrice);
    };
    /**
     * Update current shopping cart size
     */
    ShoppingCartService.prototype.updateCurrentShoppingCartSize = function () {
        if (null != this.shoppingCartItems) {
            if (this.shoppingCartItems.length >= 0) {
                this.currentCartItemSize = this.shoppingCartItems.length;
            }
            else {
                this.currentCartItemSize = 0;
            }
            console.log("Emit currentCartItemSize: " + this.currentCartItemSize);
        }
        else {
            console.log("currentCartItemSize wasn't updated since shoppingCartItems was null. Therefore shoppingCartTotalPrice was set to 0.");
            this.currentCartItemSize = 0;
        }
        this.currentCartItemSizeEmitter.next(this.currentCartItemSize);
    };
    ///// UPDATE SHOPPING CART /////
    ///// HELPERS /////
    /**
     * Initialize shopping cart by updating/loading shopping cart for the first time
     */
    ShoppingCartService.prototype.initShoppingCart = function () {
        console.log("Init shopping cart");
        this.updateShoppingCart();
    };
    /**
     * Take a rawCartItem and a planet to build and return a ShoppingCartItem
     */
    ShoppingCartService.mergePlanetAndShoppingCartItem = function (planet, rawCartItem) {
        var item = new _models_shopping_cart_item__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartItem"](rawCartItem.simpleName, planet.name, planet.priceSquareKm, planet.image, rawCartItem.sizeSquareKm, planet.maxAvailableSquareKm, (planet.priceSquareKm * rawCartItem.sizeSquareKm));
        console.log("Build ShoppingCartItem for " + item.name + ":", item);
        return item;
    };
    var ShoppingCartService_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShoppingCartService.prototype, "shoppingCartItemsEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShoppingCartService.prototype, "currentCartItemSizeEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShoppingCartService.prototype, "shoppingCartTotalPriceEmitter", void 0);
    ShoppingCartService = ShoppingCartService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _planets_service__WEBPACK_IMPORTED_MODULE_6__["PlanetsService"],
            _models_planet__WEBPACK_IMPORTED_MODULE_5__["PlanetAdapter"],
            _message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _content_service__WEBPACK_IMPORTED_MODULE_9__["ContentService"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* Author: mk303 */



// Enable production mode unless running locally
/*if (environment.production) {
  enableProdMode();
}*/
if (!/localhost/.test(document.location.host)) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maximiliankaiser/Documents/HdM/Documents/MI7-4/Spezielle Themen für Web-Anwendungen (113420a)/space-estate/webshop/frontend/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map