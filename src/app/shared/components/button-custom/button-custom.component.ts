import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponentComponent } from '../base-component.component';

@Component({
  selector: 'app-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.scss']
})
export class ButtonCustomComponent extends BaseComponentComponent implements OnInit {
  @Input() title: string = '';
  @Input() customClass: string = '';
  @Output() onClickEvent = new EventEmitter<any>();
  constructor() { 
    super();
  }

  ngOnInit(): void {
  }
}
