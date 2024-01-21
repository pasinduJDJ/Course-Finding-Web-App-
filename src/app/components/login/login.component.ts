import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, userResponse } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  userpassword: string = '';
  constructor(private userSerivce: UserService,private router: Router) { }
  users: userResponse[]=[];


  login() {
    if (this.username == null || this.username === '') {
      alert('Please Enter user name ');
    } else if (this.userpassword == null || this.userpassword === '') {
      alert('Please Enter password');
    } else {
      this.userSerivce.getUsers().subscribe((res: any) => {
        if (res && Array.isArray(res)) {
          this.users = res;

          // Filter the users based on the entered username and password
          const myUsers = this.users.filter(user =>
            this.username === user.userName && this.userpassword === user.password
          );

          if (myUsers.length > 0) {
            let userDetails = myUsers[0]
            //save user id in locat storage
            localStorage.setItem('UserID', userDetails.insRegisterNo);
            localStorage.setItem('isLoggedIn', 'true');
            this.userSerivce.setIsLoggedIn();
            if(userDetails.userName == "admin"){
              localStorage.setItem('isAdmin', 'true');
              this.userSerivce.setIsAdmin();
              this.router.navigate(['/adminHome']);
            }else{
             localStorage.setItem('isAdmin', 'false'); 
             this.userSerivce.setIsAdmin();
              this.router.navigate(['/instituteHome']);
            }
          } else {
            console.log('Invalid username or password');
            // Handle invalid login credentials (show an error message, etc.)
          }
        } else {
          console.log('Invalid response format');
          // Handle the case where the response does not have the expected structure
        }
      });
    }
  }


}
