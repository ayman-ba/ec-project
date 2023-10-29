import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcProductsPageComponent } from './ec-products-page.component';

describe('EcProductsPageComponent', () => {
  let component: EcProductsPageComponent;
  let fixture: ComponentFixture<EcProductsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcProductsPageComponent]
    });
    fixture = TestBed.createComponent(EcProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
