import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWinsComponent } from './project-wins.component';

describe('ProjectWinsComponent', () => {
  let component: ProjectWinsComponent;
  let fixture: ComponentFixture<ProjectWinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
