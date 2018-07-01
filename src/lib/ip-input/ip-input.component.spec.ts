import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpInputComponent } from './ip-input.component';

describe('IpInputComponent', () => {
  let component: IpInputComponent;
  let fixture: ComponentFixture<IpInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
