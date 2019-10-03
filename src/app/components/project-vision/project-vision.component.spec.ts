import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVisionComponent } from './project-vision.component';

describe('WinConditionComponent', () => {
  let component: ProjectVisionComponent;
  let fixture: ComponentFixture<ProjectVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
