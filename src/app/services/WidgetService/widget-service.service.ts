import { Injectable } from '@angular/core';
import { ApiUrlsService } from '../apiUrlsService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetServiceService {

  getWidgetsApiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.getWidgetsApiUrl = ApiUrlsService.findAllWidgetsURL;
  }

  public getAllWidgets(id) {
    return this.httpClient.get(this.getWidgetsApiUrl.replace('tid', id));
  }
}