import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-header-comp',
  templateUrl: './student-header-comp.component.html',
  styleUrls: ['./student-header-comp.component.css']
})
export class StudentHeaderCompComponent {

  constructor(public userService:UserService , private router: Router){
    console.log(!this.userService.isLoggedIn && !this.userService.isAdmin);
  }

  logOut(){
    localStorage.setItem('isLoggedIn', 'false');
    this.userService.setIsLoggedIn();
    localStorage.setItem('isAdmin', 'false');
    this.router.navigate(['/home']);
  }

}
