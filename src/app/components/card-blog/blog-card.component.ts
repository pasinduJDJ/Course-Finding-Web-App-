import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {

  constructor( public userService:UserService){}
  @Input() imageUrl: string='';
  @Input() title: string='';
  @Input() content: string='';
  @Input() subtitle: string='';
  @Input() mainbtn: string='';

  @Input('blog') blog:any;
}
