import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar, private zone: NgZone) { }

  showSnackBar(msg: string) {
    this.zone.run(() => {this.snackBar.open(msg, null, {duration: 5000});
    });
  }
}
