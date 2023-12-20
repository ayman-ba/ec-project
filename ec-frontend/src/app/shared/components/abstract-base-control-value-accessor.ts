import {ControlValueAccessor, FormControl, FormControlName, FormGroupDirective, NgControl} from "@angular/forms";
import {inject, Injectable, Injector, OnInit} from "@angular/core";
import {OnChangeFn, OnTouchFn} from "../types/shared.type";

@Injectable()
export abstract class AbstractBaseControlValueAccessor<T> implements ControlValueAccessor, OnInit {

  protected onChange: OnChangeFn<T> = () => {
  };
  protected onTouch: OnTouchFn = () => {
  };
  readonly #injector = inject(Injector, {self: true});
  protected  control!: FormControl;
  protected isDisabled = false;
  protected value!: T;

  ngOnInit(): void {
    this.control = this.getFormControl();
  }

  writeValue(newValue: T): void {
    if (newValue == null || this.isDisabled) {
      return;
    }
    this.value = newValue;
  }

  registerOnChange(fn: OnChangeFn<T>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchFn): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onFocusout(): void {
    this.onTouch();
  }

  private getFormControl(): FormControl {
    const injectedNgControl: NgControl = this.#injector.get(NgControl);
    if (!(injectedNgControl instanceof FormControlName)) {
      throw new Error('Control is not instance of FormControlName');
    }
    return this.#injector.get(FormGroupDirective).getControl(injectedNgControl);
  }

}
