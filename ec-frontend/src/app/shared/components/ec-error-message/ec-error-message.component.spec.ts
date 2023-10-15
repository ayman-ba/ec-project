import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcErrorMessageComponent } from './ec-error-message.component';

describe('EcErrorMessageComponent', () => {
  let component: EcErrorMessageComponent;
  let fixture: ComponentFixture<EcErrorMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcErrorMessageComponent]
    });
    fixture = TestBed.createComponent(EcErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
