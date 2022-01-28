import {Component, QueryList, ViewChildren} from '@angular/core';
import {NbPopoverDirective, NbWindowRef} from "@nebular/theme";

@Component({
  selector: 'app-dialog-change-password',
  templateUrl: './dialogChangePassword.component.html',
  styleUrls: ['./dialogChangePassword.component.scss']
})
export class DialogChangePasswordComponent {
  password: any;
  passwordNew: any;
  passwordNewRep: any;
  userPassword: any;
  passwordPopover: any;
  passwordNewPopover: any;
  passwordNewRepPopover: any;

  @ViewChildren(NbPopoverDirective) popovers: QueryList<NbPopoverDirective> | undefined;

  constructor(public windowRef: NbWindowRef) {
  }

  onInput(): void {
    this.popovers?.forEach(popover => popover.hide())
  }

  onSubmitClick(): void {
    this.userPassword = "123";

    if (!this.password || this.password !== this.userPassword) {
      this.passwordPopover = "Dein altes Passwort ist falsch";
      this.popovers?.filter(item => item.popoverClass == "password").shift()?.show();
    }
    if (!this.passwordNew || this.passwordNew.length === 0) {
      this.passwordNewPopover = "Bitte gib ein Passwort ein";
      this.popovers?.filter(item => item.popoverClass == "passwordnew").shift()?.show();
    } else if (this.passwordNew && this.passwordNew.length < 8) {
      this.passwordNewPopover = "Das Passwort ist nicht sicher genug";
      this.popovers?.filter(item => item.popoverClass == "passwordnew").shift()?.show();
    }
    if (this.passwordNew !== this.passwordNewRep) {
      this.passwordNewRepPopover = "Die Passwörter stimmen nicht überein";
      this.popovers?.filter(item => item.popoverClass == "passwordnewrep").shift()?.show();
    }
  }

  close() {
    this.windowRef.close();
  }
}
