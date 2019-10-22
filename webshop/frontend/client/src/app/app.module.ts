/* Author: mk303 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* pages */
import { HomeComponent } from './pages/home/home.component';
import { ProductsOverviewComponent } from './pages/products-overview/products-overview.component'
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { ProductComponent } from './pages/product/product.component';
import { OrdersComponent } from './pages/orders/orders.component';

/* components */
import { HeaderComponent } from './components/header/header.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeaserBgImageComponent } from './components/teaser-bg-image/teaser-bg-image.component';
import { H1TextComponent } from './components/h1-text/h1-text.component';
import { H2TextComponent } from './components/h2-text/h2-text.component';
import { LoginComponent } from './components/login/login.component';
import { DescriptionComponent } from './components/description/description.component';
import { LoginToggleComponent } from './components/login-toggle/login-toggle.component';
import { ButtonComponent } from './components/button/button.component';
import { OrderListItemComponent } from './components/order-list-item/order-list-item.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { CurrencySwitchComponent } from './components/currency-switch/currency-switch.component';
import { MessageComponent } from './components/message/message.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NoItemsAddedToOrderComponent } from './components/no-items-added-to-order/no-items-added-to-order.component';
import { ShoppingCartIconComponent } from './components/shopping-cart-icon/shopping-cart-icon.component';

/* services */
import { LoginToggleService } from './services/login-toggle.service';
import { PlanetsService } from './services/planets.service';
import { MessageService} from "./services/message.service";


/* helpers */
import { ParallaxDirective } from './helpers/parallax.directive';
import { NumbersOnlyDirective } from './helpers/numbers-only.directive';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GreetingComponent } from './pages/greeting/greeting.component';

@NgModule({
  declarations: [
    /* pages */
    AppComponent,
    HomeComponent,
    ProductsOverviewComponent,
    ProductComponent,
    ImprintComponent,
    /* components */
    HeaderComponent,
    TeaserComponent,
    FooterComponent,
    ShoppingCartComponent,
    TeaserBgImageComponent,
    H1TextComponent,
    H2TextComponent,
    LoginComponent,
    DescriptionComponent,
    LoginToggleComponent,
    ButtonComponent,
    OrderListItemComponent,
    OrderListComponent,
    ProductListComponent,
    ProductListItemComponent,
    LanguageSwitchComponent,
    CurrencySwitchComponent,
    MessageComponent,
    NumbersOnlyDirective,
    OrdersComponent,
    LogoutComponent,
    NoItemsAddedToOrderComponent,
    ShoppingCartIconComponent,
    ParallaxDirective,
    PageNotFoundComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCleaveDirectiveModule,
    BrowserAnimationsModule
  ],
  providers: [
    /* services */
    LoginToggleService,
    PlanetsService,
    MessageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
