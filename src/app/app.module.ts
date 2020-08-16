import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SpaComponent } from './spa/spa.component';
import { NavComponent } from './nav/nav.component';
import { ProductCardComponent } from './product-card/product-card.component';

import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { CatalogComponent } from './catalog/catalog.component';
import { ImageSizePipe } from './pipes/image-size.pipe';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    SpaComponent,
    NavComponent,
    ProductCardComponent,
    CatalogComponent,
    ImageSizePipe,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
