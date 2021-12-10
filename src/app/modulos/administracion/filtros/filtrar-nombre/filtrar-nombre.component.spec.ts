import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarNombreComponent } from './filtrar-nombre.component';

describe('FiltrarNombreComponent', () => {
  let component: FiltrarNombreComponent;
  let fixture: ComponentFixture<FiltrarNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
