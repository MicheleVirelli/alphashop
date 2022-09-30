import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { IItems } from 'src/app/modals/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input()
  item: IItems = {
    codart:'',
    description:'',
    um:'',
    pzcart: 0,
    weight: 0,
    price: 0,
    active: true,
    date: new Date(),
    imageUrl: ''
  }

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editArt = () => this.edit.emit(this.item.codart);

  deleteArt = () => this.delete.emit(this.item.codart);

}
