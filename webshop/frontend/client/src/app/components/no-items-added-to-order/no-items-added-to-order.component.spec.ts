import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItemsAddedToOrderComponent } from './no-items-added-to-order.component';

describe('NoItemsAddedToOrderComponent', () => {
  let component: NoItemsAddedToOrderComponent;
  let fixture: ComponentFixture<NoItemsAddedToOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoItemsAddedToOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoItemsAddedToOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
