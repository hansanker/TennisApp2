import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { Group, GroupService }   from '../group.service';

@Component({
  moduleId: module.id,
  selector: 'app-group-list',
  templateUrl: 'group-list.component.html',
  styleUrls: ['group-list.component.css']
})

export class GroupListComponent implements OnInit {
  groups: Group[];

  constructor(
    private router: Router,
    private service: GroupService) { }

  ngOnInit() {
    this.service.getGroups().then(groups => this.groups = groups);
  }

  onSelect(group: Group) {
    this.router.navigate(['/group', group.id]);
  }


}
