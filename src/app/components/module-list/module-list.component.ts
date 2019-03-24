import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ModuleServiceService } from 'src/app/services/ModuleService/module-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  private modules: any;
  private courseId;
  private moduleId;
  private subscription;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private moduleService: ModuleServiceService,
    private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.findAllModules();
    });
  }

  findAllModules() {
    // console.log(this.moduleId)
    this.moduleService.findModulesForCourse(this.courseId).subscribe((res) => {
      this.modules = res;
    });

  }

  selectModule(module) {
    // console.log(module)
    this.moduleId = module.id;
    this.router.navigate([`course/${this.courseId}/module/${this.moduleId}/lesson`]
    );
  }
}
