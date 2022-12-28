import { Component, OnInit } from '@angular/core';
import { BaseComponentComponent } from 'src/app/shared/components/base-component.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends BaseComponentComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
