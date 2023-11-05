import {Injectable} from "@angular/core";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogModel} from "../models/confirmation-dialog.model";
import {EcConfirmationDialogComponent} from "../components/ec-confirmation-dialog/ec-confirmation-dialog.component";
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private readonly matDialog: MatDialog) {
  }

  openDialog<C, D>(component: ComponentType<C>, data: D) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    dialogConfig.width = '60%';
    return this.matDialog.open(component, dialogConfig);
  }

  openConfirmationDialog(confirmationDialogModel: ConfirmationDialogModel): MatDialogRef<any> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = confirmationDialogModel;
    return this.matDialog.open(EcConfirmationDialogComponent, dialogConfig);
  }
}
