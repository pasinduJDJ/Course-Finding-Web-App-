import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-admin-bank-edit-bannk',
  templateUrl: './admin-bank-edit-bannk.component.html',
  styleUrls: ['./admin-bank-edit-bannk.component.css']
})
export class AdminBankEditBannkComponent {
  constructor(private route: ActivatedRoute, private bankServices: BankService, private router: Router) { }

  bank: any = {};
  bankId!: any;

  ngOnInit() {
    this.bankId = this.route.snapshot.paramMap.get('id');
    console.log(this.bankId);

    this.bankServices.getBanksByID(this.bankId).subscribe((res: any) => {
      console.log(res)
      this.bank = res;
    })

  }

  updateBnakLoan() {
    this.bankServices.updateBankLoan(this.bank).subscribe({
      next:(res:any)=>{
        console.log(res);
       if(res != null){
        alert("Bank Loan Destails updated")
        this.navigateToBank()
        
       }
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  navigateToBank() {
    this.router.navigate(['/adminBankLoans']);
  }


}
