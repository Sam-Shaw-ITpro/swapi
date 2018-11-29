import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiformComponent } from './swapiform.component';

describe('SwapiformComponent', () => {
  let component: SwapiformComponent;
  let fixture: ComponentFixture<SwapiformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
