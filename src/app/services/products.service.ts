import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url:string = "assets/data/products.json"
  //private url:string = "https://jsonplaceholder.typicode.com/users"
  constructor(private httpClient:HttpClient){}
  getProducts() {
     return this.httpClient.get(this.url) 
  }
}
