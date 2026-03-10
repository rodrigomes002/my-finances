import { Component, inject } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { ExpenseForm } from "../../components/expense-form/expense-form";
import { MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-expense-page',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ExpenseForm
],
  templateUrl: './expense-page.html',
  styleUrl: './expense-page.scss',
})
export class ExpensePage {
  private service = inject(ExpensesService);

  expenses = this.service.expenses;

  displayedColumns = [
    'description',
    'category',
    'amount',
    'date',
    'actions'
  ];

  remove(id: string) {
    this.service.remove(id);
  }
}
