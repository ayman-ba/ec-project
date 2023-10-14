import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'ec-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ],
  templateUrl: './ec-input.component.html',
  styleUrls: ['./ec-input.component.scss']
})
export class EcInputComponent implements OnInit, OnDestroy {

  @Input({required: true}) formControlKey = '';
  @Input({required: true}) label = '';
  @Input() type = 'text';

  constructor(private readonly parentContainer: ControlContainer) {
  }

  getParentFormGroup(): FormGroup {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.getParentFormGroup().addControl(
      this.formControlKey,
      new FormControl('', [])
    )
  }

  ngOnDestroy(): void {
    this.getParentFormGroup().removeControl(this.formControlKey);
  }

}
