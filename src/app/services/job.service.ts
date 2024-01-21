import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface jobResponse {
  "jobTitle": string,
  "jobImage": string,
  "overview": string,
  "jobType": string,
  "position": string,
  "qulification": string,
  "jobMode": string,
  "income": string,
  "companyMoblie": string,
  "jobEmail": string
}

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  saveJob(inputData: object) {
    return this.httpClient.post('http://localhost:8080/jobs', inputData)
  }
  getJobs() {
    return this.httpClient.get('http://localhost:8080/jobs')
  }

  url :string = "http://localhost:8080/jobs";

  getJobsByID(jobId: number) {
    const url=this.url+"/"+jobId;
    return this.httpClient.get(url)
  }
  destoryJob(blogId:Number){
    const url=this.url+"/"+blogId;
    return this.httpClient.delete(url)
  }
  updateJob(inputData: object) {
    return this.httpClient.put('http://localhost:8080/jobs', inputData)
  }
}
