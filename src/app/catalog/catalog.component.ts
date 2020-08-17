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

  productsInDb: ProductInterface[] = [];
  products: ProductInterface[] = [];
  filter: string;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getProducts((data: ProductInterface) => Object.keys(data).map((key) => this.productsInDb.push(data[key])));
    this.products = this.productsInDb;
  }

  llenar() {
    console.log('llenando')
    this.products.forEach((produ) => {
      this.data.postProducts(produ);
    });
  }

  change(event) {       
    this.products = [];
    this.productsInDb.forEach((product) => {
      if(product.name.toUpperCase().startsWith(event.toUpperCase())) {
        this.products.push(product);
      }
    })
  }
}
