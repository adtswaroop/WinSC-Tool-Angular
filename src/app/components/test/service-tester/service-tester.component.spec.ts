import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTesterComponent } from './service-tester.component';

describe('ServiceTesterComponent', () => {
  let component: ServiceTesterComponent;
  let fixture: ComponentFixture<ServiceTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
