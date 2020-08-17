import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { SpaComponent } from './spa/spa.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'spa', component: SpaComponent, children: [
      { path: 'catalogo', component: CatalogComponent },
      { path: 'catalogo/:name', component: ViewProductComponent },
      { path: 'carrito', component: ShopComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
