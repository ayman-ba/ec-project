import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcProductSummaryComponent } from './ec-product-summary.component';

describe('EcProductItemComponent', () => {
  let component: EcProductSummaryComponent;
  let fixture: ComponentFixture<EcProductSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcProductSummaryComponent]
    });
    fixture = TestBed.createComponent(EcProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
