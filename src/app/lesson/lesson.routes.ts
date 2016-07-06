import { RouterConfig }          from '@angular/router';
import { LessonListComponent }     from './Lesson-list/Lesson-list.component';
import { LessonDetailComponent }   from './Lesson-detail/Lesson-detail.component';

export const LessonRoutes: RouterConfig = [
  { path: 'lessons',  component: LessonListComponent },
  { path: 'lesson/:id', component: LessonDetailComponent }
];
