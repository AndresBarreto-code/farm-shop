import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface'
import { ImageSizePipe } from '../pipes/image-size.pipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() settings: ProductInterface;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
