import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIpLibComponent } from './ng-ip-form-lib.component';

describe('NgIpLibComponent', () => {
  let component: NgIpLibComponent;
  let fixture: ComponentFixture<NgIpLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIpLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIpLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
