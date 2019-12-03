import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ModalConfirmData
  ) { }

}

export class ModalConfirmData {
  title: string;
  content: string;
  confirmButtonLabel: string;
  closeButtonLabel: string;

  constructor(data?) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.confirmButtonLabel = data.confirmButtonLabel;
      this.closeButtonLabel = data.closeButtonLabel;
    }
  }
}
