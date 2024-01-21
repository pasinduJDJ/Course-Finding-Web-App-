import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-card1-comp',
  templateUrl: './student-card1-comp.component.html',
  styleUrls: ['./student-card1-comp.component.css']
})
export class StudentCard1CompComponent {
  @Input() title: string = '';
  @Input() imageUrl: string ='';
}
