import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./listado-empleados/listado-empleados.component') 
    },
    {
        path: 'nuevo',
        loadComponent: () => import('./empleados-form/empleados-form.component')
    },
    {
        path: ':id/editar',
        loadComponent: () => import('./empleados-form/empleados-form.component')
    }
];
