import { Injectable, signal } from '@angular/core';
import { Expense } from '../models/expense.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private _expenses = signal<Expense[]>([]);

  expenses = this._expenses.asReadonly();

  add(expense: Omit<Expense, 'id'>) {

    const newExpense: Expense = {
      id: uuid(),
      ...expense
    };

    this._expenses.update(list => [...list, newExpense]);
  }

  update(updated: Expense) {
    this._expenses.update(list =>
      list.map(e => e.id === updated.id ? updated : e)
    );
  }

  remove(id: string) {
    this._expenses.update(list =>
      list.filter(e => e.id !== id)
    );
  }
}