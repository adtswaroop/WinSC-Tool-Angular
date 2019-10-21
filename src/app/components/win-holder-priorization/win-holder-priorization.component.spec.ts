import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinHolderPriorizationComponent } from './win-holder-priorization.component';

describe('WinHolderPriorizationComponent', () => {
  let component: WinHolderPriorizationComponent;
  let fixture: ComponentFixture<WinHolderPriorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinHolderPriorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinHolderPriorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
