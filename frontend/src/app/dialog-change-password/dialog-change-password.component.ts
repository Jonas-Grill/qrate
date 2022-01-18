import {Component, QueryList, ViewChildren} from '@angular/core';
import {NbPopoverDirective, NbWindowRef} from "@nebular/theme";

@Component({
  selector: 'app-dialog-change-password',
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.scss']
})
export class DialogChangePasswordComponent {
  password: any;
  passwordnew: any;
  passwordnewrep: any;
  userpassword: any;
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
    this.userpassword = "123";

    if (!this.password || this.password !== this.userpassword) {
      this.passwordPopover = "Dein altes Passwort ist falsch";
      this.popovers?.filter(item => item.popoverClass == "password").shift()?.show();
    }
    if (!this.passwordnew || this.passwordnew.length === 0) {
      this.passwordNewPopover = "Bitte gib ein Passwort ein";
      this.popovers?.filter(item => item.popoverClass == "passwordnew").shift()?.show();
    } else if (this.passwordnew && this.passwordnew.length < 8) {
      this.passwordNewPopover = "Das Passwort ist nicht sicher genug";
      this.popovers?.filter(item => item.popoverClass == "passwordnew").shift()?.show();
    }
    if (this.passwordnew !== this.passwordnewrep) {
      this.passwordNewRepPopover = "Die Passwörter stimmen nicht überein";
      this.popovers?.filter(item => item.popoverClass == "passwordnewrep").shift()?.show();
    }
  }

  close() {
    this.windowRef.close();
  }
}
