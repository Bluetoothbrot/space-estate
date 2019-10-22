/* Author: mk303 */
import { Component, OnInit } from '@angular/core';
import {Language} from "../../models/language";
import {LanguageService} from "../../services/language.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent implements OnInit {

  private currentLang: Language;
  private languages: Language[];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.getLanguages().subscribe((languages: Language[]) => {
      this.languages = languages;

      // Initial language - gotten from server
      this.languageService.getCurrentLanguage()
          .subscribe(lang =>  {
            // highlight correct language
            this.currentLang = lang;
            // log successful language switch
            console.log("Switching language to: ", lang.langCode);
          });
    });
  }

  /**
   * Triggers a language switch. Checks if we need to switch and if so we call languageService to execute switch
   * On success page is reloaded to get all texts in the new language.
   * @param langIndex in languages array of language to which we want to switch
   */
  switchLang(langIndex): void {
    // Check if we need to switch lang
    if (this.currentLang != this.languages[langIndex]) {
      this.languageService.switchLanguage(this.languages[langIndex].langCode).subscribe(
        res => {
          console.log(res);
        },
        (err: HttpErrorResponse) => {
          console.log('Error: ' + err.error);
          console.log('Name: ' + err.name);
          console.log('Message: ' + err.message);
          console.log('Status: ' + err.status);
        },
        // on complete change lang in the frontend
        () => {
          // reload page to get data in correct language
          window.location.reload();
        }
      );
    }
  }
}
