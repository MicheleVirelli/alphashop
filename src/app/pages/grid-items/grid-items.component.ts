import { Component, Input, OnInit } from '@angular/core';
import { IItems } from 'src/app/modals/item';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-grid-items',
  templateUrl: './grid-items.component.html',
  styleUrls: ['./grid-items.component.css']
})
export class GridItemsComponent implements OnInit {

  items$ : IItems[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items$ = this.itemService.getItems();
    console.log(this.items$);
  }

  handleEdit = (codart : string) => {
    console.log("Cliccato tasto modifica del codice " + codart);
  }

  handleDelete = (codart : string) => {
    console.log("Cliccato tasto elimina del codice " + codart);

    this.items$.splice(this.items$.findIndex(x => x.codart === codart), 1);
    console.log(this.items$);

  }

}
