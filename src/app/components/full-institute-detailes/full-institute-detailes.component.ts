import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstituteService } from 'src/app/services/institute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-full-institute-detailes',
  templateUrl: './full-institute-detailes.component.html',
  styleUrls: ['./full-institute-detailes.component.css']
})
export class FullInstituteDetailesComponent {
  institute:any = {};
  instituteId!: any;

  constructor(private route:ActivatedRoute , private instituteService:InstituteService ,private router: Router){}

  ngOnInit(){
    this.instituteId=this.route.snapshot.paramMap.get('id');
    console.log(this.instituteId);
    
    this.instituteService.getInstitutesByID(this.instituteId).subscribe((res:any)=>{
      console.log(res)
      this.institute=res;
    })
  }
}
