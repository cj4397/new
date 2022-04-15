import { Component, OnInit,HostListener, Inject } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

help=faQuestionCircle
angular=faAngular;
bootstrap=faBootstrap;
font=faFontAwesome;
warning=faTriangleExclamation;
windowScrolled!: boolean;
constructor(@Inject(DOCUMENT) private document: Document) {}
@HostListener("window:scroll", [])
onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
    } 
   else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 20) {
        this.windowScrolled = false;
    }
}

  ngOnInit(): void {
  }

}
