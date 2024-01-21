import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInstituteDetailesComponent } from './full-institute-detailes.component';

describe('FullInstituteDetailesComponent', () => {
  let component: FullInstituteDetailesComponent;
  let fixture: ComponentFixture<FullInstituteDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullInstituteDetailesComponent]
    });
    fixture = TestBed.createComponent(FullInstituteDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
