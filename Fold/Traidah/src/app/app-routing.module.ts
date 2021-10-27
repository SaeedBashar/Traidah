import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManageOrdersComponent } from './components/admin-manage-orders/admin-manage-orders.component';
import { AdminManageProductsComponent } from './components/admin-manage-products/admin-manage-products.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "order-history",
    component: OrderHistoryComponent
  },
  {
    path: "cart",
    component: ShoppingCartComponent
  },
  {
    path: "admin/manage-products",
    component: AdminManageProductsComponent
  },
  {
    path: "admin/manage-orders",
    component: AdminManageOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
