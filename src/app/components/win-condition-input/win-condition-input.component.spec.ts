import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinConditionInputComponent } from './win-condition-input.component';

describe('WinConditionInputComponent', () => {
  let component: WinConditionInputComponent;
  let fixture: ComponentFixture<WinConditionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinConditionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinConditionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
