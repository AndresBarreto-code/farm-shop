import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductInterface } from '../interfaces/product-interface'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: ProductInterface[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getProducts((data: ProductInterface) => Object.keys(data).map((key) => this.products.push(data[key])))
  }
}
