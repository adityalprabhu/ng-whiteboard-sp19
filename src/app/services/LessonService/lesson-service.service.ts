import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../apiUrlsService';

@Injectable({
  providedIn: 'root'
})
export class LessonServiceService {

  findAllLessonsUrl: string;
  findLessonsForModuleURL: string;
  findLessonByIdURL: string;

  constructor(private httpClient: HttpClient) {
    this.findAllLessonsUrl = ApiUrlsService.findAllLessonsURL;
    this.findLessonsForModuleURL = ApiUrlsService.findLessonsForModuleURL;
    this.findLessonByIdURL = ApiUrlsService.findLessonByIdURL;
  }

  public findAllLessons() {
    return this.httpClient.get(this.findAllLessonsUrl);
  }

  public findLessonsForModule(mid) {
    return this.httpClient.get(this.findLessonsForModuleURL.replace('mid', mid));
  }

  public findLessonById(lid) {
    return this.httpClient.get(this.findLessonByIdURL.replace('lid', lid));
  }
  
}