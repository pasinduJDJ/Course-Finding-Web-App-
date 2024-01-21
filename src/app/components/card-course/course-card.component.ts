import { Component, Input } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  constructor(public userService:UserService){}

  @Input() imageUrl: string='';
  @Input() title: string='';
  @Input() content: string='';
  @Input() subtitle: string='';
  @Input() mainbtn: string='';

  @Input('course') course:any;
}
