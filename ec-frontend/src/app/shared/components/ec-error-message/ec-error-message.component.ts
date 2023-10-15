import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'ec-error-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ec-error-message.component.html',
  styleUrls: ['./ec-error-message.component.scss']
})
export class EcErrorMessageComponent {

  @Input({required: true}) control: FormControl | null;
  @Input() displayErrorMessage = true;

}
