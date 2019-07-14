import { TestBed, async, inject } from '@angular/core/testing';

import { RegisterGuard } from './register.guard';

describe('RegisterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterGuard]
    });
  });

  it('should ...', inject([RegisterGuard], (guard: RegisterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
