import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface userResponse {
  "id": string,
  "name": string,
  "userName": string,
  "password": string,
  "insRegisterNo": string,
  "mobileNo": string,
  "email": string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  isStudent: boolean = false;

  setIsLoggedIn() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn") == 'true' ? true : false;
  }
  setIsAdmin() {
    this.isAdmin = localStorage.getItem("isAdmin") == 'true' ? true : false;
  }
  setIsStudent() {
    this.isStudent = ! (localStorage.getItem("isAdmin") == 'true' ? true : false);

    // this.isLoggedIn =  localStorage.getItem("isLoggedIn") == 'false' ? false: true;
  }

  // crud Operation

  getUsers() {
    return this.httpClient.get('http://localhost:8080/users')
  }
  createUser(userData: object) {
    return this.httpClient.post('http://localhost:8080/users', userData)
  }
  url :string = "http://localhost:8080/users";
  
  getUsersByID(studentId: number) {
    const url=this.url+"/"+studentId;
    return this.httpClient.get(url)
  }

  destoryUser(userID:any){
    const url=this.url+"/"+userID;
    return this.httpClient.delete(url)
  }

  
}
