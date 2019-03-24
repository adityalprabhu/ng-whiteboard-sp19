import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable()
export class ApiUrlsService {

    public static findAllCoursesURL = environment.domain + "/api/student/courses";

    public static findAllModulesURL = environment.domain + "/api/courses/cid/modules";

    public static findAllLessonsURL = environment.domain + "/api/module/mid/lesson";

    public static findAllTopicsURL = environment.domain + "/api/lesson/lid/topic";

    public static findAllWidgetsURL = environment.domain + "/api/topic/tid/widget";


}