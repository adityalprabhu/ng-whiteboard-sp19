import { Injectable } from '@angular/core';
import { ApiUrlsService } from '../apiUrlsService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetServiceService {

  findAllWidgetsURL: string;
  findWidgetsForTopicURL: string;
  findWidgetByIdURL: string;

  constructor(private httpClient: HttpClient) {
    this.findAllWidgetsURL = ApiUrlsService.findAllWidgetsURL;
    this.findWidgetsForTopicURL = ApiUrlsService.findWidgetsForTopicURL;
    this.findWidgetByIdURL = ApiUrlsService.findWidgetByIdURL;
  }

  public findAllWidgets() {
    return this.httpClient.get(this.findAllWidgetsURL);
  }

  public findWidgetsForTopic(tid) {
    return this.httpClient.get(this.findWidgetsForTopicURL.replace('tid', tid));
  }

  public findWidgetById(wid) {
    return this.httpClient.get(this.findWidgetByIdURL.replace('wid', wid));
  }
}