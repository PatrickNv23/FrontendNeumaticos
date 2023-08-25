import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotfoundComponent } from './standalone/notfound/notfound.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule)
  },
  {
    path: "catalogue",
    loadChildren: () => import("./modules/catalogue/catalogue.module").then((m) => m.CatalogueModule),
    canActivate: [AuthGuard]
  },
  {
    path: "shoppingCart",
    loadChildren: () => import("./modules/shopping-cart/shopping-cart.module").then((m) => m.ShoppingCartModule)
  },
  {
    path: "payout",
    loadChildren: () => import("./modules/payout/payout.module").then((m) => m.PayoutModule)
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
