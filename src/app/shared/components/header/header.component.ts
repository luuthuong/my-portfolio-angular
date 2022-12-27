import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { LanguageService } from 'src/app/services/language.service';
import {takeUntil} from 'rxjs/operators';
import { BaseComponentComponent } from '../base-component.component';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger("animateMenu",[
      transition(":enter",[
        query("*", [
          style({opacity: 0, transform: "translateY(-50%)"}),
          stagger(50,[
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity: 1, transform: "none"}))
          ])
        ])
      ])
    ])
  ]
})
export class HeaderComponent extends BaseComponentComponent implements OnInit {
  responsiveMenuVisible: Boolean = false;
  pageYPosition!: number;
  languageFormControl: FormControl= new FormControl(this.languageService.lang);
  cvName: string = "";

  constructor(
    private router: Router,
    public languageService: LanguageService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  scroll(el: any) {
    const element = document.getElementById(el);
    if(element) {
      element.scrollIntoView({behavior: 'smooth',block: 'center'});
    } else{
      this.router.navigate(['']).then(()=> element!.scrollIntoView({behavior: 'smooth'}) );
    }
    this.responsiveMenuVisible=false;
  }

  downloadCV(){
    // this.languageService.translateService.get("Header.cvName").subscribe(val => {
    //   this.cvName = val
    //   console.log(val)
    //   // app url
    //   let url = window.location.href;

    //   // Open a new window with the CV
    //   window.open(url + "/../assets/cv/" + this.cvName, "_blank");
    // })

  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
    getScrollPosition(event: any) {
        this.pageYPosition= window.pageYOffset
    }

    changeLanguage(language: 'vi'|'en') {
      this.languageFormControl.setValue(language);
      this.languageService.changeLanguage(language)
      StorageService.setItem('lang', language)
    }

}
