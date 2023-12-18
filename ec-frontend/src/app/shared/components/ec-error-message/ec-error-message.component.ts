import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValidationErrors} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'ec-error-message',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule],
  templateUrl: './ec-error-message.component.html',
  styleUrls: ['./ec-error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcErrorMessageComponent {

  @Input() displayErrorMessage = true;
  errorMessage = '';

  private errorsKeysToMessages = new Map<string, string>([
    ['required', 'This field is required.'],
    ['email', 'This field is not a valid email.']
  ]);

  @Input({required: true}) set validationErrors(errors: ValidationErrors | null) {
      this.errorMessage = this.getFormControlErrorsMessages(errors);
  }

  getFormControlErrorsMessages(validationErrors: ValidationErrors | null): string {
    return validationErrors ?
      Object.keys(validationErrors).map(key => this.errorsKeysToMessages.get(key)).join(', ')
      : '';
  }
}
