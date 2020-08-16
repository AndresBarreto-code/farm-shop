import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductInterface } from '../interfaces/product-interface'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: ProductInterface[] = [{
    image: '../assets/aguacate.jpg',
    name: 'Aguacate',
    price: 0,
    stock: 0
  }];

  constructor() {}

  ngOnInit(): void {
  }

}
