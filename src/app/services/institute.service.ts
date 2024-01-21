import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface instituteResponse {
  "insName": string
  "insImage": string
  "overview": string
  "startDate": string
  "location": string
  "insMobile": string
  "insEmail": string
  "insWebsite": string
  "recommendedBankNo": string
  "insRegisterNo":string
}
@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private httpClient: HttpClient) { }

  url :string = "http://localhost:8080";
  urls :string = "http://localhost:8080/institutes";

  createInstitute(instituteData:object){
    return this.httpClient.post('http://localhost:8080/institutes', instituteData)
  }
  
  getInsByInsRegID(registerNumber:string){
    const url=this.url+"/institutes?no="+registerNumber;
    return this.httpClient.get(url)
  }
  getInstitute() {
    return this.httpClient.get('http://localhost:8080/institutes')
  }

  getInstitutesByID(instituteId: number) {
    const url=this.urls+"/"+instituteId;
    return this.httpClient.get(url)
  }

  // getInstitutesByIDHome(instituteId: any) {
  //   const url=this.urls+"/"+instituteId;
  //   return this.httpClient.get(url)
  // }
}
