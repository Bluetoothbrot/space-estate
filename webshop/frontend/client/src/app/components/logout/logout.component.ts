import { Component, OnInit } from '@angular/core';
import {Logout, LogoutAdapter} from "../../models/logout";
import {ContentService} from "../../services/content.service";
import {map} from "rxjs/operators";
import {LoginToggleService} from "../../services/login-toggle.service";
import {MessageService} from "../../services/message.service";
import {LoginService} from "../../services/login.service";
import {StaticStrings} from "../../models/static-strings";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  private data: Logout;
  private loaded: boolean;
  private logoutPanelOpened = false;
  private staticStrings: StaticStrings;

  constructor(private contentService: ContentService,
              private loginToggleService: LoginToggleService,
              private logoutAdapter: LogoutAdapter,
              private messageService: MessageService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.contentService.getContentById(13)
      .pipe(map(item => this.logoutAdapter.adapt(item)))
      .subscribe(data => this.data = data);

    this.loginToggleService.toggleLogout.subscribe(
      logoutPanelOpened => {
        this.logoutPanelOpened = logoutPanelOpened;
        this.loaded = true;});

    this.contentService.getStaticStrings().then((data) => {
      this.staticStrings = data;
    });
  }

  /**
   * Toggles the logout panel status (opened / closed) by calling the loginToggleService to do so
   */
  toggleLogoutPanel() {
    this.loginToggleService.toggleLogoutPanel();
  }

  /**
   * Triggers a logout attempt.
   *
   * Depending on response from loginService the user is shown a message.
   * true = success: Logout successful, user is informed
   * false = failed: Something went wrong on server side, inform user
   * *  = undefined: Something went wrong on server side, inform user
   */
  logout() {
    this.loginService.logout().subscribe(
      res => {
        console.log('Response was: ' + JSON.stringify(res));

        if(res == true) {
          // Write out success message
          this.messageService.showSuccessMessage(this.staticStrings.LOGOUT_SUCCESSFUL);
          // closeLogin user login window
          this.loginToggleService.closeLogout();

        } else {
          console.log('Error: Logout did not work. Response was: '+JSON.stringify(res));
          this.messageService.showErrorMessage(this.staticStrings.ERROR_DEFAULT);
        }
      },
      // Write out error message
      (err) => {
        console.log(JSON.stringify(err.error));
        console.log('Call: ' + err.message);
        this.messageService.showErrorMessage(this.staticStrings.ERROR_DEFAULT);
      }
    );
  }
}
