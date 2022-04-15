import { Component, OnInit } from '@angular/core';

import { faMobileScreen, faPencil, faThumbsUp, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
phone=faMobileScreen
pencil=faPencil
like=faThumbsUp
ask=faQuestion
facebook=faFacebook
twitter=faTwitter
github= faGithub

  constructor() { }

  ngOnInit(): void {
  }

}
