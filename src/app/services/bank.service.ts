import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface bankResponse {
  "bankName": String 
  "overview": string 
  "bankLogo":string
  "loanAmount": string
  "repaymentPeriod": string 
  "eligibility": string
  "requirment": string 
  "mobileNo": string 
  "website": string 
}

@Injectable({
  providedIn: 'root'
})

export class BankService {

  constructor(private httpClient: HttpClient) { }

  createBank(inputData: object) {
    return this.httpClient.post('http://localhost:8080/banks', inputData)
  }
  getBanks() {
    return this.httpClient.get('http://localhost:8080/banks')
  }

  url :string = "http://localhost:8080/banks";

  getBanksByID(bankId: number) {
    const url=this.url+"/"+bankId;
    return this.httpClient.get(url)
  }
  destoryBank(bankId:Number){
    const url=this.url+"/"+bankId;
    return this.httpClient.delete(url)
  }
  updateBankLoan(inputData: object) {
    return this.httpClient.put('http://localhost:8080/banks', inputData)
  }
}
