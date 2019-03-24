import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../apiUrlsService';

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {

  getTopicsApiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.getTopicsApiUrl = ApiUrlsService.findAllTopicsURL;
  }

  public getAllTopics(id) {
    return this.httpClient.get(this.getTopicsApiUrl.replace('lid', id));
  }
}