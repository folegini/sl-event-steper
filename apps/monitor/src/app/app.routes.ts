import { Route } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';

export const appRoutes: Route[] = [
    {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];
