import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminManageOrdersComponent } from './components/admin-manage-orders/admin-manage-orders.component';
import { AdminManageProductsComponent } from './components/admin-manage-products/admin-manage-products.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { GetDataService } from './services/admin/get-data.service';
import { LoggedUserService } from './services/logged-user.service';
import { AdminrouteProtectService } from './services/routeProtect/adminroute-protect.service';
import { AuthGuardService } from './services/routeProtect/auth-guard.service';
import { ProductsFilterComponent } from './components/products/products-filter/products-filter.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    AdminManageProductsComponent,
    AdminManageOrdersComponent,
    OrderHistoryComponent,
    ShoppingCartComponent,
    AdminAddProductComponent,
    ProductsFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [
    LoggedUserService, 
    AuthGuardService, 
    AdminrouteProtectService,
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
