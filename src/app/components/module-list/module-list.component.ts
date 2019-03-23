import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ModuleServiceService } from 'src/app/services/ModuleService/module-service.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  private modules: any;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private moduleService: ModuleServiceService) { }

  ngOnInit() {
    this.getCourse();
  }


  getCourse() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.moduleService.getAllModules(id).subscribe((res) => {
      console.log(res)
      this.modules = res;
    });

  }

  selectModule(module){
    // console.log(module)
  }
}
