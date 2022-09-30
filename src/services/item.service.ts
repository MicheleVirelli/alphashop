import { Injectable } from '@angular/core';
import { IItems } from 'src/app/modals/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: IItems[] = [
    {codart: '014600301', description: 'BARILLA FARINA 1KG', um: 'PZ', pzcart: 24, weight: 1, price: 1.09, active: true, date: new Date, imageUrl: 'assets/images/products/014600301.jpg'},
    {codart: '013500121', description: 'BARILLA PASTA GR.500 N.70 1/2 PENNE', um: 'PZ', pzcart: 30, weight: 0.5, price: 1.37, active: true, date: new Date, imageUrl: 'assets/images/products/013500121.jpg'},
    {codart: '007686402', description: 'FINDUS FIOR DI NASELLO 300GR', um: 'PZ', pzcart: 8, weight: 0.3, price: 6.46, active: true, date: new Date, imageUrl: 'assets/images/products/014649001.jpg'},
    {codart: '057549001', description: 'FINDUS CROCCOLE 400 GR', um: 'PZ', pzcart: 12, weight: 0.4, price: 5.97, active: true, date: new Date, imageUrl: 'assets/images/products/057549001.jpg'}
  ];

  constructor() { }

  getItems = (): IItems[] => this.items;

  getItemsByCode = (codart: string): IItems => {
    const index = this.items.findIndex(items => items.codart === codart)
    return this.items[index];
  }
}
