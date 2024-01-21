import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CourseResponse{
  "instituteName": String,
  "courseName": string,
  "courseImage": string ,
  "awardedUni": string ,
  "awardedUniImage": string,
  "worldRanking": string ,
  "relatedIndustry": string ,
  "programmeType": string ,
  "programmeTime": string,
  "programme": string ,
  "entryRequirement": string ,
  "courseStructure": string,
  "fees": string,
  "commencement": string ,
  "insId": string ,
  "coursetime": string,
  "overallidea":string,
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  saveCourse(inputData: object){
    return this.httpClient.post('http://localhost:8080/courses', inputData)
  }
  getCourses() {
    return this.httpClient.get('http://localhost:8080/courses')
  }
  updateCourse(inputData: object) {
    return this.httpClient.put('http://localhost:8080/courses', inputData)
  }
  //// get courses in nibm 
  urls :string = "http://localhost:8080";

  getCoursesbyRegNo(registerNo: string){
    const url=this.urls+"/courses?no="+registerNo;
    return this.httpClient.get(url)
  }

  url :string = "http://localhost:8080/courses";

  getCoursesByID(courseID: number) {
    const url=this.url+"/"+courseID;
    return this.httpClient.get(url)
  }
  
  destoryCourses(blogId:Number){
    const url=this.url+"/"+blogId;
    return this.httpClient.delete(url)
  }
}
