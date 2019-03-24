import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { WidgetServiceService } from 'src/app/services/WidgetService/widget-service.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  private widgets: any;
  private courseId;
  private moduleId;
  private lessonId;
  private topicId;
  private widgetId;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private widgetService: WidgetServiceService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;
      
      if(this.topicId){
        this.getWidgets();
      }
    });
  }

  getWidgets() {
    // console.log(this.lessonId)

    this.widgetService.getAllWidgets(this.topicId).subscribe((res) => {
      // console.log(res)
      this.widgets = res;
    });

  }
}
