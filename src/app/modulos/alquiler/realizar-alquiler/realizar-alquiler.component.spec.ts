import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarAlquilerComponent } from './realizar-alquiler.component';

describe('RealizarAlquilerComponent', () => {
  let component: RealizarAlquilerComponent;
  let fixture: ComponentFixture<RealizarAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
