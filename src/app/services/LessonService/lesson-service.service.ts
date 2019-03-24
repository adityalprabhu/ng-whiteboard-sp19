import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../apiUrlsService';

@Injectable({
  providedIn: 'root'
})
export class LessonServiceService {

  getLessonsApiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.getLessonsApiUrl = ApiUrlsService.findAllLessonsURL;
  }

  public getAllLessons(id) {
    return this.httpClient.get(this.getLessonsApiUrl.replace('mid', id));
  }
}