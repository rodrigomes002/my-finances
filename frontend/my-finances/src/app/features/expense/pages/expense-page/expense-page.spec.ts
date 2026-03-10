import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensePage } from './expense-page';

describe('ExpensePage', () => {
  let component: ExpensePage;
  let fixture: ComponentFixture<ExpensePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
