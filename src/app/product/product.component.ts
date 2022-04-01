import { Component, OnInit } from '@angular/core';
import {  products } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = products;
  
  p1w='assets/img/p1w.png'
  p2w='assets/img/p2w.png'
  p3w='assets/img/p3w.png'
  p1b='assets/img/p1b.png'
  p2b='assets/img/p2b.png'
  p3b='assets/img/p3b.png'
p='assets/img/phone.png'

  
  constructor() { }

  ngOnInit(): void {
  }

}
