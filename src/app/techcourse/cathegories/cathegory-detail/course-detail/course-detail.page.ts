import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/techcourse/chapter.model';
import { Courses } from 'src/app/techcourse/courses.model';
import { Techcourse } from 'src/app/techcourse/techcourses.model';
import { TechcoursesService } from 'src/app/techcourse/techcourses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
courses: Courses
  constructor(
    private route : ActivatedRoute,
    private courseService : TechcoursesService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param=>{

      let id= param.get("categoryId");
      let idcourse= param.get("courseId");
      this.courses=this.courseService.getOneCategory(id).courses.find(cours=>cours.id==idcourse);
      console.log(this.courses);
    })

}
}
