import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable()
export class ApiUrlsService {

    //course apis
    public static findAllCoursesURL = environment.domain + "/api/student/courses";
    
    public static findCourseByIdURL = environment.domain + "/api/courses/cid";

    //module apis
    public static findAllModulesURL = environment.domain + "/api/student/modules";

    public static findModulesForCourseURL = environment.domain + "/api/courses/cid/modules";

    public static findModuleByIdURL = environment.domain + "/api/module/mid";

    //lesson apis
    public static findAllLessonsURL = environment.domain + "/api/student/lessons";

    public static findLessonsForModuleURL = environment.domain + "/api/module/mid/lesson";

    public static findLessonByIdURL = environment.domain + "/api/lesson/lid";


    //topic apis
    public static findAllTopicsURL = environment.domain + "/api/student/topics";

    public static findTopicsForLessonURL = environment.domain + "/api/lesson/lid/topic";

    public static findTopicByIdURL = environment.domain + "/api/topic/tid";

    //widget apis
    public static findAllWidgetsURL = environment.domain + "/api/student/widgets";

    public static findWidgetsForTopicURL = environment.domain + "/api/topic/tid/widget";

    public static findWidgetByIdURL = environment.domain + "/api/widget/wid";

}