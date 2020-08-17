import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface'
import { ImageSizePipe } from '../pipes/image-size.pipe';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() settings: ProductInterface;
  qty: number;
  
  constructor(private data: DataService) { 
    this.qty = 1;
  }

  ngOnInit(): void {
  }
  agregar(event, producto) {
    this.data.addShop(producto, this.qty);
  }

}
