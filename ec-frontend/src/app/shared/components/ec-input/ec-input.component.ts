import {Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {EcErrorMessageComponent} from "../ec-error-message/ec-error-message.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {InputType} from "../../../core/types/input.type";

@Component({
  selector: 'ec-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EcErrorMessageComponent,
    MatFormFieldModule, MatInputModule],
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
  @Input() type: InputType = 'text';
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() displayErrorMessage = true;
  formControl!: FormControl;

  constructor(private readonly parentContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.formControl = this.getFormControl();
  }

  getParentFormGroup(): FormGroup {
    return this.parentContainer.control as FormGroup;
  }

  getFormControl(): FormControl {
    return this.getParentFormGroup().get(this.formControlKey) as FormControl;
  }

}
