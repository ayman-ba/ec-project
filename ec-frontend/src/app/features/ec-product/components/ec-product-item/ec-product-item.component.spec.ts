import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcProductItemComponent } from './ec-product-item.component';

describe('EcProductItemComponent', () => {
  let component: EcProductItemComponent;
  let fixture: ComponentFixture<EcProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcProductItemComponent]
    });
    fixture = TestBed.createComponent(EcProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
