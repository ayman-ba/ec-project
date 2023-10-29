import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcButtonComponent } from './ec-button.component';

describe('EcButtonComponent', () => {
  let component: EcButtonComponent;
  let fixture: ComponentFixture<EcButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcButtonComponent]
    });
    fixture = TestBed.createComponent(EcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
