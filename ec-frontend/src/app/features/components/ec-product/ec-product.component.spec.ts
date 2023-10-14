import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcProductComponent } from './ec-product.component';

describe('ProductComponent', () => {
  let component: EcProductComponent;
  let fixture: ComponentFixture<EcProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcProductComponent]
    });
    fixture = TestBed.createComponent(EcProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
