import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireCardComponent } from './tire-card.component';

describe('TireCardComponent', () => {
  let component: TireCardComponent;
  let fixture: ComponentFixture<TireCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TireCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TireCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
