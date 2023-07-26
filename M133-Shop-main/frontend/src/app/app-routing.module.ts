import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import {CheckOutComponent} from "./check-out/check-out.component";

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: '', component: ProductsComponent },
  { path: 'checkout', component: CheckOutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
