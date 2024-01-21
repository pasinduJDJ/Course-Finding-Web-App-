import { Component } from '@angular/core';
import { InstituteService ,instituteResponse } from 'src/app/services/institute.service';

@Component({
  selector: 'app-student-institute',
  templateUrl: './student-institute.component.html',
  styleUrls: ['./student-institute.component.css']
})
export class StudentInstituteComponent {
  constructor(private instituteService:InstituteService){ this.searchedInstitute = this.institutes;}

  institutes: instituteResponse []=[];
  searchedInstitute: any[] = [];

  ngOnInit(){
    this.getInstituteList();

  }

  getInstituteList(){
    this.instituteService.getInstitute().subscribe((res:any) =>{
      console.log(res.institutes);
      this.institutes = res;
      this.searchedInstitute = this.institutes;
    });
  }

  onSearch(event: any) {
    this.searchedInstitute = this.institutes.filter(e =>
      String(e.insName).toLowerCase().includes(String(event.target.value).trim().toLowerCase()));
  }
}
