import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {ConfirmationDialogModel} from "../../models/confirmation-dialog.model";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-ec-confirmation-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './ec-confirmation-dialog.component.html',
  styleUrls: ['./ec-confirmation-dialog.component.scss']
})
export class EcConfirmationDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public readonly confirmationDialogModel: ConfirmationDialogModel) {
  }

  onAgree(): void {
    this.confirmationDialogModel.agreeButtonFunction();
  }

  onNotAgree(): void {
    this.confirmationDialogModel.notAgreeButtonFunction();
  }
}
