import { Component, OnInit } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";


@Component({
  moduleId: module.id,
  selector: 'app-today',
  templateUrl: 'today.component.html',
  styleUrls: ['today.component.css'],
  directives: [ MaterializeDirective],
})
export class TodayComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
