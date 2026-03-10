import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>
        import('./features/dashboard/dashboard')
            .then(m => m.Dashboard)
    },
    {
        path: 'receitas',
        loadComponent: () =>
        import('./features/expense/pages/expense-page/expense-page')
            .then(m => m.ExpensePage)
    }
];
