import { Component } from '@angular/core';
import { BankService, bankResponse } from 'src/app/services/bank.service';
import { BlogService, blogResponse } from 'src/app/services/blog.service';
import { CourseService, CourseResponse } from 'src/app/services/course.service';
import { JobService ,jobResponse} from 'src/app/services/job.service';
import { UserService ,userResponse} from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent {
  constructor(private courseService: CourseService, private bankservices: BankService, private blogServce: BlogService, private jobServce: JobService, private userServices:UserService) { }

  ngOnInit() {
    this.getCourseList();
    this.getBankList();
    this.getBlogList();
    this.getJobList();
    this.getUserList();
  }

  //Count Blogs
  courses: CourseResponse[] = [];
  noOfCours: string = "";
  getCourseList() {
    this.courseService.getCourses().subscribe((res: any) => {
      console.log(res.courses);
      this.courses = res;
      this.noOfCours = String(res.length);
    });
  }

  //Count Bank Loan
  banks: bankResponse[] = [];
  noOfBank: string = "";
  getBankList() {
    this.bankservices.getBanks().subscribe((res: any) => {
      this.banks = res;
      this.noOfBank = String(res.length);
    });
  }

  // Count Blog
  blogs: blogResponse[] = [];
  noOfBlogs: string = "";
  getBlogList() {
    this.blogServce.getBlogs().subscribe((res: any) => {
      this.blogs = res;
      this.noOfBlogs = String(res.length);
    });
  }

  //Cont Jobs
  jobs: jobResponse[] = [];
  noOfJobs: string = "";
  getJobList() {
    this.jobServce.getJobs().subscribe((res: any) => {
      this.jobs = res;
      this.noOfJobs = String(res.length);
    });
  }

  //Count Users
  user:userResponse[] = [];
  noOfUsers: string = "";
  getUserList() {
    this.userServices.getUsers().subscribe((res: any) => {
      console.log(res);
      this.user = res;
      this.noOfUsers = String(res.length);
    },
    );
  }

}
