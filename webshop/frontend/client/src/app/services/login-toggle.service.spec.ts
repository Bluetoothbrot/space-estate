/* Author: mk303 */
import { TestBed } from '@angular/core/testing';

import { LoginToggleService } from './login-toggle.service';

describe('LoginToggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginToggleService = TestBed.get(LoginToggleService);
    expect(service).toBeTruthy();
  });
});
