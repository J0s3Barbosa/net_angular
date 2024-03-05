import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.css'],
  imports: [ CommonModule]
})

export class WeekDaysComponent implements OnInit {
  @Input() selectedDay: string = '';
  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() { }

  ngOnInit() {
  }

  filterDays() {
    return this.daysOfWeek.filter(day => day.toLowerCase().includes(this.selectedDay.toLowerCase()));
  }

  onInputChange(event : any) {
    this.selectedDay = event.target.value;

  }

}
