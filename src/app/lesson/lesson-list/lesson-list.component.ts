import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { Lesson, LessonService }   from '../lesson.service';


@Component({
  moduleId: module.id,
  selector: 'app-lesson-list',
  templateUrl: 'lesson-list.component.html',
  styleUrls: ['lesson-list.component.css']
})

export class LessonListComponent implements OnInit {
  lessons: Lesson[];

  constructor(
    private router: Router,
    private service: LessonService) { }


  ngOnInit() {
    this.service.getLessons().then(lessons => this.lessons = lessons);
  }

  onSelect(lesson: Lesson) {
    this.router.navigate(['/lesson', lesson.id]);
  }
}
