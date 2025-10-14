import { Routes } from '@angular/router';
import { Busca } from './busca/busca'
export const routes: Routes = [
    {path: 'busca', component: Busca},
    {path: '', redirectTo: '/busca', pathMatch: 'full'}
];
