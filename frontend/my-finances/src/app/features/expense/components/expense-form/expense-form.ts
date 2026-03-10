import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ExpensesService } from '../../services/expenses.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './expense-form.html',
  styleUrl: './expense-form.scss',
})
export class ExpenseForm {
  private fb = inject(FormBuilder);
  private service = inject(ExpensesService);

  form = this.fb.group({
    description: [''],
    category: [''],
    amount: [0],
    date: ['']
  });

  submit() {

    if (this.form.invalid) return;

    this.service.add(this.form.value as any);

    this.form.reset();
  }
}
