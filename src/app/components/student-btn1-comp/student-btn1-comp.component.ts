import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-btn1-comp',
  templateUrl: './student-btn1-comp.component.html',
  styleUrls: ['./student-btn1-comp.component.css']
})
export class StudentBtn1CompComponent {
  @Input() text: string ='';
  
}
