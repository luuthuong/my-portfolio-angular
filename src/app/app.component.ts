import { Component } from '@angular/core';
import { AppInjector } from './services/app-injector.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LanguageService } from './services/language.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(
    private langService : LanguageService
  ){
    const lang = StorageService.getItem('lang') as 'en'|'vi'
      this.langService.changeLanguage(lang || 'en');
  }
}
