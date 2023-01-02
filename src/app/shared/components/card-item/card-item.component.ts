import { ICardItem } from '../../models/card-item.model';
import { IProject } from './../../models/project.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() data !: ICardItem;
  @Input() type :number = 0;
  @Output() onDeleteEvent = new EventEmitter<void>();
  @Output() onEditEvent = new EventEmitter<ICardItem>();
  constructor() { }

  ngOnInit(): void {
  }
}
