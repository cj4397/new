import { Component, OnInit } from '@angular/core';
import { faHome, faGauge, faTableList, faBoxesStacked, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
home=faHome
gauge=faGauge
table=faTableList
stack=faBoxesStacked
user=faUserCircle

  constructor() { }

  ngOnInit(): void {
  }

}
