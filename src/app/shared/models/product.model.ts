export enum Category {
    Electronics = 'Electronics',
    Clothing = 'Clothing',
    Toys = 'Toys',
}

export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean,
        public id: string,
    ) {}
}

export class CartItem {
    constructor(
        public product: Product,
        public quantity: number,
    ) {}
}
