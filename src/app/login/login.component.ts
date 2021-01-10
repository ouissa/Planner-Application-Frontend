import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import {faMicrosoft} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  microsoft = faMicrosoft;
  constructor(private broadcastService: BroadcastService, private authService: MsalService, private router: Router) { }

  ngOnInit(): void {
  }
  
  login() {
    // const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    // if (isIE) {
    //   this.authService.loginRedirect({
    //     extraScopesToConsent: ["user.read", "openid", "profile"]
    //   });
    // } else {
    //   this.authService.loginPopup({
    //     extraScopesToConsent: ["user.read", "openid", "profile"]
    //   });
    // }
    this.router.navigate(['start']);
}
}
