import { Component, OnInit, ViewChild } from '@angular/core';
import { WeekDaysComponent } from '../week-days/week-days.component';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-calculate-salary',
  templateUrl: './calculate-salary.component.html',
  styleUrls: ['./calculate-salary.component.css'],
  imports: [ WeekDaysComponent, ModalComponent, CommonModule, FormsModule]

})
export class CalculateSalaryComponent implements OnInit {

  // property binding
  // a property binding to a component tag, we use the [attribute] = "value" syntax
  salary: number = 5000;
  isSalaryReadonly = false;
  canUpdateSalary = true; 
  parentSelectedDay: string = 'Mon'; 
  isModalOpen: boolean = false;

  modalMessage : string = '';
  modalTitle : string = 'Calculate Salary';
  
  ngOnInit(): void {
  }

  // Event Binding
  onSalaryInput(event : any) {
    this.salary = event.target.value;
    this.isModalOpen = true;

   }

   onUpdateSalary() {
    this.openModal("Salary updated to " + this.salary);
   }

   @ViewChild('modal') modal!: ModalComponent;
  
   openModal(message: any) {
    this.modalMessage = message;
     this.modal.open();
   }
   closeModal() {
     this.modal.close();
   }
  
}
