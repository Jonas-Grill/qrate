import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogLogout.component.html',
  styleUrls: ['./dialogLogout.component.scss']
})
export class DialogLogoutComponent {

  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }

}
