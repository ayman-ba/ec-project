import {Component, inject, Input, OnInit} from '@angular/core';
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
export class EcInputComponent implements OnInit {

  @Input({required: true}) formControlKey = '';
  @Input({required: true}) label = '';
  @Input() type = 'text';
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() displayErrorMessage = true;
  formControl: FormControl<any> | null = null;

  constructor(private readonly parentContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.formControl = this.getFormControl();
  }

  getParentFormGroup(): FormGroup {
    return this.parentContainer.control as FormGroup;
  }

  getFormControl(): FormControl<any> {
    return this.getParentFormGroup().get(this.formControlKey) as FormControl;
  }

}
