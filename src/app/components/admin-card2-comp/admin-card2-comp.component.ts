import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-card2-comp',
  templateUrl: './admin-card2-comp.component.html',
  styleUrls: ['./admin-card2-comp.component.css']
})
export class AdminCard2CompComponent {
  @Input() no:String='';
  @Input() text:String='';
}
