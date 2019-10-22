/* Author: mk303 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ProductsOverviewComponent } from "./pages/products-overview/products-overview.component";
import { ShoppingCartComponent } from "./pages/shopping-cart/shopping-cart.component";
import { ImprintComponent } from "./pages/imprint/imprint.component";
import { ProductComponent } from "./pages/product/product.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { GreetingComponent } from "./pages/greeting/greeting.component";

const routes: Routes = [
  { path: '', redirectTo: '/greeting', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsOverviewComponent},
  { path: 'products', component: ProductsOverviewComponent},
  { path: 'product/:id', component: ProductComponent },
  { path: 'shopping_cart', component: ShoppingCartComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
