import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-title-with-content',
  templateUrl: './student-title-with-content.component.html',
  styleUrls: ['./student-title-with-content.component.css']
})
export class StudentTitleWithContentComponent {
  @Input() title:String ='';
  @Input() content:String ='';
  
}
