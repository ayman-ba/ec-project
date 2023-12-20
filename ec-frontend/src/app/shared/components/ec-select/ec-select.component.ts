import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectChange, MatSelectModule} from "@angular/material/select";
import {OptionType} from "../../../core/types/option.type";
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {AbstractBaseControlValueAccessor} from "../abstract-base-control-value-accessor";
import {EcErrorMessageComponent} from "../ec-error-message/ec-error-message.component";

@Component({
  selector: 'ec-select',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, EcErrorMessageComponent],
  templateUrl: './ec-select.component.html',
  styleUrl: './ec-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: EcSelectComponent
    }
  ]
})
export class EcSelectComponent<T> extends AbstractBaseControlValueAccessor<T>{

  @Input({required: true}) label!: string;
  @Input({required: true}) options!: OptionType<T>[];

  onSelectionChange(event: MatSelectChange): void {
    this.onChange(event.value)
  }

}


