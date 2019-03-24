import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../apiUrlsService';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceService {

  findAllModulesURL: string;
  findModulesForCourseURL: string;
  findModuleByIdURL: string;

  constructor(private httpClient: HttpClient) {
    this.findAllModulesURL = ApiUrlsService.findAllModulesURL;
    this.findModulesForCourseURL = ApiUrlsService.findModulesForCourseURL;
    this.findModuleByIdURL = ApiUrlsService.findModuleByIdURL;

  }

  public findAllModules() {
    return this.httpClient.get(this.findAllModulesURL);
  }

  public findModulesForCourse(cid) {
    return this.httpClient.get(this.findModulesForCourseURL.replace('cid', cid));
  }

  public findModuleById(mid) {
    return this.httpClient.get(this.findModuleByIdURL.replace('mid', mid));
  }
}
