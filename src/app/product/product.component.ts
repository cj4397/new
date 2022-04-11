import { Component, OnInit } from '@angular/core';
import {   Product, main } from '../product';
import { CartService } from '../cart.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  cart=faCartShopping
  main=main;
 
  product: Product | undefined;
  num=this.cartService.items.length
p='assets/img/phone.png'

count(){
   this.num++
}

addToCart(product: Product) {
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}

  
  constructor( private cartService: CartService) {
    
   }

  ngOnInit(): void {
  }

}
