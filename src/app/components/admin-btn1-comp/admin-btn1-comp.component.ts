import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-btn1-comp',
  templateUrl: './admin-btn1-comp.component.html',
  styleUrls: ['./admin-btn1-comp.component.css']
})
export class AdminBtn1CompComponent {
  @Input() btntext:String='';
}
