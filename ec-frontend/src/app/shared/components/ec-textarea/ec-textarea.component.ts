import {ChangeDetectionStrategy, Component, inject, Injector, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  FormControlName,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl
} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {OnChangeFn, OnTouchFn} from "../../types/shared.type";
import {TextFieldModule} from "@angular/cdk/text-field";
import {EcErrorMessageComponent} from "../ec-error-message/ec-error-message.component";

@Component({
  selector: 'ec-textarea',
  standalone: true,
  imports: [CommonModule, MatInputModule, TextFieldModule, EcErrorMessageComponent],
  templateUrl: './ec-textarea.component.html',
  styleUrl: './ec-textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: EcTextareaComponent
    }
  ]
})
export class EcTextareaComponent implements ControlValueAccessor, OnInit {

  value = '';
  @Input({required: true}) label!: string;
  @Input() isDisabled = false;
  @Input() rows = 3;
  private injector = inject(Injector, {self: true});
  control!: FormControl;

  private onChange: OnChangeFn<string> = () => {
  };
  private onTouch: OnTouchFn = () => {
  };

  ngOnInit(): void {
    this.control = this.getFormControl();
  }

  writeValue(obj: string): void {
    if (!obj || this.isDisabled) {
      return;
    }
    this.value = obj;
  }

  registerOnChange(fn: OnChangeFn<string>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchFn): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onValueChange(event: any): void {
    const value = event.target.value;
    this.onChange(value);
  }

  onFocusout(): void {
    this.onTouch();
  }

  private getFormControl(): FormControl {
    const injectedNgControl: NgControl = this.injector.get(NgControl);
    if (!(injectedNgControl instanceof FormControlName)) {
      throw new Error('Control is not instance of FormControlName');
    }
    return this.injector.get(FormGroupDirective).getControl(injectedNgControl);
  }

}
