import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-with-content-btn',
  templateUrl: './title-with-content-btn.component.html',
  styleUrls: ['./title-with-content-btn.component.css']
})
export class TitleWithContentBtnComponent {
  @Input() title:String ='';
  @Input() btntext:String ='';
}
