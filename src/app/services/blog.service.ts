import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface blogResponse {
  "blogTopic": string
  "blogName": string
  "blogImage": string
  "blogDetails": string
  "publishDate": string
  
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  createBlog(inputData: object) {
    return this.httpClient.post('http://localhost:8080/blogs', inputData)
  }
  getBlogs() {
    return this.httpClient.get('http://localhost:8080/blogs')
  }

  url :string = "http://localhost:8080/blogs";

  getBlogsByID(blogId: number) {
    const url=this.url+"/"+blogId;
    return this.httpClient.get(url)
  }

  updateStudent(inputData: object) {
    return this.httpClient.put('http://localhost:8080/blogs', inputData)
  }

  destoryBLog(blogId:Number){
    const url=this.url+"/"+blogId;
    return this.httpClient.delete(url)
  }

  

}
  