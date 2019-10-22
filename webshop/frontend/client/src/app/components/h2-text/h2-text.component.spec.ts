/* Author: mk303 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H2TextComponent } from './h2-text.component';

describe('H2TextComponent', () => {
  let component: H2TextComponent;
  let fixture: ComponentFixture<H2TextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H2TextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H2TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
