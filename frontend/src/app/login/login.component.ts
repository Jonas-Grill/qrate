import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {NbPopoverDirective} from "@nebular/theme";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isRegister = true;

  email: any;
  username: any;
  password: any;
  repeatPassword: any;

  emailPopover: any;
  usernamePopover: any;
  passwordPopover: any;
  passwordRepeatPopover: any;

  re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  @ViewChildren(NbPopoverDirective) popovers: QueryList<NbPopoverDirective> | undefined;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  updateIsLogin(value: any): void {
    if (value.length === 0) {
      this.isRegister = !this.isRegister;
    } else {
      this.isRegister = value.includes('Register');
    }
    this.cd.markForCheck();
  }

  onInput(): void {
    this.popovers?.forEach(popover => popover.hide())
  }

  onSubmitClick(): void {
    if (!this.email || this.email.length === 0) {
      this.emailPopover = "Bitte gib deine E-Mail Adresse ein";
      this.popovers?.filter(item => item.popoverClass == "email").shift()?.show();
    } else if (!this.re.test(this.email)) {
      this.emailPopover = "Bitte gib eine gültige E-Mail Adresse ein";
      this.popovers?.filter(item => item.popoverClass == "email").shift()?.show();
    }
    if (!this.password || this.password.length === 0) {
      this.passwordPopover = "Bitte gib ein Passwort ein";
      this.popovers?.filter(item => item.popoverClass == "password").shift()?.show();
    }
    if (this.isRegister) {
      if (this.password && this.password.length < 8) {
        this.passwordPopover = "Das passwort ist nicht sicher genug";
        this.popovers?.filter(item => item.popoverClass == "password").shift()?.show();
      } else if (this.password !== this.repeatPassword) {
        this.passwordPopover = "Die Passwörter stimmen nicht überein";
        this.popovers?.filter(item => item.popoverClass == "password").shift()?.show();
      }
      if (!this.username || this.username.length === 0) {
        this.usernamePopover = "Bitte überlege dir einen Username";
        this.popovers?.filter(item => item.popoverClass == "username").shift()?.show();
      } else if (this.username == "Gina") {
        this.usernamePopover = "Dieser Username ist schon vergeben";
        this.popovers?.filter(item => item.popoverClass == "username").shift()?.show();
      }
    }
  }
}


