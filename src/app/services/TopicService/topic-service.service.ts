import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../apiUrlsService';

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {

  findAllTopicsURL: string;
  findTopicsForLessonURL: string;
  findTopicByIdURL: string;

  constructor(private httpClient: HttpClient) {
    this.findAllTopicsURL = ApiUrlsService.findAllTopicsURL;
    this.findTopicsForLessonURL = ApiUrlsService.findTopicsForLessonURL;
    this.findTopicByIdURL = ApiUrlsService.findTopicByIdURL;
  }

  public findAllTopics() {
    return this.httpClient.get(this.findAllTopicsURL);
  }

  public findTopicsForLesson(lid) {
    return this.httpClient.get(this.findTopicsForLessonURL.replace('lid', lid));
  }

  public findTopicById(tid) {
    return this.httpClient.get(this.findTopicByIdURL.replace('tid', tid));
  }
}