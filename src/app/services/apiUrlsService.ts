import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable()
export class ApiUrlsService {

    public static findAllCoursesURL = environment.domain + "/api/student/courses";

    public static findAllModulesURL = environment.domain + "/api/courses/cid/modules";

}