/* Author: mk303 */
import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginToggleService {

  constructor() { }

  loginPanelOpened = false;
  logoutPanelOpened = false;

  @Output() toggleLogin: EventEmitter<boolean> = new EventEmitter();
  @Output() toggleLogout: EventEmitter<boolean> = new EventEmitter();

  /**
   * Toggle the login window status and inform other components about it
   */
  toggleLoginPanel(): void {
    console.log("Toggle login.")
    this.loginPanelOpened = !this.loginPanelOpened;
    this.toggleLogin.emit(this.loginPanelOpened);
  }

  /**
   * Toggle the logout window status and inform other components about it
   */
  toggleLogoutPanel(): void {
    console.log("Toggle logout.")
    this.logoutPanelOpened = !this.logoutPanelOpened;
    this.toggleLogout.emit(this.logoutPanelOpened);
  }

  /**
   * Close the login window status and inform other components about it
   */
  closeLogin(): void {
    if (this.loginPanelOpened) {
      console.log("Close login.")
      this.loginPanelOpened = false;
      this.toggleLogin.emit(this.loginPanelOpened);
    }
  }

  /**
   * Close the login window status and inform other components about it
   */
  closeLogout(): void {
    if (this.logoutPanelOpened) {
      console.log("Close logout.")
      this.logoutPanelOpened = false;
      this.toggleLogout.emit(this.logoutPanelOpened);
    }
  }
}
