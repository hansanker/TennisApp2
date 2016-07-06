import { RouterConfig }          from '@angular/router';
import { StudentListComponent }     from './Student-list/Student-list.component';
import { StudentDetailComponent }   from './Student-detail/Student-detail.component';

export const StudentRoutes: RouterConfig = [
  { path: 'students',  component: StudentListComponent },
  { path: 'student/:id', component: StudentDetailComponent }
];
