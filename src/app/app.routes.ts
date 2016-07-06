import { provideRouter, RouterConfig } from '@angular/router';
import { TodayComponent } from  './today/today.component';
import { GroupRoutes } from  './group/group.routes';
import { LessonRoutes } from  './lesson/lesson.routes';
import { StudentRoutes } from  './student/student.routes';

export const routes: RouterConfig = [
  ...GroupRoutes, ...LessonRoutes, ...StudentRoutes,
  { path: 'today', component: TodayComponent }

  // { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

