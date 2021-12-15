import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {NbPopoverDirective} from "@nebular/theme";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isRegister = true;
  emailId: any;
  usernameId: any;
  passwordId: any;
  passwordtwiceId: any;
  re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective | undefined;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  updateisLogin(value: any): void {
    this.isRegister = value.includes('Register');
    this.cd.markForCheck();
  }

  onSubmitClick(): void {
    this.popover?.show()
    if(this.isRegister){
      if(this.emailId.length === 0){

      }else if(this.re.test(this.emailId)){

      }
    }else if(!this.isRegister){
      if(this.emailId.length === 0){

      }else if(this.re.test(this.emailId)){

      }
    }
  }
}
