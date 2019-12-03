import { Category } from './category'

export class Benefit{
    public categories: Array<Category>;
    public text: string;
    public value: number;
    public id: number;

    constructor($text: string, $value: number, $categories: Array<Category>, $id:number){
        this.categories = $categories;
        this.text = $text;
        this.value = $value;
        this.id = $id;
    }
}

