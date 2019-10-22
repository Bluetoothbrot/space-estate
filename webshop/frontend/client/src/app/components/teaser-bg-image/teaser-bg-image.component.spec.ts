import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserBgImageComponent } from './teaser-bg-image.component';

describe('TeaserBgImageComponent', () => {
  let component: TeaserBgImageComponent;
  let fixture: ComponentFixture<TeaserBgImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaserBgImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserBgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
