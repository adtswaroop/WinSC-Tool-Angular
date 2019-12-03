import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent, ModalConfirmData } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  openConfirmModal(message: string, callBackFunction: Function) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: new ModalConfirmData({
        title: 'CONFIRM',
        content: message,
        confirmButtonLabel: 'Yes',
        closeButtonLabel: 'No'
      })
    });

    dialogRef.afterClosed().subscribe(result => callBackFunction(result));
  }
}
