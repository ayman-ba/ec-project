import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcTextareaComponent } from './ec-textarea.component';

describe('EcTextareaComponent', () => {
  let component: EcTextareaComponent;
  let fixture: ComponentFixture<EcTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
