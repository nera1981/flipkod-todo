import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  success: boolean;
  error: boolean;
  html: boolean;
  title: string;
  message: string;
  buttons: Array<ConfirmationButton> = [];

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
  }

  ngOnInit() {
  }

}

export interface ConfirmationButton {
  name: string;
  action: ConfirmationButtonAction,
  color?: string,
  textcolor?: string
}

export enum ConfirmationButtonAction {
  CONFIRM,
  CANCEL,
  THIRD

}
