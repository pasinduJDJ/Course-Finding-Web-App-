import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithContentBtnComponent } from './title-with-content-btn.component';

describe('TitleWithContentBtnComponent', () => {
  let component: TitleWithContentBtnComponent;
  let fixture: ComponentFixture<TitleWithContentBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleWithContentBtnComponent]
    });
    fixture = TestBed.createComponent(TitleWithContentBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
