import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCourseDetailesComponent } from './full-course-detailes.component';

describe('FullCourseDetailesComponent', () => {
  let component: FullCourseDetailesComponent;
  let fixture: ComponentFixture<FullCourseDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullCourseDetailesComponent]
    });
    fixture = TestBed.createComponent(FullCourseDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
