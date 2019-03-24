import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TopicServiceService } from 'src/app/services/TopicService/topic-service.service';
@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  topics: any;
  private courseId;
  private moduleId;
  private lessonId;
  private topicId;
  
  constructor(private route: ActivatedRoute,
    private location: Location,
    private topicService: TopicServiceService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;

      if(this.lessonId){
        this.findAllTopics();
      }
    });
  }

  findAllTopics() {
    // console.log(this.lessonId)

    this.topicService.findTopicsForLesson(this.lessonId).subscribe((res) => {
      // console.log(res)
      this.topics = res;
    });

  }

  selectTopic(topic){
    // console.log(module)
    this.topicId = topic.id;
    this.router.navigate([`course/${this.courseId}/module/${this.moduleId}/lesson/${this.lessonId}/topic/${this.topicId}/widget`]);
  }
}
