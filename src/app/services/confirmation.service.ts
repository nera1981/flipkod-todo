import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {
  ConfirmationButton,
  ConfirmationButtonAction,
  ConfirmationDialogComponent
} from '../components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(public dialog: MatDialog) {

  }

  show(title: string, buttons: ConfirmationButton[], message?: string, status?): Observable<ConfirmationButtonAction> {
    const config = new MatDialogConfig();
    config.width = '50%';
    config.height = '55%';
    config.disableClose = true;
    const confirmationModal = this.dialog.open<ConfirmationDialogComponent>(ConfirmationDialogComponent, config).componentInstance;
    confirmationModal.title = title;
    confirmationModal.message = message;
    confirmationModal.buttons = buttons;
    if (status && status === 'success') {
      confirmationModal.success = true;
    } else if (status && status === 'error') {
      confirmationModal.error = true;
    }
    return confirmationModal.dialogRef.afterClosed();
  }

  showHtml(title: string, buttons: Array<ConfirmationButton>, message?: string, status?): Observable<ConfirmationButtonAction> {
    const config = new MatDialogConfig();
    config.width = '500px';
    const confirmationModal = this.dialog.open<ConfirmationDialogComponent>(ConfirmationDialogComponent, config).componentInstance;
    confirmationModal.title = title;
    confirmationModal.message = message;
    confirmationModal.buttons = buttons;
    confirmationModal.html = true;
    if (status && status === 'success') {
      confirmationModal.success = true;
    } else if (status && status === 'error') {
      confirmationModal.error = true;
    }
    return confirmationModal.dialogRef.afterClosed();
  }

  ok(title: string, message?: string): Observable<ConfirmationButtonAction> {
    if (!message) {
      message = '';
    }
    return this.show(title, [{name: 'OK', action: ConfirmationButtonAction.CONFIRM}], message, 'success');
  }

  fail(title: string, message?: string): Observable<ConfirmationButtonAction> {
    if (!message) {
      message = '';
    }
    return this.show(title, [{name: 'OK', action: ConfirmationButtonAction.CONFIRM}], message, 'error');
  }

  failHtml(title: string, message: string): Observable<ConfirmationButtonAction> {
    return this.showHtml(title, [{name: 'OK', action: ConfirmationButtonAction.CONFIRM}], message, 'error');
  }

  areYouSureDelete(message?: string) {
    return this.show(
      'Warning?',
      [
        {name: 'Cancel', action: ConfirmationButtonAction.CANCEL, color: 'graydark'},
        {name: 'Confirm', action: ConfirmationButtonAction.CONFIRM, color: '#99ccff'}
      ],
      message
    );
  }
}
