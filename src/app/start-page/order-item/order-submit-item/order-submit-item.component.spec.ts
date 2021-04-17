import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSubmitItemComponent } from './order-submit-item.component';

describe('OrderSubmitItemComponent', () => {
  let component: OrderSubmitItemComponent;
  let fixture: ComponentFixture<OrderSubmitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSubmitItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSubmitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
