/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { NgbModal, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './modal.service';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let modalService: NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule],
      providers: [ModalService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    const openSpy = spyOn(modalService, 'open').and.callThrough();

    component.open();

    expect(openSpy).toHaveBeenCalled();
  });

  it('should close modal', () => {
    const modalRef: NgbModalRef = modalService.open(component.modalContent);
    spyOn(modalRef, 'close');

    component['modalRef'] = modalRef;
    component.close();

    expect(modalRef.close).toHaveBeenCalled();
  });


});
