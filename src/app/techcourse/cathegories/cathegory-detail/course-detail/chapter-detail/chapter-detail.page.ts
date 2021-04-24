import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/techcourse/chapter.model';
import { TechcoursesService } from 'src/app/techcourse/techcourses.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.page.html',
  styleUrls: ['./chapter-detail.page.scss'],
})
export class ChapterDetailPage implements OnInit {
chapters: Chapter
  constructor(
    private route : ActivatedRoute,
    private chapterService : TechcoursesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      let id= param.get("categoryId");
      let idcourse= param.get("courseId");
      let idchapter= param.get("chapterId");
      this.chapters=this.chapterService.getOneCategory(id).courses.find(cours=>cours.id==idcourse).chapters.find(chapter=> chapter.id==idchapter);
      console.log(this.chapters);
    })
}
}
