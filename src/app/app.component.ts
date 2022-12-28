import { Component } from '@angular/core';
import AOS from 'aos';
import { LanguageService } from './services/language.service';
import { StorageService } from './services/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio LuuThuong';
  constructor(
    private langService: LanguageService
  ) {
    const lang = StorageService.getItem('lang') as 'en' | 'vi'
    this.langService.changeLanguage(lang || 'en');
    AOS.init({
      // delay: 1000
    });
    AOS.refresh();
  }
}
