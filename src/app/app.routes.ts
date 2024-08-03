import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './shared/filter/filter.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "filter",
        component: FilterComponent
    }
];
