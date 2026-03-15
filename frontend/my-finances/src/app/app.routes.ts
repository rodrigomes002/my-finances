import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>
        import('./features/dashboard/dashboard')
            .then(m => m.Dashboard)
    },
    {
        path: 'despesas',
        loadComponent: () =>
        import('./features/expense/pages/expense-page/expense-page')
            .then(m => m.ExpensePage)
    },
    {
        path: 'receitas',
        loadComponent: () =>
        import('./features/revenue/revenue-page')
            .then(m => m.RevenuePage)
    }
];
