import { Component, OnInit } from '@angular/core';
import {  products, Product, main } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products=products
  main=main;
 
  
 
p='assets/img/phone.png'

addToCart(product: Product) {
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}
  
  constructor( private cartService: CartService) {
    
   }

  ngOnInit(): void {
  }

}
