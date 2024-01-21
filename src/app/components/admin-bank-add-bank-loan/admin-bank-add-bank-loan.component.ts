import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-admin-bank-add-bank-loan',
  templateUrl: './admin-bank-add-bank-loan.component.html',
  styleUrls: ['./admin-bank-add-bank-loan.component.css']
})
export class AdminBankAddBankLoanComponent {


  constructor(private bankServices: BankService, private router: Router) { }

  bankName: String = '';
  overview: string = '';
  bankLogo:string = '';
  loanAmount: string = '';
  repaymentPeriod: string = '';
  eligibility: string = '';
  requirment: string = '';
  mobileNo: string = '';
  website: string = '';

  createBnakLoan() {
    var inputData = {
      bankName: this.bankName,
      overview: this.overview,
      imageUrl:this.bankLogo,
      loanAmount: this.loanAmount,
      repaymentPeriod: this.repaymentPeriod,
      eligibility: this.eligibility,
      requirment: this.requirment,
      mobileNo: this.mobileNo,
      website: this.website
    }
    this.bankServices.createBank(inputData).subscribe({
      next:(res:any) => {
        console.log(res);
        this.navigateToBank()

      },
      error:(err:any) =>{
        console.log(err, 'errors');
      }
    })
  }
  navigateToBank() {
    this.router.navigate(['/adminBankLoans']);
  }
}
