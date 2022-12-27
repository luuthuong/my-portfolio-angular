import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: "vi" | "en" = "en";
  constructor(
    public translateService: TranslateService,
  ) { }

  initLanguage() {
    this.translateService.addLangs(["en", "vi"]);
    let language = navigator.language || (navigator as any).userLanguage;
    language = language.split("-").includes("vi") ? "vi" : "en"
    this.translateService.setDefaultLang(language)
    this.language = language
  }
  get lang(){
    return this.language;
  }

  changeLanguage(language: "vi" | "en") {
    this.translateService.setDefaultLang(language)
    this.language = language;
  }
}
