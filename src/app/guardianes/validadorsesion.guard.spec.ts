import { TestBed } from '@angular/core/testing';

import { ValidadorsesionGuard } from './validadorsesion.guard';

describe('ValidadorsesionGuard', () => {
  let guard: ValidadorsesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidadorsesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
