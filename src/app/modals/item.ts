//Interfaccia con le proprietà della classe articoli

import { Data } from "@angular/router";

export interface IItems{
  codart: string,
  description: string,
  um: string,
  pzcart: number,
  weight: number,
  price: number,
  active: boolean,
  date: Date,
}
