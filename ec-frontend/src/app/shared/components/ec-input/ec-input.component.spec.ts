import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcInputComponent } from './ec-input.component';

describe('EcInputComponent', () => {
  let component: EcInputComponent;
  let fixture: ComponentFixture<EcInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcInputComponent]
    });
    fixture = TestBed.createComponent(EcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
