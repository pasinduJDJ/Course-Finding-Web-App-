import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstituteService, instituteResponse } from 'src/app/services/institute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users-view-user',
  templateUrl: './admin-users-view-user.component.html',
  styleUrls: ['./admin-users-view-user.component.css']
})
export class AdminUsersViewUserComponent {
  constructor(private route: ActivatedRoute, private userServices:UserService,private router: Router, private instituteService:InstituteService){}


  institutes:any = {};
  insRegisterId:any='';
  
  ngOnInit(){
    this.insRegisterId=this.route.snapshot.paramMap.get('id');
    console.log(this.insRegisterId);

    this.instituteService.getInsByInsRegID(this.insRegisterId).subscribe((res:any)=>{
      console.log(res)
      this.institutes = res[0];
    })
  }
}
