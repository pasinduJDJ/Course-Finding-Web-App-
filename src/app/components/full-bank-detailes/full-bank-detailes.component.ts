import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-full-bank-detailes',
  templateUrl: './full-bank-detailes.component.html',
  styleUrls: ['./full-bank-detailes.component.css']
})
export class FullBankDetailesComponent {
  banks:any = {};
  bankId:any='';

  constructor(private route:ActivatedRoute , private bankService:BankService ,private router: Router){}

  ngOnInit(){
    this.bankId=this.route.snapshot.paramMap.get('id');
    // alert(this.blogId);
    console.log(this.bankId);

    this.bankService.getBanksByID(this.bankId).subscribe((res:any)=>{
      console.log(res)
      this.banks=res;
    })
  }
}
