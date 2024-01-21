import { Component } from '@angular/core';
import { BankService, bankResponse } from 'src/app/services/bank.service';

@Component({
  selector: 'app-admin-bank-loans-page',
  templateUrl: './admin-bank-loans-page.component.html',
  styleUrls: ['./admin-bank-loans-page.component.css']
})
export class AdminBankLoansPageComponent {
  
  constructor(private bankservices:BankService){}

  banks: bankResponse []=[];
  noOfBlogs:string = "";

  ngOnInit(){
    this.getBankList();
  }

  getBankList(){
    this.bankservices.getBanks().subscribe((res:any) =>{
      console.log(res.banks);
      this.banks = res;
      this.noOfBlogs= String(res.length);
    });
  }
}
