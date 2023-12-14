import { Injectable } from '@angular/core';
import {max} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomNumber(max: number): number {
    let rN = Math.floor(Math.random() * (max)+1);

    return rN;
  }
}


