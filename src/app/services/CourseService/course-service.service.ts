import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../apiUrlsService';
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  getAllCoursesApiUrl: string; 

  constructor(private httpClient: HttpClient,) {
    this.getAllCoursesApiUrl = ApiUrlsService.findAllCoursesURL;
  }

  public getAllCourses(){
    return this.httpClient.get(this.getAllCoursesApiUrl);
  }
}
