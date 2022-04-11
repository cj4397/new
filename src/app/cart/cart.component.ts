import { Component, OnInit,  } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


import {   Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
trashcan=faTrashCan
item=this.cartService.items
  items = this.cartService.getItems();

  delitem(item:Product){
    this.items.splice(this.items.indexOf(item),1)
  }

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
  }

}
