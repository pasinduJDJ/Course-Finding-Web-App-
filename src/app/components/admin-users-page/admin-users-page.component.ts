import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, userResponse } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.css']
})
export class AdminUsersPageComponent {

  constructor(private userServices:UserService,private router: Router) { }

  user:userResponse[] = [];
  noOfUsers: string = "";

  ngOnInit(){
    this.getUserList();
  }
  getUserList() {
    this.userServices.getUsers().subscribe((res: any) => {
      console.log(res);
      this.user = res;
      this.noOfUsers = String(res.length);
    },
    );
  }

  delete(){

  }
}
