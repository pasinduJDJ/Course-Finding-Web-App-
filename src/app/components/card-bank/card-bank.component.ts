import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card-bank',
  templateUrl: './card-bank.component.html',
  styleUrls: ['./card-bank.component.css']
})
export class CardBankComponent {

  constructor(public userService:UserService){}

  @Input() title: string = '';
  @Input() imageUrl: string ='';

  @Input('bank') bank:any;
}
