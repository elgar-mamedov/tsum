import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountOfChildrenComponent } from './amount-of-children.component';

describe('AmountOfChildrenComponent', () => {
  let component: AmountOfChildrenComponent;
  let fixture: ComponentFixture<AmountOfChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountOfChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountOfChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
