import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1TextComponent } from './h1-text.component';

describe('H2TextComponent', () => {
  let component: H1TextComponent;
  let fixture: ComponentFixture<H1TextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1TextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
