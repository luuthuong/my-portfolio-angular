import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { GlobalService } from './services/global.service';
import { LanguageService } from './services/language.service';
import { StorageService } from './services/storage.service';
import { BaseComponent } from './shared/components/base-component.component';
import { FireStorageService } from './services/fire-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'Portfolio LuuThuong';
  constructor(
    private langService: LanguageService,
    private globalService: GlobalService,
    private fireStorageService: FireStorageService
  ) {
    super();
    const lang = StorageService.getItem('lang') as 'en' | 'vi'
    this.langService.changeLanguage(lang || 'en');
    AOS.init({
      // delay: 1000
    });
    AOS.refresh();
  }
  async ngOnInit() {
    const information = this.globalService.updateInformation()
    const project = this.globalService.updateProject();
    const experience = this.globalService.updateExperience();
    const footer = this.globalService.updateContact();
    await Promise.all([information, project, experience])
  }
}
