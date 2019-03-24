import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/CourseService/course-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  courses: any;
  private courseId;
  constructor(private courseService: CourseServiceService, 
    private router: Router) { }

  ngOnInit() {
    this.findAllCourses();
  }
  
  findAllCourses() {
    this.courseService.findAllCourses().subscribe((res) => {
      // console.log(res)
      this.courses = res;
    });
  }

  selectCourse = (course) => {
    // console.log(course);
    this.courseId = course.id;
    this.router.navigate([`course/${this.courseId}/module`]);
  }
}
