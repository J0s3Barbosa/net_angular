/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateSalaryComponent } from './calculate-salary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('CalculateSalaryComponent', () => {
  let component: CalculateSalaryComponent;
  let fixture: ComponentFixture<CalculateSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
