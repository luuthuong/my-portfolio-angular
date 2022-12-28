import { Component, OnInit } from '@angular/core';
import { BaseComponentComponent } from 'src/app/shared/components/base-component.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseComponentComponent implements OnInit {

  constructor(
  ) {
    super();

  }


  ngOnInit(): void {
  }

}
