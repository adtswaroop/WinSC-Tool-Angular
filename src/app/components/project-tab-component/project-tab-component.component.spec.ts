import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTabComponentComponent } from './project-tab-component.component';

describe('ProjectTabComponentComponent', () => {
  let component: ProjectTabComponentComponent;
  let fixture: ComponentFixture<ProjectTabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
