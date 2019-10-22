/* Author: mk303 */
import {Component} from '@angular/core';
import {LoginToggleService} from "../../services/login-toggle.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login-toggle',
  templateUrl: './login-toggle.component.html',
  styleUrls: ['./login-toggle.component.scss']
})
export class LoginToggleComponent {

  constructor(private loginToggleService: LoginToggleService,
              private loginService: LoginService) { }

  /**
   * Toggles login/logout panels status (opened / closed) depending on the users login status (logged in / logged out)
   * - logged in: Logout panel is toggled
   * - logged out: Login panel is toggled
   */
  toggleLoginPanel() {

    this.loginService.isLoggedIn().subscribe(isLoggedIn => {

      console.log('User is logged in: ' + isLoggedIn);

      if (!isLoggedIn) {
        console.log('Calling login panel');
        this.loginToggleService.toggleLoginPanel();
      } else {
        console.log('Calling logout panel');
        this.loginToggleService.toggleLogoutPanel();
      }

      },
      (err) => {
        console.log('Error: ' + JSON.stringify(err.error));
        console.log('Name: ' + err.name);
        console.log('Message: ' + err.message);
        console.log('Status: ' + err.status);
      });
  }

}
