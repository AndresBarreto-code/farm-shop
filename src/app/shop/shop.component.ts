import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProductShopInterface } from '../interfaces/product-shop-interface';
import { ProductInterface } from '../interfaces/product-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productos: ProductShopInterface[] = [];
  total: number = 0;
  newProducts: ProductInterface[] = [];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.productos = this.data.getShop();
    this.productos.forEach(producto => {
      this.total += producto.product.price * producto.qty;
    })
  }
  pagar() {
    this.data.postShop();
    this.data.getProducts((data) => {
      Object.keys(data).map((key) => {
        this.productos.forEach(producto => {
          if (producto.product.name == data[key].name) {
            data[key].stock -= producto.qty;
          }
        });
      });
      this.data.putProducts(data, () => {        
        this.router.navigate(['/spa/catalogo']);
        this.productos = [];
      });
    });
        
  };
}
