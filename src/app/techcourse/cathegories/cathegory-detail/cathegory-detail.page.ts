import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Techcourse } from '../../techcourses.model';
import { TechcoursesService } from '../../techcourses.service';

@Component({
  selector: 'app-cathegory-detail',
  templateUrl: './cathegory-detail.page.html',
  styleUrls: ['./cathegory-detail.page.scss'],
})
export class CathegoryDetailPage implements OnInit {
categorie : Techcourse;
  constructor(
    private route: ActivatedRoute,
    private cathegorieService : TechcoursesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      let id= paramMap.get('categoryId');
      this.categorie= this.cathegorieService.getOneCategory(id);
    })  }

}
