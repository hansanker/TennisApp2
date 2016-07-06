import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GroupService }   from './group/group.service';
import { LessonService }   from './lesson/lesson.service';
import { MaterializeDirective } from "angular2-materialize";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MaterializeDirective],
  providers: [GroupService, LessonService]
})

export class AppComponent {
  title = 'Sport Skills';
}

