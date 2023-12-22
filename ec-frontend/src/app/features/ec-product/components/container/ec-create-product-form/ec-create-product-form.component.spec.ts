import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcCreateProductFormComponent } from './ec-create-product-form.component';

describe('EcCreateProductFormComponent', () => {
  let component: EcCreateProductFormComponent;
  let fixture: ComponentFixture<EcCreateProductFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcCreateProductFormComponent]
    });
    fixture = TestBed.createComponent(EcCreateProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
