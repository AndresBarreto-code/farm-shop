import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProductShopInterface } from '../interfaces/product-shop-interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productos: ProductShopInterface[] = [];
  total: number = 0;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.productos = this.data.getShop();
    this.productos.forEach(producto => {
      this.total += producto.product.price * producto.qty;
    })
  }
  pagar() {
    this.data.postShop();
    this.productos = [];
    
  };
}
