import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RevenueService } from './services/revenue.service';

@Component({
  selector: 'app-revenue-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
],
  templateUrl: './revenue-page.html',
  styleUrl: './revenue-page.scss',
})
export class RevenuePage {
  private formBuilder = inject(FormBuilder);
  private service = inject(RevenueService);

  revenues = this.service.revenues;
  
  form = this.formBuilder.group({
    description: [''],
    category: [''],
    amount: [0],
    date: ['']
  });

  displayedColumns = [
    'description',
    'category',
    'amount',
    'date',
    'actions'
  ];

  submit(){
    if(this.form.invalid) return;

    this.service.add(this.form.value as any);

    this.form.reset();
  } 
  
  remove(id: string) {
    this.service.remove(id);
  }
}
