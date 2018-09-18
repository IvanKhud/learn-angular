import { Component, OnInit, Input } from '@angular/core';

enum Category {
  Electronics = 'Electronics',
  Clothing = 'Clothing',
  Toys = 'Toys',
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() category: Category;
  @Input() isAvailable: boolean;

  constructor() { }

  ngOnInit() {
  }

  public onBuy(): void {
    console.log('You bought ' + this.name);
  }

}
