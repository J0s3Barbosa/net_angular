import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalState = new BehaviorSubject<boolean>(false);

  showModal() {
    this.modalState.next(true);
  }

  hideModal() {
    this.modalState.next(false);
  }

  getModalState() {
    return this.modalState.asObservable();
  }
}
