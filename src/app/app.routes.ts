import { provideRouter, RouterConfig } from '@angular/router';
import { TodayComponent } from  './today/today.component';
import { GroupsRoutes } from  './groups/groups.routes';

export const routes: RouterConfig = [
  ...GroupsRoutes,
  { path: 'today', component: TodayComponent }

  // { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
