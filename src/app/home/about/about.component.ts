import { Component, OnInit } from '@angular/core';
import { BaseComponentComponent } from 'src/app/shared/components/base-component.component';
import AOS from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseComponentComponent implements OnInit {

  constructor(
  ) {
    super();
    AOS.init();
    AOS.refresh();
  }


  ngOnInit(): void {
  }

}
