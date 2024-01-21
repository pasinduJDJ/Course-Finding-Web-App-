import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-btn2-comp',
  templateUrl: './student-btn2-comp.component.html',
  styleUrls: ['./student-btn2-comp.component.css']
})
export class StudentBtn2CompComponent {
  @Input() btntext: string='';
}
