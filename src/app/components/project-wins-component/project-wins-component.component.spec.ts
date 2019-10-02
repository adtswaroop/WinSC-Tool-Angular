import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWinsComponentComponent } from './project-wins-component.component';

describe('ProjectWinsComponentComponent', () => {
  let component: ProjectWinsComponentComponent;
  let fixture: ComponentFixture<ProjectWinsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWinsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWinsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
