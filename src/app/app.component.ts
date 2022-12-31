import { takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { LanguageService } from './services/language.service';
import { StorageService } from './services/storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalService } from './services/global.service';
import { FirebaseService } from './services/firebase.service';
import { BaseComponent } from './shared/components/base-component.component';
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
    await this.globalService.updateInformation();
  }
}
