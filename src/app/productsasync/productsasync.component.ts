import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productsasync',
  templateUrl: './productsasync.component.html',
  styleUrls: ['./productsasync.component.css']
})
export class ProductsasyncComponent implements OnInit {

  products$:any | undefined;
  errMsg:any;
  constructor(private productsService:ProductsService) { }
  
  ngOnInit(): void { 
    this.products$ = this.productsService.getProducts()
  }
}
