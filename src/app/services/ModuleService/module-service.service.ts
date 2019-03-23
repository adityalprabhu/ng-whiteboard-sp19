import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../apiUrlsService';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceService {

  getModulesApiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.getModulesApiUrl = ApiUrlsService.findAllModulesURL;
  }

  public getAllModules(id) {
    return this.httpClient.get(this.getModulesApiUrl.replace('cid', id));
  }
}
