/* Author: mk303 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginToggleComponent } from './login-toggle.component';

describe('LoginToggleComponent', () => {
  let component: LoginToggleComponent;
  let fixture: ComponentFixture<LoginToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
