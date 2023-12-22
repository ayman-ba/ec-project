import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {TextFieldModule} from "@angular/cdk/text-field";
import {EcErrorMessageComponent} from "../ec-error-message/ec-error-message.component";
import {AbstractBaseControlValueAccessor} from "../abstract-base-control-value-accessor";

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
export class EcTextareaComponent extends AbstractBaseControlValueAccessor<string> {

  @Input({required: true}) label!: string;
  @Input() rows = 3;

  onValueChange(event: any): void {
    const {value} = event.target;
    this.onChange(value);
  }

}
