import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBankDetailesComponent } from './full-bank-detailes.component';

describe('FullBankDetailesComponent', () => {
  let component: FullBankDetailesComponent;
  let fixture: ComponentFixture<FullBankDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullBankDetailesComponent]
    });
    fixture = TestBed.createComponent(FullBankDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
