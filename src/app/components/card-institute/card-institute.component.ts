import { Component, Input } from '@angular/core';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-card-institute',
  templateUrl: './card-institute.component.html',
  styleUrls: ['./card-institute.component.css']
})
export class CardInstituteComponent {
  constructor(public instituteService:InstituteService){}

  @Input() title: string = '';
  @Input() imageUrl: string ='';

  @Input('institute') institute:any;
}
