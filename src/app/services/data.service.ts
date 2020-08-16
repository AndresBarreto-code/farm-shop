import { Injectable } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserInterface } from '../interfaces/users-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpService) { }

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
  }
}
