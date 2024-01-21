import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReauestedComponentsComponent } from './reauested-components.component';

describe('ReauestedComponentsComponent', () => {
  let component: ReauestedComponentsComponent;
  let fixture: ComponentFixture<ReauestedComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReauestedComponentsComponent]
    });
    fixture = TestBed.createComponent(ReauestedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
