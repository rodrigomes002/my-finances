import { Injectable, signal } from '@angular/core';
import { Revenue } from '../models/revenue.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class RevenueService {
  private _revenues = signal<Revenue[]>([]);
  
  revenues = this._revenues.asReadonly();
  
  add(revenue: Omit<Revenue, 'id'>){
    const newRevenue: Revenue = {
      id: uuid(),
      ...revenue
    };

    this._revenues.update(list => [...list, newRevenue]);
  }
 
  remove(id: string) {
    this._revenues.update(list =>
      list.filter(e => e.id !== id)
    );
  }
}
