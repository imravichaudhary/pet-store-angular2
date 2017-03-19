import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'view-pets',
        component: ViewComponent
    },
    {
        path: 'add-pet',
        component: AddComponent
    },
    {
        path: 'delete-pet',
        component: DeleteComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);