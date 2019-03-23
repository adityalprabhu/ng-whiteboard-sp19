import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { ModuleListComponent } from './components/module-list/module-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/course', pathMatch: 'full' },
  {path: 'course', component: CourseGridComponent},
  {path: 'course/:id/module', component: ModuleListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
