import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { Router} from "@angular/router";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogLogout.component.html',
  styleUrls: ['./dialogLogout.component.scss']
})
export class DialogLogoutComponent {

  constructor(public windowRef: NbWindowRef,
              private router: Router) {}

  close() {
    this.windowRef.close();
  }

  onLogout() {
    this.windowRef.close();
    this.router.navigate(['/','login']);
  }

}
