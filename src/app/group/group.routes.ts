import { RouterConfig }          from '@angular/router';
import { GroupListComponent }     from './group-list/Group-list.component';
import { GroupDetailComponent }   from './group-detail/Group-detail.component';

export const GroupRoutes: RouterConfig = [
  { path: 'groups',  component: GroupListComponent },
  { path: 'group/:id', component: GroupDetailComponent }
];
