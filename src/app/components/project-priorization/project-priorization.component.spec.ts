import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPriorizationComponent } from './project-priorization.component';

describe('ProjectPriorizationComponent', () => {
  let component: ProjectPriorizationComponent;
  let fixture: ComponentFixture<ProjectPriorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPriorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPriorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
