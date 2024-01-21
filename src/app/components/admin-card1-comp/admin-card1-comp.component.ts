import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-card1-comp',
  templateUrl: './admin-card1-comp.component.html',
  styleUrls: ['./admin-card1-comp.component.css']
})
export class AdminCard1CompComponent {
  @Input() no:String="";
  @Input() text:String='';
}
