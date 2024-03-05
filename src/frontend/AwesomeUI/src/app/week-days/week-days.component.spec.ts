/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDaysComponent } from './week-days.component';
import { CommonModule } from '@angular/common';

describe('WeekDaysComponent', () => {
  let component: WeekDaysComponent;
  let fixture: ComponentFixture<WeekDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.selectedDay).toBe('');
    expect(component.daysOfWeek).toEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
  });

  it('should filter days correctly', () => {
    component.selectedDay = 'Mon';
    expect(component.filterDays()).toEqual(['Monday']);
  });

  it('should handle input change', () => {
    const inputEvent = { target: { value: 'Tue' } };
    component.onInputChange(inputEvent);
    expect(component.selectedDay).toBe('Tue');
  });

});
