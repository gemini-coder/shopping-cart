import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketQuickViewComponent } from './basket-quick-view.component';

describe('BasketQuickViewComponent', () => {
  let component: BasketQuickViewComponent;
  let fixture: ComponentFixture<BasketQuickViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketQuickViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
