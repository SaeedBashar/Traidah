import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminManageOrdersComponent } from './components/admin-manage-orders/admin-manage-orders.component';
import { AdminManageProductsComponent } from './components/admin-manage-products/admin-manage-products.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoggedUserService } from './services/logged-user.service';
import { AuthGuardService } from './services/routeProtect/auth-guard.service';
import { AdminrouteProtectService } from './services/routeProtect/adminroute-protect.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    AdminManageProductsComponent,
    AdminManageOrdersComponent,
    OrderHistoryComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    LoggedUserService, 
    AuthGuardService, 
    AdminrouteProtectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
