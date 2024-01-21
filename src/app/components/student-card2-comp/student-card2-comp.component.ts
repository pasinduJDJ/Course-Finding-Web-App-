import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-card2-comp',
  templateUrl: './student-card2-comp.component.html',
  styleUrls: ['./student-card2-comp.component.css']
})
export class StudentCard2CompComponent {
  @Input() imageUrl: string='';
  @Input() title: string='';
  @Input() content: string='';
  @Input() subtitle: string='';
  @Input() mainbtn: string='';
}
