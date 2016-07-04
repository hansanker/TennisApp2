import { RouterConfig }          from '@angular/router';
import { GroupListComponent }     from './Group-list.component';
import { GroupDetailComponent }   from './Group-detail.component';

export const GroupsRoutes: RouterConfig = [
  { path: 'groups',  component: GroupListComponent },
  { path: 'group/:id', component: GroupDetailComponent }
];
