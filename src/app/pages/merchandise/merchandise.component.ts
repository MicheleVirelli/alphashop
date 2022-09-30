import { Component, OnInit } from '@angular/core';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { ItemService } from 'src/services/item.service';
import { IItems } from '../../modals/item';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {

  merchandise: IItems[] = [];
  constructor(private itemsService: ItemService) { }

  ngOnInit(): void {
    this.merchandise = this.itemsService.getItems();
  }

}
