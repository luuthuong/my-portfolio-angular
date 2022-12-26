import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  responsiveMenuVisible: Boolean = false;
  pageYPosition!: number;
  languageFormControl: FormControl= new FormControl();
  cvName: string = "";

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {

    this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val))

    this.languageFormControl.setValue(this.languageService.language)

  }

  scroll(el: any) {
    const element = document.getElementById(el);
    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    } else{
      this.router.navigate(['/home']).then(()=> element!.scrollIntoView({behavior: 'smooth'}) );
    }
    this.responsiveMenuVisible=false;
  }

  downloadCV(){
    this.languageService.translateService.get("Header.cvName").subscribe(val => {
      this.cvName = val
      console.log(val)
      // app url
      let url = window.location.href;

      // Open a new window with the CV
      window.open(url + "/../assets/cv/" + this.cvName, "_blank");
    })

  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
    getScrollPosition(event: any) {
        this.pageYPosition=window.pageYOffset
    }

    changeLanguage(language: string) {
      this.languageFormControl.setValue(language);
    }

}
