import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'ec-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './ec-button.component.html',
  styleUrls: ['./ec-button.component.scss']
})
export class EcButtonComponent {

  @Input({required: true}) text = '';
  @Input() disabled = false;
  @Input() type = 'submit';
  @Output() onClickEvent = new EventEmitter<unknown>();

  onClick(event: unknown): void {
    this.onClickEvent.emit(event);
  }

}
