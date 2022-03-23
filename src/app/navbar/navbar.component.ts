import { Component,  } from '@angular/core';
import { faHomeUser} from '@fortawesome/free-solid-svg-icons';
import { faLink} from '@fortawesome/free-solid-svg-icons';
import { faBug} from '@fortawesome/free-solid-svg-icons';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faExclamation} from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import { faMessage} from '@fortawesome/free-regular-svg-icons';
import { faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeartBroken} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  like=faHeart;
dislike=faHeartBroken;
  news=faNewspaper;
  
  mes=faMessage;
d1=faExclamation;
d2=faExclamationCircle;
d3=faExclamationTriangle;
  faHomeUser=faHomeUser;
  faLink=faLink;
  faBug=faBug;
  caret=faCaretDown;
 val=0;
likeval=0;
dislikeval=0;
count(type:string){
  type==='plus' ? this.val++ & this.likeval++:this.dislikeval-- & this.val--;
}


  constructor() { }

  
}
