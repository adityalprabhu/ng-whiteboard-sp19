import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LessonServiceService } from 'src/app/services/LessonService/lesson-service.service';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  private lessons: any;
  private courseId;
  private moduleId;
  private lessonId;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private lessonService: LessonServiceService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.findAllLessons();
    });
  }

  findAllLessons() {
    if (this.moduleId) {
      this.lessonService.findLessonsForModule(this.moduleId).subscribe((res) => {
        // console.log(res)
        this.lessons = res;
      });
    }
  }

  selectLesson(lesson) {
    this.lessonId = lesson.id;
    this.router.navigate([`course/${this.courseId}/module/${this.moduleId}/lesson/${this.lessonId}/topic`]);
  }
}
