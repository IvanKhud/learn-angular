import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GeneratorService {

  private symbolsString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  private n: number;

  constructor() {
      this.n = 10;
  }

  generate(): string {
      let str = '';
      const symbolsArray = this.symbolsString.split('');
      for (let i = 0; i < this.n; i++) {
          str += symbolsArray[(Math.random() * (symbolsArray.length - 1)).toFixed()];
      }
      return str;
  }

}
