import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSettingsComponentComponent } from './project-settings-component.component';

describe('ProjectSettingsComponentComponent', () => {
  let component: ProjectSettingsComponentComponent;
  let fixture: ComponentFixture<ProjectSettingsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSettingsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSettingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
