import { Injectable, EventEmitter } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserInterface } from '../interfaces/users-interface';
import { ProductInterface } from '../interfaces/product-interface';
import { ProductShopInterface } from '../interfaces/product-shop-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  shop: ProductShopInterface[] = [];
  private notificationMessage = new BehaviorSubject<number>(0);
  currentMessage = this.notificationMessage.asObservable();

  constructor(private httpService: HttpService) { 
  }

  validateLogin(email: string, password: string, callback) {
    this.httpService.getUsers().subscribe(
      (data: UserInterface[]) => {
        Object.keys(data).map((key) => {
          callback(data[key].email == email ? data[key].password == password ? "Ok" : "Password errado" : "Email errado" )
        });
      },
      (err) => console.log(err),
      () => { }
    )
  };
  getProducts(callback) {
    this.httpService.getProducts().subscribe(callback);
  };
  addShop(product: ProductInterface, qty: number) {
    let flag = false;
    this.shop.forEach(shopProduct => {
      if (shopProduct.product.name == product.name) {
        shopProduct.qty += qty;
        flag = true;
      }
    })
    if (!flag) {
      this.shop.push({ product: product, qty: qty });      
    }
    this.notificationMessage.next(this.shop.length);
  };
  getShop() {
    return this.shop;
  }
}
