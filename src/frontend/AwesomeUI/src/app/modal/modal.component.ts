import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalService } from './modal.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [ModalService],

})
 
export class ModalComponent  {
  @Input() title: string = 'Modal Title';
  @Input() message: string = 'Modal Message';
  private modalRef!: NgbModalRef;

  @ViewChild('content') modalContent!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {
    // Initialize modalRef to satisfy TypeScript
    this.modalRef = {} as NgbModalRef;
  }

  open() {
    this.modalRef = this.modalService.open(this.modalContent, { centered: true });
    if (this.modalRef.componentInstance) {
      this.modalRef.componentInstance.title = this.title;
      this.modalRef.componentInstance.message = this.message;
    }
  }
  
  close() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }


}
