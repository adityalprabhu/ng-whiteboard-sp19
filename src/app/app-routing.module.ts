import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './components/topic-pills/topic-pills.component';
import { WidgetListComponent } from './components/widget-list/widget-list.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/course', 
    pathMatch: 'full' },
  { 
    path: 'course', 
    component: CourseGridComponent },
  { 
    path: 'course/:courseId/module', 
    component: ModuleListComponent },
  { 
    path: 'course/:courseId/module/:moduleId/lesson', 
    component: ModuleListComponent },
  { 
    path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', 
    component: ModuleListComponent },
  {
    path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget',
    component: ModuleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
