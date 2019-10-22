/* Author: mk303, jm114 */
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginToggleService} from '../../services/login-toggle.service';
import {Login, LoginAdapter} from "../../models/login";
import {LoginService} from "../../services/login.service";
import {map} from "rxjs/operators";
import {ContentService} from "../../services/content.service";
import {MessageService} from "../../services/message.service";
import {StaticStrings} from "../../models/static-strings";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private data: Login;
  private loaded = false;

  private loginPanelOpened = false;
  private staticStrings: StaticStrings;

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(
    private loginToggleService: LoginToggleService,
    private loginService: LoginService,
    private contentService: ContentService,
    private loginAdapter: LoginAdapter,
    private messageService: MessageService) { }

  ngOnInit() {
    this.contentService.getContentById(10)
      .pipe(map(item => this.loginAdapter.adapt(item)))
      .subscribe(data => this.data = data);

    this.loginToggleService.toggleLogin.subscribe(
      loginPanelOpened => {
        this.loginPanelOpened = loginPanelOpened;
        this.loaded = true;
      });

    this.contentService.getStaticStrings().then((data) => {
      this.staticStrings = data;
    });
  }

  /**
   * Toggles the login panel status (opened / closed) by calling the loginToggleService to do so
   */
  toggleLoginPanel(): void {
    this.loginToggleService.toggleLoginPanel();
  }

  /**
   * Triggers a login attempt. First check if a username and a password was entered
   * - if so loginService is called to execute login
   * - if not user is asked to provide a username and a password.
   *
   * Depending on response from loginService the user is shown a message.
   * true = success: Login successful, user is greeted
   * false = failed: Username oder password were incorrect
   * *  = undefined: Unknown error due to unknown response
   */
  login(): void {
    let username = this.username.nativeElement.value;
    let password = this.password.nativeElement.value;
    let user;

    // Check if a username and a password was entered
    if (username.length > 3 && password.length > 3) {
      this.loginService.login(username, password).subscribe(
        res => {
          console.log('Response was: ' + JSON.stringify(res));

          if(res == true) {

            this.loginService.getUserName().subscribe((data) => {
              user = data;
              console.log("Username:",JSON.stringify(name));
              // Write out success message
              this.messageService.showSuccessMessage(this.staticStrings.LOGIN_WELCOME_1+' '+user.name+'! '+this.staticStrings.LOGIN_WELCOME_2);
              // closeLogin user login window
              this.loginToggleService.closeLogin();
            });

          } else if(res == false) {

            // Write out info message
            console.log('Error: Username `'+username+'` or password was incorrect');
            this.messageService.showErrorMessage(this.staticStrings.LOGIN_ERROR_1+' \''+username+'\' '+this.staticStrings.LOGIN_ERROR_2);

          } else {
            console.log('Error: Server did not respond with a boolean to verify user login. Response was: '+JSON.stringify(res));
            this.messageService.showErrorMessage(this.staticStrings.ERROR_DEFAULT);
          }
        },
        // Write out error message
        (err) => {
          if (err.error.message == 'blocked') {
            console.log(JSON.stringify(err.error));
            console.log('Call: ' + err.message);
            this.messageService.showErrorMessage(this.staticStrings.LOGIN_ERROR_TIMEOUT);
          } else {
            console.log(JSON.stringify(err.error));
            console.log('Call: ' + err.message);
            this.messageService.showErrorMessage(this.staticStrings.ERROR_DEFAULT);
          }
        }
      );
    }
    // If not both, username and password, were provided, print out a info message so the user can try again
    else {
      this.messageService.showInfoMessage(this.staticStrings.LOGIN_INFO);
    }
  }

}
