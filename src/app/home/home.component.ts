import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
angular=faAngular;
bootstrap=faBootstrap;
font=faFontAwesome;
warning=faTriangleExclamation;
  constructor() { }

  ngOnInit(): void {
  }

}
