import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ValidationErrors} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'ec-error-message',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule],
  templateUrl: './ec-error-message.component.html',
  styleUrls: ['./ec-error-message.component.scss']
})
export class EcErrorMessageComponent implements OnInit {

  @Input({required: true}) control!: FormControl | null;
  @Input() displayErrorMessage = true;
  errorMessage = '';

  private errorsKeysToMessages = new Map<string, string>([
    ['required', 'This field is required.'],
    ['email', 'This field is not a valid email.']
  ]);

  ngOnInit(): void {
    this.errorMessage = this.getFormControlErrorsMessages();
  }

  getFormControlErrorsMessages(): string {
    const controlErrors: ValidationErrors | null | undefined = this.control?.errors;
    return controlErrors ?
      Object.keys(controlErrors).map(key => this.errorsKeysToMessages.get(key)).join(', ')
      : '';
  }
}
