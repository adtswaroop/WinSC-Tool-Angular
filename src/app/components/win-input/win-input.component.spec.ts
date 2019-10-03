import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinInputComponent } from './win-input.component';

describe('WinInputComponent', () => {
  let component: WinInputComponent;
  let fixture: ComponentFixture<WinInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
