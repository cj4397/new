import { Component, OnInit } from '@angular/core';


import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  

 

 constructor( private cartService: CartService) { }
 
  ngOnInit(): void {  }

  
}
