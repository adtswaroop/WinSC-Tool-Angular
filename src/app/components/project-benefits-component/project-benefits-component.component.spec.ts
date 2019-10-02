import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBenefitsComponentComponent } from './project-benefits-component.component';

describe('ProjectBenefitsComponentComponent', () => {
  let component: ProjectBenefitsComponentComponent;
  let fixture: ComponentFixture<ProjectBenefitsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBenefitsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBenefitsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
