import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-admin-bank-manage-bnak-loans',
  templateUrl: './admin-bank-manage-bnak-loans.component.html',
  styleUrls: ['./admin-bank-manage-bnak-loans.component.css']
})
export class AdminBankManageBnakLoansComponent {
  banks:any = {};
  bankId:any='';

  constructor(private route:ActivatedRoute , private bankService:BankService ,private router: Router){}

  ngOnInit(){
    this.bankId=this.route.snapshot.paramMap.get('id');
    console.log(this.bankId);

    this.bankService.getBanksByID(this.bankId).subscribe((res:any)=>{
      console.log(res)
      this.banks=res;
    })
  }

  deleteBanks(event:any,bankId:number){
    if(confirm("Are You Sure Delete Bank Loan Details?",)){
      event.target.innerText="Deleting ..";
      this.bankService.destoryBank(bankId).subscribe((res:any)=>{
        this.navigateToBank()
        alert(res.message)
      })
    }
  }
  navigateToBank() {
    this.router.navigate(['/adminBankLoans']);
  }
}
