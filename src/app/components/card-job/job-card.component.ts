import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {

  constructor(public userService:UserService){}
  @Input() imageUrl: string='';
  @Input() title: string='';
  @Input() content: string='';
  @Input() subtitle: string='';
  @Input() mainbtn: string='';

  @Input('job') job:any;
}
