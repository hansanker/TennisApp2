import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Group, GroupService }  from '../group.service';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-group-detail',
  templateUrl: 'group-detail.component.html',
  styleUrls: ['group-detail.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})

export class GroupDetailComponent implements OnInit, OnDestroy {
  group: Group;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GroupService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getGroup(id).then(group => this.group = group);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  gotoGroups() { this.router.navigate(['/groups']); }
}