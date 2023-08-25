import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireListComponent } from './tire-list.component';

describe('TireListComponent', () => {
  let component: TireListComponent;
  let fixture: ComponentFixture<TireListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TireListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
