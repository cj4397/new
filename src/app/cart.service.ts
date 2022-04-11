import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];


  addToCart(product: Product) {
    this.items.push(product);
  }

  delitem(item:Product){
    this.items.splice(this.items.indexOf(item),1)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { }
}
