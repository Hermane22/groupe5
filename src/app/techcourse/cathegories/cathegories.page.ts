import { Component, OnInit } from '@angular/core';
import { Techcourse } from '../techcourses.model';
import { TechcoursesService } from '../techcourses.service';

@Component({
  selector: 'app-cathegories',
  templateUrl: './cathegories.page.html',
  styleUrls: ['./cathegories.page.scss'],
})
export class CathegoriesPage implements OnInit {
cathegoryList : Techcourse[];
  constructor( private cathegoryService : TechcoursesService ) { }

  ngOnInit() {
    this.cathegoryList= this.cathegoryService.getCathegories();  }

}
