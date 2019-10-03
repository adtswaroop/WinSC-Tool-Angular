import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinHolderComponent } from './win-holder.component';

describe('WinHolderComponent', () => {
  let component: WinHolderComponent;
  let fixture: ComponentFixture<WinHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
