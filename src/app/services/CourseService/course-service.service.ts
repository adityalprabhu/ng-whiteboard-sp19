import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../apiUrlsService';
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  findAllCoursesApiUrl: string; 
  findCourseByIdURL: string

  constructor(private httpClient: HttpClient,) {
    this.findAllCoursesApiUrl = ApiUrlsService.findAllCoursesURL;
    this.findCourseByIdURL =  ApiUrlsService.findCourseByIdURL;
  }

  public findAllCourses(){
    return this.httpClient.get(this.findAllCoursesApiUrl);
  }

  public findCourseById(cid){
    return this.httpClient.get(this.findCourseByIdURL.replace('cid', cid));
  }
}
