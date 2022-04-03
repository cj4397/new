import { Component, OnInit } from '@angular/core';
import {  products, Product,  } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pmodal',
  templateUrl: './pmodal.component.html',
  styleUrls: ['./pmodal.component.scss']
})
export class PmodalComponent implements OnInit {

  product: Product | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

}
