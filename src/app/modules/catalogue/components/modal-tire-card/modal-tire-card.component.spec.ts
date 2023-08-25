import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTireCardComponent } from './modal-tire-card.component';

describe('ModalTireCardComponent', () => {
  let component: ModalTireCardComponent;
  let fixture: ComponentFixture<ModalTireCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTireCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTireCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
