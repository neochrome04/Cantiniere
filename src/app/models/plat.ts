export class Plat {
    name: string;
    price: number;
    category: string;
    date: Date;
    type: string;
    ingredient: Array<string>;
    description: string;
    constructor(name, price, category, date, type, ingredient, description) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.date = date;
        this.type = type;
        this.ingredient = ingredient;
        this.description = description;
    }
}
