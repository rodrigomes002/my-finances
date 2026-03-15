import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RevenueService } from '../revenue/services/revenue.service';
import { ExpensesService } from '../expense/services/expenses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private revenueService = inject(RevenueService)
  private expenseService = inject(ExpensesService)

  expenses = this.expenseService.expenses;
  revenues = this.revenueService.revenues;

  saldo = computed(() => {
    const totalExpenses = this.expenses().reduce((acc, expense) => acc + expense.amount, 0);
    const totalRevenues = this.revenues().reduce((acc, revenue) => acc + revenue.amount, 0);

    return totalRevenues - totalExpenses;
  });
}
