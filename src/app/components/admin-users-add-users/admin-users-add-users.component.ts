import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteService } from 'src/app/services/institute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users-add-users',
  templateUrl: './admin-users-add-users.component.html',
  styleUrls: ['./admin-users-add-users.component.css']
})
export class AdminUsersAddUsersComponent {
  constructor(private userService: UserService, private instituteServices: InstituteService, private router: Router) { }

  fullName: string = '';
  userName: string = '';
  userPassword: string = '';
  userMobile: string = '';
  userEmail: string = '';
  insRegisterNo: string = '';
  insName: string = '';
  insImageUrl: string = '';
  insLocation: string = '';
  insOverview: string = '';
  insMobileNo: string = '';
  insEmail: string = '';
  insStartDate: string = '';
  insWebSite: string = '';
  recommendedBankNo: string = '';

  createUser() {
    if (this.fullName == null || this.fullName === '') {
      alert('Please Enter user Full name ');
    }else if(this.userName == null || this.userName === ''){
      alert('Please Enter user Login name ');
    }else if(this.userPassword == null || this.userPassword === ''){
      alert('Please Enter user Login Password ');
    }else if(this.userMobile == null || this.userMobile === ''){
      alert('Please Enter user Mobile Number ');
    }else if(this.userEmail == null || this.userEmail === ''){
      alert('Please Enter user Email ');
    }else if(this.insRegisterNo == null || this.insRegisterNo === ''){
      alert('Please Enter Institute Register Number ');
    }else if(this.insName == null || this.insName === ''){
      alert('Please Enter Institute Name ');
    }else if(this.insImageUrl == null || this.insImageUrl === ''){
      alert('Please Enter Institute Logo Url ');
    }else if(this.insLocation == null || this.insLocation === ''){
      alert('Please Enter Institute Branch Location ');
    }else if(this.insOverview == null || this.insOverview === ''){
      alert('Please Enter Institute Overview ');
    }else if(this.recommendedBankNo == null || this.recommendedBankNo === ''){
      alert('Please Enter Recommended BankS For Student');
    }
    else{
      var instituteData = {
        insName: this.insName,
        insImage: this.insImageUrl,
        overview: this.insOverview,
        startDate: this.insStartDate,
        location: this.insLocation,
        insMobile: this.insMobileNo,
        insEmail: this.insEmail,
        insWebsite: this.insWebSite,
        recommendedBankNo: this.recommendedBankNo,
        insRegisterNo: this.insRegisterNo
      }
      var userData = {
        name: this.fullName,
        userName: this.userName,
        password: this.userPassword,
        insRegisterNo: this.insRegisterNo,
        mobileNo: this.userMobile,
        email: this.userEmail
      }
  
      this.userService.createUser(userData).subscribe({
        next: (res: any) => {
          console.log(res);
          this.navigateToUser()
        },
        error: (err: any) => {
          console.log(err, 'errors');
        }
      })
  
      this.instituteServices.createInstitute(instituteData).subscribe({
        next: (res: any) => {
          console.log(res);
          this.navigateToUser()
        }, error: (err: any) => {
          console.log(err, 'errors');
        }
      })
    }
    

  }
  

  
  navigateToUser() {
    this.router.navigate(['/adminUsers']);
  }

}
