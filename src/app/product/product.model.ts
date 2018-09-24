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
    ) {}
}
