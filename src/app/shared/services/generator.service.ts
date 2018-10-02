import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GeneratorService {

  private symbolsString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  constructor(private n: number) { }

  generate(): string {
      let str = '';
      const symbolsArray = this.symbolsString.split('');
      for (let i = 0; i < this.n; i++) {
          str += symbolsArray[Math.random() * (symbolsArray.length - 1)];
      }
      return str;
  }

}
