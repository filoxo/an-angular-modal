import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and emit an open event', () => {
    expect(component.open).not.toBeUndefined();
    component.opened.subscribe($e => {
      expect($e).toBeNull();
      done();
    })
    component.open();
  })

  it('should close and emit a close event', () => {
    expect(component.close).not.toBeUndefined();
    component.closed.subscribe($e => {
      expect($e).toBeNull();
      done();
    })
    component.close();
  })
});
