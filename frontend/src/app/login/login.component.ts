import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {NbPopoverDirective} from "@nebular/theme";
import {Router} from "@angular/router";

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

  constructor(private cd: ChangeDetectorRef, private router: Router) {
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
      this.showPopover("email");
    } else if (!this.re.test(this.email)) {
      this.emailPopover = "Bitte gib eine gültige E-Mail Adresse ein";
      this.showPopover("email");
    }
    if (!this.password || this.password.length === 0) {
      this.passwordPopover = "Bitte gib ein Passwort ein";
      this.showPopover("password");
    }
    if (this.isRegister) {
      if (this.password && this.password.length < 8) {
        this.passwordPopover = "Das Passwort ist nicht sicher genug";
        this.showPopover("password");
      } else if (this.password !== this.repeatPassword) {
        this.passwordPopover = "Die Passwörter stimmen nicht überein";
        this.showPopover("password");
      }
      if (!this.username || this.username.length === 0) {
        this.usernamePopover = "Bitte überlege dir einen Username";
        this.showPopover("username");
      } else if (this.username == "Gina") {
        this.usernamePopover = "Dieser Username ist schon vergeben";
        this.showPopover("username");
      }
    }

    if (!this.popovers?.filter(item => item.isShown).shift()) {
      if (this.isRegister) {
        this.router.navigate(['/', 'ernaehrungsweise']);
      } else {
        this.router.navigate(['/', 'beitraege']);
      }
    }
  }

  private showPopover(popoverClass: String): void {
    this.popovers?.filter(item => item.popoverClass == popoverClass).shift()?.show();
  }
}


