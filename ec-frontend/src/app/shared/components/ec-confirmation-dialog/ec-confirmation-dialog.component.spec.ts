import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcConfirmationDialogComponent } from './ec-confirmation-dialog.component';

describe('EcConfirmationModalComponent', () => {
  let component: EcConfirmationDialogComponent;
  let fixture: ComponentFixture<EcConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EcConfirmationDialogComponent]
    });
    fixture = TestBed.createComponent(EcConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
