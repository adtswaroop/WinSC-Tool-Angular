import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHolderComponent } from './category-holder.component';

describe('CategoryHolderComponent', () => {
  let component: CategoryHolderComponent;
  let fixture: ComponentFixture<CategoryHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
