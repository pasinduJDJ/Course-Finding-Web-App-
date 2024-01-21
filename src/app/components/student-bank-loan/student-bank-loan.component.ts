import { Component } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-student-bank-loan',
  templateUrl: './student-bank-loan.component.html',
  styleUrls: ['./student-bank-loan.component.css']
})
export class StudentBankLoanComponent {
  constructor(private bankservices:BankService){}

  banks: BankService[]=[];

  ngOnInit(){
    this.getBankList();
  }

  getBankList(){
    this.bankservices.getBanks().subscribe((res:any) =>{
      console.log(res.banks);
      this.banks = res;
    });
  }
}
