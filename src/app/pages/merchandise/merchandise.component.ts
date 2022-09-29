import { Component, OnInit } from '@angular/core';
import { IItems } from '../../modals/item';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {

  merchandise: IItems[] = [
    {codart: '014600301', description: 'BARILLA FARINA 1KG', um: 'PZ', pzcart: 24, weight: 1, price: 1.09, active: true, date: new Date},
    {codart: '013500121', description: 'BARILLA PASTA GR.500 N.70 1/2 PENNE', um: 'PZ', pzcart: 30, weight: 0.5, price: 1.37, active: true, date: new Date},
    {codart: '007686402', description: 'FINDUS FIOR DI NASELLO 300GR', um: 'PZ', pzcart: 8, weight: 0.3, price: 6.46, active: true, date: new Date},
    {codart: '057549001', description: 'FINDUS CROCCOLE 400 GR', um: 'PZ', pzcart: 12, weight: 0.4, price: 5.97, active: true, date: new Date}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
