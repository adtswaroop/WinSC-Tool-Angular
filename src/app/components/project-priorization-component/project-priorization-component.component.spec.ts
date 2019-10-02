import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPriorizationComponentComponent } from './project-priorization-component.component';

describe('ProjectPriorizationComponentComponent', () => {
  let component: ProjectPriorizationComponentComponent;
  let fixture: ComponentFixture<ProjectPriorizationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPriorizationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPriorizationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
