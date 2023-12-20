import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcSelectComponent } from './ec-select.component';

describe('EcSelectComponent', () => {
  let component: EcSelectComponent;
  let fixture: ComponentFixture<EcSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
