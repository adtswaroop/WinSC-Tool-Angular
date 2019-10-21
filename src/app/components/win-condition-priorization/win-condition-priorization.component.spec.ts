import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinConditionPriorizationComponent } from './win-condition-priorization.component';

describe('WinConditionPriorizationComponent', () => {
  let component: WinConditionPriorizationComponent;
  let fixture: ComponentFixture<WinConditionPriorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinConditionPriorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinConditionPriorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
