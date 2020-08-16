import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  product: ProductInterface;

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) {
    this.data.getProducts((data: ProductInterface) => Object.keys(data)
      .map((key) => {
        this.product = data[key].name == this.activatedRoute.snapshot.params['name'] ? data[key] : this.product;
      })
    );
  }

  ngOnInit(): void {
    
  }

}
