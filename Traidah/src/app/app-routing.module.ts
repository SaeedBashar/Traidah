import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminManageOrdersComponent } from './components/admin-manage-orders/admin-manage-orders.component';
import { AdminManageProductsComponent } from './components/admin-manage-products/admin-manage-products.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminrouteProtectService } from './services/routeProtect/adminroute-protect.service';
import { AuthGuardService } from './services/routeProtect/auth-guard.service';

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
    component: OrderHistoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "cart",
    component: ShoppingCartComponent
  },
  {
    path: "admin/manage-products",
    component: AdminManageProductsComponent,
    canActivate: [AuthGuardService, AdminrouteProtectService]
  },
  {
    path: "admin/add-product/:id",
    component: AdminAddProductComponent,
    canActivate: [AuthGuardService, AdminrouteProtectService]
  },
  {
    path: "admin/add-product",
    component: AdminAddProductComponent,
    canActivate: [AuthGuardService, AdminrouteProtectService]
  },
  {
    path: "admin/manage-orders",
    component: AdminManageOrdersComponent,
    canActivate: [AuthGuardService, AdminrouteProtectService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
