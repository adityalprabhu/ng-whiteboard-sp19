import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/CourseService/course-service.service';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  courses : any;
  constructor(private courseService: CourseServiceService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  selectCourse = (course) => {
    // console.log(course);
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe((res)=>{
      console.log(res)
      this.courses = res;
    })
  }
}
