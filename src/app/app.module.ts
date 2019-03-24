import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './components/topic-pills/topic-pills.component';
import { WidgetListComponent } from './components/widget-list/widget-list.component';
import { CourseServiceService } from './services/CourseService/course-service.service';
import { ModuleServiceService } from './services/ModuleService/module-service.service';
import { LessonServiceService } from './services/LessonService/lesson-service.service';
import { TopicServiceService } from './services/TopicService/topic-service.service';
import { WidgetServiceService } from './services/WidgetService/widget-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceService,
    ModuleServiceService,
    LessonServiceService,
    TopicServiceService,
    WidgetServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
