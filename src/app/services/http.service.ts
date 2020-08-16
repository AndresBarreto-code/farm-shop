import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://farm-store-3487f.firebaseio.com/Products.json');
  }

  postInfo(endLine: string, data: Object) {
    return this.http.post(`https://farm-store-3487f.firebaseio.com/${endLine}/.json`,JSON.stringify(data));
  }

  getUsers() {
    return this.http.get('https://farm-store-3487f.firebaseio.com/Users.json');
  } 
    
}
